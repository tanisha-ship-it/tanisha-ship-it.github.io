-- Restore the butterfly counter after a reset or a new Supabase project.
-- 1. Find the last saved number: GitHub repo > branch `butterfly-backups` > butterfly-count.json
-- 2. Run this in the Supabase SQL editor, replacing 1046 with that number.

create table if not exists public.butterfly_counter (
  id integer primary key,
  count bigint not null default 0
);

insert into public.butterfly_counter (id, count)
values (1, 1046)
on conflict (id) do update set count = greatest(public.butterfly_counter.count, excluded.count);

-- Then re-run supabase/increment_counter.sql if the increment function is missing.
-- Make sure row level security still lets the anon key read and update row 1.
