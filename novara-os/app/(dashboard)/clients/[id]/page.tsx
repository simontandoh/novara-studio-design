import Link from "next/link";
import { notFound } from "next/navigation";
import { updateClientAction } from "@/app/(dashboard)/clients/actions";
import { createClient } from "@/lib/supabase/server";

type ClientDetailPageProps = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ saved?: string; error?: string }>;
};

export default async function ClientDetailPage({
  params,
  searchParams,
}: ClientDetailPageProps) {
  const { id } = await params;
  const query = searchParams ? await searchParams : undefined;
  const supabase = await createClient();

  const { data: client } = await supabase
    .from("clients")
    .select("*")
    .eq("id", id)
    .single();

  if (!client) {
    notFound();
  }

  return (
    <section className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/clients" className="text-sm text-[#a6a6a2] underline-offset-4 hover:underline">
            Back to clients
          </Link>
          <h1 className="mt-2 text-2xl tracking-tight text-[#f7f7f5]">
            {client.business_name}
          </h1>
          <p className="text-sm text-[#a6a6a2]">Client detail and quick edits</p>
        </div>
      </div>

      {query?.saved ? (
        <p className="rounded-lg border border-[#28472f] bg-[#172219] px-3 py-2 text-sm text-[#b7d9bc]">
          Client updated successfully.
        </p>
      ) : null}
      {query?.error ? (
        <p className="rounded-lg border border-[#4a2a2a] bg-[#221616] px-3 py-2 text-sm text-[#e4b7b7]">
          {query.error}
        </p>
      ) : null}

      <form
        action={updateClientAction}
        className="rounded-xl border border-[#1f1f1f] bg-[#111111] p-6"
      >
        <input type="hidden" name="id" value={client.id} />
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="business_name" className="mb-1 block text-sm text-[#a6a6a2]">
              Business name
            </label>
            <input
              id="business_name"
              name="business_name"
              defaultValue={client.business_name}
              required
              className="h-9 w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 text-sm"
            />
          </div>
          <div>
            <label htmlFor="contact_name" className="mb-1 block text-sm text-[#a6a6a2]">
              Contact name
            </label>
            <input
              id="contact_name"
              name="contact_name"
              defaultValue={client.contact_name}
              required
              className="h-9 w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-[#a6a6a2]">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={client.email}
              required
              className="h-9 w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 text-sm"
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1 block text-sm text-[#a6a6a2]">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              defaultValue={client.phone ?? ""}
              className="h-9 w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 text-sm"
            />
          </div>
          <div>
            <label htmlFor="industry" className="mb-1 block text-sm text-[#a6a6a2]">
              Industry
            </label>
            <input
              id="industry"
              name="industry"
              defaultValue={client.industry}
              required
              className="h-9 w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 text-sm"
            />
          </div>
          <div>
            <label htmlFor="location" className="mb-1 block text-sm text-[#a6a6a2]">
              Location
            </label>
            <input
              id="location"
              name="location"
              defaultValue={client.location ?? ""}
              className="h-9 w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 text-sm"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="status" className="mb-1 block text-sm text-[#a6a6a2]">
              Status
            </label>
            <select
              id="status"
              name="status"
              defaultValue={client.status}
              className="h-9 w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 text-sm capitalize"
            >
              <option value="lead">Lead</option>
              <option value="active">Active</option>
              <option value="paused">Paused</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="notes" className="mb-1 block text-sm text-[#a6a6a2]">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={5}
              defaultValue={client.notes ?? ""}
              className="w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="rounded-lg border border-[#3a3326] bg-[#171512] px-4 py-2 text-sm font-medium text-[#f0e5ce]"
          >
            Save changes
          </button>
        </div>
      </form>
    </section>
  );
}
