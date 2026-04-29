"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Database } from "@/types/database";

type ClientStatus = Database["public"]["Enums"]["client_status"];

function toClientStatus(value: string): ClientStatus {
  const allowed: ClientStatus[] = ["lead", "active", "paused", "completed"];
  return allowed.includes(value as ClientStatus) ? (value as ClientStatus) : "lead";
}

export async function createClientAction(formData: FormData) {
  const supabase = await createClient();

  const payload = {
    business_name: String(formData.get("business_name") ?? "").trim(),
    contact_name: String(formData.get("contact_name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim() || null,
    industry: String(formData.get("industry") ?? "").trim(),
    location: String(formData.get("location") ?? "").trim() || null,
    status: toClientStatus(String(formData.get("status") ?? "lead")),
    notes: String(formData.get("notes") ?? "").trim() || null,
  };

  if (!payload.business_name || !payload.contact_name || !payload.email || !payload.industry) {
    redirect("/clients?error=Please%20complete%20all%20required%20client%20fields");
  }

  const { error } = await supabase.from("clients").insert(payload);

  if (error) {
    redirect(`/clients?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/clients");
  redirect("/clients");
}

export async function updateClientAction(formData: FormData) {
  const supabase = await createClient();
  const clientId = String(formData.get("id") ?? "").trim();

  if (!clientId) {
    redirect("/clients?error=Missing%20client%20identifier");
  }

  const payload = {
    business_name: String(formData.get("business_name") ?? "").trim(),
    contact_name: String(formData.get("contact_name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim() || null,
    industry: String(formData.get("industry") ?? "").trim(),
    location: String(formData.get("location") ?? "").trim() || null,
    status: toClientStatus(String(formData.get("status") ?? "lead")),
    notes: String(formData.get("notes") ?? "").trim() || null,
  };

  const { error } = await supabase.from("clients").update(payload).eq("id", clientId);

  if (error) {
    redirect(`/clients/${clientId}?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/clients");
  revalidatePath(`/clients/${clientId}`);
  redirect(`/clients/${clientId}?saved=1`);
}
