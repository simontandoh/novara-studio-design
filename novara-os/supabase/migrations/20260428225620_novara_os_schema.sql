create extension if not exists "pgcrypto";

create type client_status as enum ('lead', 'active', 'paused', 'completed');
create type primary_goal as enum ('calls', 'bookings', 'enquiries', 'sales');
create type project_status as enum ('draft', 'in_progress', 'review', 'live');

create table if not exists clients (
  id uuid primary key default gen_random_uuid(),
  business_name text not null,
  contact_name text not null,
  email text not null,
  phone text,
  industry text not null,
  location text,
  status client_status not null default 'lead',
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists website_intakes (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references clients(id) on delete cascade,
  business_name text not null,
  industry text not null,
  location text,
  target_customer text not null,
  main_service text not null,
  secondary_services text[] not null default '{}',
  brand_tone text,
  preferred_colours text,
  competitors text[] not null default '{}',
  existing_website text,
  primary_goal primary_goal not null,
  pages_needed text[] not null default '{}',
  automation_needs text,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists templates (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  industry text not null,
  recommended_pages text[] not null default '{}',
  recommended_sections text[] not null default '{}',
  tone text not null,
  cta_style text not null,
  created_at timestamptz not null default now()
);

create table if not exists projects (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references clients(id) on delete cascade,
  intake_id uuid references website_intakes(id) on delete set null,
  name text not null,
  status project_status not null default 'draft',
  template_id uuid references templates(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists components (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category text not null,
  purpose text not null,
  recommended_usage text not null,
  example_copy text not null,
  created_at timestamptz not null default now()
);

create table if not exists generated_builds (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects(id) on delete cascade,
  brief_markdown text not null,
  claude_prompt text not null,
  cursor_prompt text not null,
  proposal_text text not null,
  sitemap jsonb not null default '{}'::jsonb,
  hero_headline text,
  hero_subheadline text,
  cta_text text,
  seo_title text,
  seo_meta text,
  colour_direction text,
  typography_direction text,
  created_at timestamptz not null default now()
);

create table if not exists checklist_items (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references projects(id) on delete cascade,
  label text not null,
  completed boolean not null default false,
  order_index integer not null,
  completed_at timestamptz
);

create index if not exists idx_website_intakes_client_id on website_intakes(client_id);
create index if not exists idx_projects_client_id on projects(client_id);
create index if not exists idx_projects_intake_id on projects(intake_id);
create index if not exists idx_projects_template_id on projects(template_id);
create index if not exists idx_generated_builds_project_id on generated_builds(project_id);
create index if not exists idx_checklist_items_project_id on checklist_items(project_id);

create or replace function set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_clients_updated_at on clients;
create trigger set_clients_updated_at
before update on clients
for each row
execute function set_updated_at();

drop trigger if exists set_projects_updated_at on projects;
create trigger set_projects_updated_at
before update on projects
for each row
execute function set_updated_at();

alter table clients enable row level security;
alter table website_intakes enable row level security;
alter table projects enable row level security;
alter table templates enable row level security;
alter table components enable row level security;
alter table generated_builds enable row level security;
alter table checklist_items enable row level security;

create policy "authenticated can read/write clients"
on clients
for all
to authenticated
using (true)
with check (true);

create policy "authenticated can read/write website_intakes"
on website_intakes
for all
to authenticated
using (true)
with check (true);

create policy "authenticated can read/write projects"
on projects
for all
to authenticated
using (true)
with check (true);

create policy "authenticated can read/write templates"
on templates
for all
to authenticated
using (true)
with check (true);

create policy "authenticated can read/write components"
on components
for all
to authenticated
using (true)
with check (true);

create policy "authenticated can read/write generated_builds"
on generated_builds
for all
to authenticated
using (true)
with check (true);

create policy "authenticated can read/write checklist_items"
on checklist_items
for all
to authenticated
using (true)
with check (true);
