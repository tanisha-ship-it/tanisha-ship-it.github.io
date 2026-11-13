/**
 * The lowest number the counter should ever show. It is the last saved count, so if the
 * Supabase table is reset or the project is replaced, visitors still see (and continue
 * from) this number instead of 0. Bump it now and then; the daily backup on the
 * `butterfly-backups` branch always has the latest real value.
 */
export const BUTTERFLY_FLOOR = 1046;
