import type { NextConfig } from "next";
import { config } from "./next-i18next.config"
const nextConfig: NextConfig = {
  /* config options here */
  i18n: config.i18n
};

export default nextConfig;
