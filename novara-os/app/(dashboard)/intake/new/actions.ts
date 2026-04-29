"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { DEFAULT_CHECKLIST_ITEMS } from "@/lib/generator/defaultChecklistItems";
import type { Database } from "@/types/database";

const ALLOWED_GOALS: Database["public"]["Enums"]["primary_goal"][] = [
  "calls",
  "bookings",
  "enquiries",
  "sales",
];

function normalizeList(value: string) {
  return value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function parseGoal(value: string): Database["public"]["Enums"]["primary_goal"] {
  return ALLOWED_GOALS.includes(value as Database["public"]["Enums"]["primary_goal"])
    ? (value as Database["public"]["Enums"]["primary_goal"])
    : "enquiries";
}

export async function createIntakeAction(formData: FormData) {
  const supabase = await createClient();

  const clientId = String(formData.get("client_id") ?? "").trim();
  const businessName = String(formData.get("business_name") ?? "").trim();
  const industry = String(formData.get("industry") ?? "").trim();
  const location = String(formData.get("location") ?? "").trim() || null;
  const targetCustomer = String(formData.get("target_customer") ?? "").trim();
  const mainService = String(formData.get("main_service") ?? "").trim();
  const secondaryServices = normalizeList(
    String(formData.get("secondary_services") ?? "").trim(),
  );
  const brandTone = String(formData.get("brand_tone") ?? "").trim() || null;
  const preferredColours =
    String(formData.get("preferred_colours") ?? "").trim() || null;
  const competitors = normalizeList(String(formData.get("competitors") ?? "").trim());
  const existingWebsite =
    String(formData.get("existing_website") ?? "").trim() || null;
  const primaryGoal = parseGoal(String(formData.get("primary_goal") ?? ""));
  const pagesNeeded = formData.getAll("pages_needed").map((item) => String(item));
  const automationNeeds =
    String(formData.get("automation_needs") ?? "").trim() || null;
  const notes = String(formData.get("notes") ?? "").trim() || null;

  if (!clientId || !businessName || !industry || !targetCustomer || !mainService) {
    redirect("/intake/new?error=Please%20complete%20all%20required%20fields");
  }

  const { data: intake, error: intakeError } = await supabase
    .from("website_intakes")
    .insert({
      client_id: clientId,
      business_name: businessName,
      industry,
      location,
      target_customer: targetCustomer,
      main_service: mainService,
      secondary_services: secondaryServices,
      brand_tone: brandTone,
      preferred_colours: preferredColours,
      competitors,
      existing_website: existingWebsite,
      primary_goal: primaryGoal,
      pages_needed: pagesNeeded,
      automation_needs: automationNeeds,
      notes,
    })
    .select("id")
    .single();

  if (intakeError || !intake) {
    redirect(`/intake/new?error=${encodeURIComponent(intakeError?.message ?? "Failed to save intake")}`);
  }

  const { data: project, error: projectError } = await supabase
    .from("projects")
    .insert({
      client_id: clientId,
      intake_id: intake.id,
      name: `${businessName} Website Build`,
      status: "draft",
    })
    .select("id")
    .single();

  if (projectError || !project) {
    redirect(`/intake/new?error=${encodeURIComponent(projectError?.message ?? "Failed to create project")}`);
  }

  const checklistRows = DEFAULT_CHECKLIST_ITEMS.map((label, index) => ({
    project_id: project.id,
    label,
    order_index: index + 1,
  }));

  await supabase.from("checklist_items").insert(checklistRows);

  revalidatePath("/");
  revalidatePath("/intake/new");
  revalidatePath(`/projects/${project.id}`);
  redirect(`/projects/${project.id}`);
}
