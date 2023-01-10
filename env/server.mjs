// @ts-check
import { env as clientEnv, formatErrors } from "./client.mjs";
import { serverSchema } from "./schema.mjs";

const _serverEnv = serverSchema.safeParse(process.env);

if (!_serverEnv.success) {
  console.error("❌ Invalid environment variables:\n", ...formatErrors(_serverEnv.error.format()));
  process.exit(1);
}

for (let key of Object.keys(_serverEnv.data)) {
  if (key.startsWith("NEXT_PUBLIC_")) {
    console.warn("❌ You are exposing a server-side env-variable:", key);

    process.exit(1);
  }
}

export const env = { ..._serverEnv.data, ...clientEnv };
