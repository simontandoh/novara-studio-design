import { createClient } from "@/lib/supabase/server";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function ComponentsPage() {
  const supabase = await createClient();
  const { data: components, error } = await supabase
    .from("components")
    .select("*")
    .order("name", { ascending: true });

  return (
    <section className="space-y-4">
      <header>
        <h1 className="text-2xl tracking-tight text-[#f7f7f5]">Component Library</h1>
        <p className="mt-1 text-sm text-[#a6a6a2]">
          Reusable section blocks for deterministic page assembly.
        </p>
      </header>

      {error ? (
        <p className="rounded-lg border border-[#4a2a2a] bg-[#221616] px-3 py-2 text-sm text-[#e4b7b7]">
          Failed to load components: {error.message}
        </p>
      ) : null}

      <div className="rounded-xl border border-[#1f1f1f] bg-[#111111] p-4">
        <Table>
          <TableHeader>
            <TableRow className="border-[#1f1f1f] hover:bg-transparent">
              <TableHead className="text-[#a6a6a2]">Name</TableHead>
              <TableHead className="text-[#a6a6a2]">Category</TableHead>
              <TableHead className="text-[#a6a6a2]">Purpose</TableHead>
              <TableHead className="text-[#a6a6a2]">Recommended usage</TableHead>
              <TableHead className="text-[#a6a6a2]">Example copy</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {components?.map((component) => (
              <TableRow key={component.id} className="border-[#1f1f1f] hover:bg-[#151515]">
                <TableCell className="text-[#f3f3f1]">{component.name}</TableCell>
                <TableCell className="text-[#b0b0ac]">{component.category}</TableCell>
                <TableCell className="text-[#b0b0ac]">{component.purpose}</TableCell>
                <TableCell className="text-[#b0b0ac]">
                  {component.recommended_usage}
                </TableCell>
                <TableCell className="text-[#d9d0bd]">{component.example_copy}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
