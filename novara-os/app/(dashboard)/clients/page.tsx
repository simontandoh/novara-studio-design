import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { AddClientDialog } from "@/app/(dashboard)/clients/add-client-dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ClientsPageProps = {
  searchParams?: Promise<{ q?: string; error?: string }>;
};

export default async function ClientsPage({ searchParams }: ClientsPageProps) {
  const params = searchParams ? await searchParams : undefined;
  const query = params?.q?.trim() ?? "";
  const supabase = await createClient();

  let request = supabase
    .from("clients")
    .select("id,business_name,contact_name,email,industry,status,updated_at")
    .order("updated_at", { ascending: false });

  if (query) {
    request = request.or(
      `business_name.ilike.%${query}%,contact_name.ilike.%${query}%,email.ilike.%${query}%`,
    );
  }

  const { data: clients, error } = await request;

  return (
    <section className="space-y-6">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl tracking-tight text-[#f7f7f5]">Clients</h1>
          <p className="mt-1 text-sm text-[#a6a6a2]">
            Manage businesses, contacts, and project status.
          </p>
        </div>
        <AddClientDialog />
      </header>

      {params?.error ? (
        <p className="rounded-lg border border-[#4a2a2a] bg-[#221616] px-3 py-2 text-sm text-[#e4b7b7]">
          {params.error}
        </p>
      ) : null}

      <div className="rounded-xl border border-[#1f1f1f] bg-[#111111] p-4">
        <form className="mb-4">
          <input
            name="q"
            defaultValue={query}
            placeholder="Search by business, contact, or email"
            className="h-9 w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 text-sm text-[#f3f3f1] outline-none focus:border-[#3f3f3f]"
          />
        </form>

        <Table>
          <TableHeader>
            <TableRow className="border-[#1f1f1f] hover:bg-transparent">
              <TableHead className="text-[#a6a6a2]">Business</TableHead>
              <TableHead className="text-[#a6a6a2]">Contact</TableHead>
              <TableHead className="text-[#a6a6a2]">Email</TableHead>
              <TableHead className="text-[#a6a6a2]">Industry</TableHead>
              <TableHead className="text-[#a6a6a2]">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {error ? (
              <TableRow className="border-[#1f1f1f]">
                <TableCell colSpan={5} className="text-[#e4b7b7]">
                  Failed to load clients: {error.message}
                </TableCell>
              </TableRow>
            ) : null}
            {!error && (clients?.length ?? 0) === 0 ? (
              <TableRow className="border-[#1f1f1f]">
                <TableCell colSpan={5} className="text-[#a6a6a2]">
                  No clients yet.
                </TableCell>
              </TableRow>
            ) : null}
            {clients?.map((client) => (
              <TableRow key={client.id} className="border-[#1f1f1f] hover:bg-[#151515]">
                <TableCell>
                  <Link href={`/clients/${client.id}`} className="text-[#f3f3f1] underline-offset-4 hover:underline">
                    {client.business_name}
                  </Link>
                </TableCell>
                <TableCell className="text-[#b0b0ac]">{client.contact_name}</TableCell>
                <TableCell className="text-[#b0b0ac]">{client.email}</TableCell>
                <TableCell className="text-[#b0b0ac]">{client.industry}</TableCell>
                <TableCell className="capitalize text-[#e7dcc5]">{client.status.replace("_", " ")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
