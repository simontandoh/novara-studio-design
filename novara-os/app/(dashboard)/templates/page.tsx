import { createClient } from "@/lib/supabase/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function TemplatesPage() {
  const supabase = await createClient();
  const { data: templates, error } = await supabase
    .from("templates")
    .select("*")
    .order("name", { ascending: true });

  return (
    <section className="space-y-4">
      <header>
        <h1 className="text-2xl tracking-tight text-[#f7f7f5]">Template Library</h1>
        <p className="mt-1 text-sm text-[#a6a6a2]">
          Pre-seeded framework templates for Novara site builds.
        </p>
      </header>

      {error ? (
        <p className="rounded-lg border border-[#4a2a2a] bg-[#221616] px-3 py-2 text-sm text-[#e4b7b7]">
          Failed to load templates: {error.message}
        </p>
      ) : null}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {templates?.map((template) => (
          <Card key={template.id} className="border-[#1f1f1f] bg-[#111111]">
            <CardHeader>
              <CardTitle className="text-base text-[#f7f7f5]">
                {template.name}
              </CardTitle>
              <p className="text-sm text-[#a6a6a2]">{template.industry}</p>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-[#c8c8c4]">
              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-[#9a9a95]">
                  Recommended pages
                </p>
                <p>{template.recommended_pages.join(" • ")}</p>
              </div>
              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-[#9a9a95]">
                  Sections
                </p>
                <p>{template.recommended_sections.join(" • ")}</p>
              </div>
              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-[#9a9a95]">
                  Tone
                </p>
                <p>{template.tone}</p>
              </div>
              <div>
                <p className="mb-1 text-xs uppercase tracking-wider text-[#9a9a95]">
                  CTA style
                </p>
                <p>{template.cta_style}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
