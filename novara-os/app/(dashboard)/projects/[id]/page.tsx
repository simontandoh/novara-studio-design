import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

type ProjectDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: project } = await supabase
    .from("projects")
    .select("id,name,status,client_id,intake_id,created_at,updated_at")
    .eq("id", id)
    .single();

  if (!project) {
    notFound();
  }

  return (
    <section className="space-y-4">
      <h1 className="text-2xl tracking-tight text-[#f7f7f5]">Project Detail</h1>

      <div className="rounded-xl border border-[#1f1f1f] bg-[#111111] p-6">
        <h2 className="text-lg text-[#f3f3f1]">{project.name}</h2>
        <dl className="mt-3 grid gap-2 text-sm text-[#b0b0ac] sm:grid-cols-2">
          <div>
            <dt className="text-[#8f8f89]">Status</dt>
            <dd className="capitalize text-[#e7dcc5]">{project.status.replace("_", " ")}</dd>
          </div>
          <div>
            <dt className="text-[#8f8f89]">Client ID</dt>
            <dd>{project.client_id}</dd>
          </div>
          <div>
            <dt className="text-[#8f8f89]">Intake ID</dt>
            <dd>{project.intake_id ?? "-"}</dd>
          </div>
          <div>
            <dt className="text-[#8f8f89]">Updated</dt>
            <dd>{new Date(project.updated_at).toLocaleString()}</dd>
          </div>
        </dl>

        <div className="mt-5">
          <Link
            href={`/projects/${project.id}/checklist`}
            className="rounded-lg border border-[#3a3326] bg-[#171512] px-4 py-2 text-sm font-medium text-[#f0e5ce]"
          >
            Open Checklist
          </Link>
        </div>
      </div>
    </section>
  );
}
