import { BUTTERFLY_FLOOR } from "./butterfly-floor";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

const headers = {
  apikey: SUPABASE_ANON_KEY,
  Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
};

export async function getButterflyCount(): Promise<number> {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/butterfly_counter?id=eq.1&select=count`,
      { headers, cache: "no-store" },
    );
    const data = await res.json();
    const count = data[0]?.count;
    // A missing or reset counter never shows less than the last saved number.
    return typeof count === "number" ? Math.max(count, BUTTERFLY_FLOOR) : BUTTERFLY_FLOOR;
  } catch {
    return BUTTERFLY_FLOOR;
  }
}

/** If the table was reset, put it back above the floor so the next number written is not a low one. */
async function liftToFloor(count: number): Promise<number> {
  if (count >= BUTTERFLY_FLOOR) return count;
  const lifted = BUTTERFLY_FLOOR + count;
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/butterfly_counter?id=eq.1`, {
      method: "PATCH",
      headers: { ...headers, "Content-Type": "application/json", Prefer: "return=minimal" },
      body: JSON.stringify({ count: lifted }),
    });
  } catch {
    // The display still uses the lifted number; the next visitor will retry.
  }
  return lifted;
}

/**
 * Prefers an atomic Postgres RPC (increment_butterfly_count) to avoid the
 * read-then-write race the original embed had. Falls back to the old
 * read-modify-write if that function hasn't been created in Supabase yet.
 * See supabase/increment_counter.sql for the migration.
 */
export async function incrementButterflyCount(): Promise<number> {
  try {
    const rpcRes = await fetch(`${SUPABASE_URL}/rest/v1/rpc/increment_butterfly_count`, {
      method: "POST",
      headers: { ...headers, "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });

    if (rpcRes.ok) {
      const text = await rpcRes.text();
      if (text) {
        const data = JSON.parse(text);
        if (typeof data === "number") return liftToFloor(data);
        if (typeof data?.[0]?.increment_butterfly_count === "number") {
          return liftToFloor(data[0].increment_butterfly_count);
        }
      }
      // RPC succeeded but returned no body (e.g. Prefer: return=minimal) —
      // read the row back so the UI reflects the real, reconciled count.
      return getButterflyCount();
    }
  } catch {
    // RPC unreachable — fall through to the non-atomic path below.
  }

  const current = await getButterflyCount(); // already at least the floor
  const newCount = current + 1;
  await fetch(`${SUPABASE_URL}/rest/v1/butterfly_counter?id=eq.1`, {
    method: "PATCH",
    headers: { ...headers, "Content-Type": "application/json", Prefer: "return=minimal" },
    body: JSON.stringify({ count: newCount }),
  });
  return newCount;
}
