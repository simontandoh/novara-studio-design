import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";
import { signOutAction } from "@/app/(dashboard)/actions";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f3f3f1]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-[220px_1fr]">
        <DashboardSidebar />
        <section className="p-6 md:p-8">
          <div className="mb-6 flex items-center justify-end">
            <form action={signOutAction}>
              <Button
                type="submit"
                variant="outline"
                className="border-[#2e2e2e] bg-[#111111] text-[#deded9] hover:bg-[#1a1a1a]"
              >
                Sign Out
              </Button>
            </form>
          </div>
          {children}
        </section>
      </div>
    </div>
  );
}
