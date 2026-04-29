"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function signInAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "").trim();
  const nextPath = String(formData.get("next") ?? "/").trim();

  if (!email || !password) {
    redirect("/login?error=Email%20and%20password%20are%20required");
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect(`/login?error=${encodeURIComponent(error.message)}`);
  }

  if (nextPath && nextPath.startsWith("/") && !nextPath.startsWith("//")) {
    redirect(nextPath);
  }

  redirect("/");
}
