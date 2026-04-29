"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/" },
  { label: "Clients", href: "/clients" },
  { label: "Intake", href: "/intake/new" },
  { label: "Templates", href: "/templates" },
  { label: "Components", href: "/components" },
  { label: "Generator", href: "/generator" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-b border-[#1f1f1f] p-6 lg:min-h-screen lg:border-r lg:border-b-0">
      <p className="text-xs tracking-[0.28em] text-[#bba87d]">NOVARA OS</p>
      <p className="mt-1 text-sm text-[#b0b0ac]">Internal command centre</p>

      <nav className="mt-8 space-y-1">
        {NAV_ITEMS.map((item) => {
          const active = isActive(pathname, item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-lg border px-3 py-2 text-sm transition-colors ${
                active
                  ? "border-[#3a3326] bg-[#171512] text-[#f0e5ce]"
                  : "border-transparent text-[#9f9f99] hover:border-[#252525] hover:bg-[#121212] hover:text-[#d6d6d2]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
