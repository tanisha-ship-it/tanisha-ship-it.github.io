-- Run this once in the Supabase SQL editor (Project > SQL Editor > New query).
-- It replaces the client-side read-then-write with a single atomic update,
-- so two visitors clicking at the same instant can no longer clobber each
-- other's increment.

create or replace function increment_butterfly_count()
returns int
language sql
security definer
set search_path = public
as $$
  update butterfly_counter
  set count = count + 1
  where id = 1
  returning count;
$$;

grant execute on function increment_butterfly_count() to anon;
