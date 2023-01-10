// @ts-check
import { z } from "zod";

export const serverSchema = z.object({
  API_KEY: z.string(),
  NODE_ENV: z.enum(["development", "test", "production"]),
  SERVICE_DOMAIN: z.string(),
});

export const clientSchema = z.object({
  // NEXT_PUBLIC_URL: z.string(),
});

/**
 * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }}
 */
export const clientEnv = {
  // NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
};
