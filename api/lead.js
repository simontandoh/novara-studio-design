import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const leadEmailProvider = process.env.LEAD_EMAIL_PROVIDER;
const leadEmailTo = process.env.LEAD_EMAIL_TO;
const leadEmailFrom = process.env.LEAD_EMAIL_FROM;

const rateLimitWindowMs = 15 * 60 * 1000;
const rateLimitMax = 5;
const rateLimitStore = new Map();

const getClientIp = (req) => {
  const forwarded = req.headers["x-forwarded-for"];
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.socket?.remoteAddress || "unknown";
};

const isRateLimited = (ip) => {
  const now = Date.now();
  const existing = rateLimitStore.get(ip) || [];
  const filtered = existing.filter((timestamp) => now - timestamp < rateLimitWindowMs);
  filtered.push(now);
  rateLimitStore.set(ip, filtered);
  return filtered.length > rateLimitMax;
};

const getClient = () => {
  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase server credentials.");
  }
  return createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false },
  });
};

const buildRow = (payload) => ({
  email: payload.email || null,
  phone: payload.phone || null,
  business_location: payload.location || null,
  industry: payload.industry || null,
  industry_other: payload.industryOther || null,
  current_website: payload.website || null,
  need: payload.whatNeed || payload.projectType || null,
  pages_needed: Array.isArray(payload.pagesNeeded)
    ? payload.pagesNeeded.join(", ")
    : payload.pagesNeeded || null,
  core_services: Array.isArray(payload.coreServicesProducts)
    ? payload.coreServicesProducts.join(", ")
    : payload.coreServicesProducts || null,
  primary_goal: payload.primaryGoal || null,
  timeline_unit: payload.timelineUnit || null,
  timeline_value: typeof payload.timelineValue === "number" ? payload.timelineValue : null,
  style_references: Array.isArray(payload.styleRefs)
    ? payload.styleRefs.join(", ")
    : payload.styleRefs || null,
  budget_range: payload.budgetRange || null,
  brand_assets: payload.brandAssets || {
    logo: false,
    photos: false,
    copy: false,
  },
  domain_status: payload.domainStatus || null,
  hosting_status: payload.hostingStatus || null,
  maintenance_tier_interest: payload.maintenanceTierInterest || payload.maintenanceTier || null,
  raw_payload: payload,
});

const sendLeadEmail = async (payload) => {
  if (!leadEmailProvider || !leadEmailTo || !leadEmailFrom) return;
  const subject = `New lead: ${payload.fullName || "Website enquiry"}`;
  const text = [
    `Name: ${payload.fullName || "N/A"}`,
    `Business: ${payload.businessName || "N/A"}`,
    `Email: ${payload.email || "N/A"}`,
    `Phone: ${payload.phone || "N/A"}`,
    `Location: ${payload.location || "N/A"}`,
    `Industry: ${payload.industry || "N/A"}`,
    `Project type: ${payload.projectType || "N/A"}`,
    `Primary goal: ${payload.primaryGoal || "N/A"}`,
    `Domain status: ${payload.domainStatus || "N/A"}`,
    `Hosting status: ${payload.hostingStatus || "N/A"}`,
    `Maintenance tier: ${payload.maintenanceTier || "N/A"}`,
    `Website: ${payload.website || "N/A"}`,
  ].join("\n");

  if (leadEmailProvider === "resend") {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return;
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: leadEmailFrom,
        to: leadEmailTo,
        subject,
        text,
      }),
    });
    return;
  }

  if (leadEmailProvider === "postmark") {
    const token = process.env.POSTMARK_SERVER_TOKEN;
    if (!token) return;
    await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers: {
        "X-Postmark-Server-Token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        From: leadEmailFrom,
        To: leadEmailTo,
        Subject: subject,
        TextBody: text,
      }),
    });
  }
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      res.status(429).json({ error: "Too many requests." });
      return;
    }

    const payload = req.body || {};
    const honeypot = payload.honeypot;
    const formDurationMs = payload.formDurationMs;
    const spamLikely =
      Boolean(honeypot) || (typeof formDurationMs === "number" && formDurationMs < 2000);
    if (spamLikely) {
      res.status(200).json({ ok: true });
      return;
    }

    const row = buildRow(payload);
    const supabase = getClient();
    const { error } = await supabase.from("lead_intakes").insert(row);

    if (error) {
      res.status(500).json({ error: "Failed to store lead." });
      return;
    }

    try {
      await sendLeadEmail(payload);
    } catch (emailError) {
      console.warn("Lead email failed", emailError);
    }

    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: "Server error." });
  }
}
