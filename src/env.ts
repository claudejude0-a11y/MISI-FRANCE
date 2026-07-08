/**
 * Validated environment variables.
 *
 * `publicEnv` holds `NEXT_PUBLIC_*` values — inlined into the client bundle,
 * safe in the browser. The site is statically exported (no server), so only
 * public, build-time env vars exist.
 *
 * A missing/invalid variable fails fast with a clear zod error rather than
 * surfacing as a confusing runtime bug later.
 */

import { z } from "zod";

const publicSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.url().optional(),
});

/** Public env — safe to read anywhere (server or client). */
export const publicEnv = publicSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
});
