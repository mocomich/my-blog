import { loadEnvConfig } from "@next/env";

/* eslint-disable import/no-anonymous-default-export */
export default async (): Promise<void> => {
  loadEnvConfig(process.env.API_KEY || "");
  loadEnvConfig(process.env.SERVICE_DOMAIN || "");
};
