import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const overviewCards = [
  { label: "Active Projects", value: 0 },
  { label: "Draft Builds", value: 0 },
  { label: "Templates", value: 5 },
  { label: "Components", value: 13 },
  { label: "Pending Checklists", value: 0 },
];

const navItems = [
  "Dashboard",
  "Clients",
  "Intake",
  "Templates",
  "Components",
  "Generator",
];

const recentProjects = [
  { name: "No projects yet", client: "-", status: "Draft", updated: "-" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f3f3f1]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 lg:grid-cols-[220px_1fr]">
        <aside className="border-b border-[#1f1f1f] p-6 lg:min-h-screen lg:border-r lg:border-b-0">
          <p className="text-xs tracking-[0.28em] text-[#bba87d]">NOVARA OS</p>
          <p className="mt-1 text-sm text-[#b0b0ac]">Internal command centre</p>

          <nav className="mt-8 space-y-1">
            {navItems.map((item, index) => (
              <div
                key={item}
                className={`rounded-lg border px-3 py-2 text-sm ${
                  index === 0
                    ? "border-[#3a3326] bg-[#171512] text-[#f0e5ce]"
                    : "border-transparent text-[#9f9f99]"
                }`}
              >
                {item}
              </div>
            ))}
          </nav>
        </aside>

        <section className="p-6 md:p-8">
          <header className="mb-8 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl tracking-tight text-[#f7f7f5]">
                Dashboard
              </h1>
              <p className="mt-1 text-sm text-[#a6a6a2]">
                Website operations workspace for Novara Studios
              </p>
            </div>
            <button className="rounded-lg border border-[#3a3326] bg-[#171512] px-4 py-2 text-sm font-medium text-[#f0e5ce]">
              New Website Intake
            </button>
          </header>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {overviewCards.map((card) => (
              <Card key={card.label} className="border-[#1f1f1f] bg-[#111111]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs tracking-wide text-[#a6a6a2]">
                    {card.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-semibold tracking-tight text-[#f7f7f5]">
                    {card.value}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 border-[#1f1f1f] bg-[#111111]">
            <CardHeader>
              <CardTitle className="text-base tracking-tight text-[#f7f7f5]">
                Recent Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-[#1f1f1f] hover:bg-transparent">
                    <TableHead className="text-[#a6a6a2]">Name</TableHead>
                    <TableHead className="text-[#a6a6a2]">Client</TableHead>
                    <TableHead className="text-[#a6a6a2]">Status</TableHead>
                    <TableHead className="text-[#a6a6a2]">Updated</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentProjects.map((project) => (
                    <TableRow
                      key={project.name}
                      className="border-[#1f1f1f] hover:bg-[#151515]"
                    >
                      <TableCell className="text-[#f3f3f1]">
                        {project.name}
                      </TableCell>
                      <TableCell className="text-[#b0b0ac]">
                        {project.client}
                      </TableCell>
                      <TableCell className="text-[#e7dcc5]">
                        {project.status}
                      </TableCell>
                      <TableCell className="text-[#b0b0ac]">
                        {project.updated}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
}
