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
  whatsapp: payload.whatsapp || null,
  business_location: payload.location || null,
  industry: payload.industry || null,
  current_website: payload.website || null,
  need: payload.projectType || null,
  pages_needed: payload.pagesNeeded || null,
  core_services: payload.coreServices || null,
  primary_goal: payload.primaryGoal || null,
  timeline: payload.timeline || null,
  style_references: payload.styleRefs || null,
  budget_range: payload.budget || null,
  brand_assets: {
    logo: !!payload.brandAssetsLogo,
    photos: !!payload.brandAssetsPhotos,
    copy: !!payload.brandAssetsCopy,
  },
  domain_status: payload.domainStatus || null,
  hosting_status: payload.hostingStatus || null,
  integrations_needed: payload.integrations || null,
  maintenance_tier_interest: payload.maintenanceTier || null,
  it_support_needs: payload.itSupportNeeds || null,
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
