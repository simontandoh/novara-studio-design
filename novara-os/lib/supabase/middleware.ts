import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import type { Database } from "@/types/database";
import { getSupabaseEnv } from "@/lib/supabase/env";

const PROTECTED_ROUTES = [
  "/",
  "/clients",
  "/intake",
  "/templates",
  "/components",
  "/generator",
  "/checklist",
  "/projects",
];

function isProtectedPath(pathname: string) {
  return PROTECTED_ROUTES.some((route) => {
    if (route === "/") return pathname === "/";
    return pathname === route || pathname.startsWith(`${route}/`);
  });
}

export async function updateSession(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const response = NextResponse.next({
    request,
  });

  const env = getSupabaseEnv();
  if (!env) {
    return response;
  }

  const supabase = createServerClient<Database>(
    env.url,
    env.anonKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value);
            response.cookies.set(name, value, options);
          });
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && isProtectedPath(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    if (pathname !== "/") {
      url.searchParams.set("next", pathname);
    }
    return NextResponse.redirect(url);
  }

  if (user && pathname === "/login") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return response;
}
