import { createClient } from "@/lib/supabase/server";
import { createIntakeAction } from "@/app/(dashboard)/intake/new/actions";

const PAGE_OPTIONS = [
  "Home",
  "About",
  "Services",
  "Process",
  "Testimonials",
  "Gallery",
  "Pricing",
  "FAQ",
  "Contact",
  "Booking",
  "Menu",
  "Locations",
];

type IntakePageProps = {
  searchParams?: Promise<{ error?: string }>;
};

export default async function NewIntakePage({ searchParams }: IntakePageProps) {
  const params = searchParams ? await searchParams : undefined;
  const supabase = await createClient();
  const { data: clients } = await supabase
    .from("clients")
    .select("id,business_name")
    .order("business_name", { ascending: true });

  return (
    <section className="space-y-4">
      <div>
        <h1 className="text-2xl tracking-tight text-[#f7f7f5]">New Website Intake</h1>
        <p className="mt-1 text-sm text-[#a6a6a2]">
          Capture business context and convert it into a structured build brief.
        </p>
      </div>

      {params?.error ? (
        <p className="rounded-lg border border-[#4a2a2a] bg-[#221616] px-3 py-2 text-sm text-[#e4b7b7]">
          {params.error}
        </p>
      ) : null}

      <form action={createIntakeAction} className="space-y-4">
        <details open className="rounded-xl border border-[#1f1f1f] bg-[#111111] p-5">
          <summary className="cursor-pointer text-base font-medium text-[#f7f7f5]">
            Business
          </summary>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="client_id" className="mb-1 block text-sm text-[#a6a6a2]">
                Existing client
              </label>
              <select
                id="client_id"
                name="client_id"
                required
                className="h-9 w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 text-sm"
              >
                <option value="">Select client</option>
                {clients?.map((client) => (
                  <option key={client.id} value={client.id}>
                    {client.business_name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="business_name" className="mb-1 block text-sm text-[#a6a6a2]">
                Business name
              </label>
              <input
                id="business_name"
                name="business_name"
                required
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
                className="h-9 w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 text-sm"
              />
            </div>
          </div>
        </details>

        <details open className="rounded-xl border border-[#1f1f1f] bg-[#111111] p-5">
          <summary className="cursor-pointer text-base font-medium text-[#f7f7f5]">
            Customer
          </summary>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="target_customer" className="mb-1 block text-sm text-[#a6a6a2]">
                Target customer
              </label>
              <input
                id="target_customer"
                name="target_customer"
                required
                className="h-9 w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 text-sm"
              />
            </div>
            <div>
              <label htmlFor="main_service" className="mb-1 block text-sm text-[#a6a6a2]">
                Main service
              </label>
              <input
                id="main_service"
                name="main_service"
                required
                className="h-9 w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 text-sm"
              />
            </div>
            <div>
              <label htmlFor="secondary_services" className="mb-1 block text-sm text-[#a6a6a2]">
                Secondary services (comma separated)
              </label>
              <input
                id="secondary_services"
                name="secondary_services"
                className="h-9 w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 text-sm"
              />
            </div>
          </div>
        </details>

        <details open className="rounded-xl border border-[#1f1f1f] bg-[#111111] p-5">
          <summary className="cursor-pointer text-base font-medium text-[#f7f7f5]">
            Brand
          </summary>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="brand_tone" className="mb-1 block text-sm text-[#a6a6a2]">
                Brand tone
              </label>
              <input
                id="brand_tone"
                name="brand_tone"
                className="h-9 w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 text-sm"
              />
            </div>
            <div>
              <label htmlFor="preferred_colours" className="mb-1 block text-sm text-[#a6a6a2]">
                Preferred colours
              </label>
              <input
                id="preferred_colours"
                name="preferred_colours"
                className="h-9 w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 text-sm"
              />
            </div>
            <div>
              <label htmlFor="competitors" className="mb-1 block text-sm text-[#a6a6a2]">
                Competitors (comma separated)
              </label>
              <input
                id="competitors"
                name="competitors"
                className="h-9 w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 text-sm"
              />
            </div>
            <div>
              <label htmlFor="existing_website" className="mb-1 block text-sm text-[#a6a6a2]">
                Existing website
              </label>
              <input
                id="existing_website"
                name="existing_website"
                placeholder="https://"
                className="h-9 w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 text-sm"
              />
            </div>
          </div>
        </details>

        <details open className="rounded-xl border border-[#1f1f1f] bg-[#111111] p-5">
          <summary className="cursor-pointer text-base font-medium text-[#f7f7f5]">
            Goals
          </summary>
          <div className="mt-4 grid gap-4">
            <div>
              <label htmlFor="primary_goal" className="mb-1 block text-sm text-[#a6a6a2]">
                Primary goal
              </label>
              <select
                id="primary_goal"
                name="primary_goal"
                required
                className="h-9 w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 text-sm"
              >
                <option value="calls">Calls</option>
                <option value="bookings">Bookings</option>
                <option value="enquiries">Enquiries</option>
                <option value="sales">Sales</option>
              </select>
            </div>

            <fieldset>
              <legend className="mb-2 text-sm text-[#a6a6a2]">Pages needed</legend>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {PAGE_OPTIONS.map((page) => (
                  <label
                    key={page}
                    className="flex items-center gap-2 rounded-md border border-[#252525] bg-[#0f0f0f] px-2 py-1.5 text-sm text-[#d6d6d2]"
                  >
                    <input type="checkbox" name="pages_needed" value={page} />
                    {page}
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label htmlFor="automation_needs" className="mb-1 block text-sm text-[#a6a6a2]">
                Automation needs
              </label>
              <textarea
                id="automation_needs"
                name="automation_needs"
                rows={3}
                className="w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 py-2 text-sm"
              />
            </div>
          </div>
        </details>

        <details open className="rounded-xl border border-[#1f1f1f] bg-[#111111] p-5">
          <summary className="cursor-pointer text-base font-medium text-[#f7f7f5]">
            Notes
          </summary>
          <div className="mt-4">
            <textarea
              id="notes"
              name="notes"
              rows={4}
              className="w-full rounded-lg border border-[#2a2a2a] bg-[#0f0f0f] px-3 py-2 text-sm"
            />
          </div>
        </details>

        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-lg border border-[#3a3326] bg-[#171512] px-4 py-2 text-sm font-medium text-[#f0e5ce]"
          >
            Save Intake & Create Project
          </button>
        </div>
      </form>
    </section>
  );
}
