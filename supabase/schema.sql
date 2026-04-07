create extension if not exists "pgcrypto";

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text not null,
  content text not null,
  cover_image text not null,
  author_name text not null,
  meta_title text,
  meta_desc text,
  meta_keyword text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.blog_posts add column if not exists meta_title text;
alter table public.blog_posts add column if not exists meta_desc text;
alter table public.blog_posts add column if not exists meta_keyword text;

create index if not exists idx_blog_posts_status_published_at
  on public.blog_posts(status, published_at desc);

create or replace function public.set_updated_at_blog_posts()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_blog_posts_updated_at on public.blog_posts;
create trigger trg_blog_posts_updated_at
before update on public.blog_posts
for each row
execute function public.set_updated_at_blog_posts();

alter table public.blog_posts enable row level security;

-- Allow public read only for published posts.
drop policy if exists "Public can view published blog posts" on public.blog_posts;
create policy "Public can view published blog posts"
on public.blog_posts for select
to anon, authenticated
using (status = 'published');

-- Keep write access restricted to service-role key via server-side APIs.
drop policy if exists "Authenticated can manage blog posts" on public.blog_posts;
