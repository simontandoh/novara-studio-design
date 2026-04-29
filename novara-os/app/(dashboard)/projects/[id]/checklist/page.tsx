type ProjectChecklistPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProjectChecklistPage({
  params,
}: ProjectChecklistPageProps) {
  const { id } = await params;

  return (
    <section className="space-y-4">
      <h1 className="text-2xl tracking-tight text-[#f7f7f5]">Project Checklist</h1>
      <div className="rounded-xl border border-[#1f1f1f] bg-[#111111] p-6">
        <p className="text-sm text-[#a6a6a2]">
          Checklist interface for project <span className="text-[#f3f3f1]">{id}</span>{" "}
          is scheduled for Phase 4.
        </p>
      </div>
    </section>
  );
}
