import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

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

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const payload = req.body || {};
    const row = buildRow(payload);
    const supabase = getClient();
    const { error } = await supabase.from("lead_intakes").insert(row);

    if (error) {
      res.status(500).json({ error: "Failed to store lead." });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: "Server error." });
  }
}
