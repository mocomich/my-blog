import { createClient } from "microcms-js-sdk";

import { env } from "../../env/server.mjs";

export const client = createClient({
  apiKey: env.API_KEY,
  serviceDomain: env.SERVICE_DOMAIN,
});
