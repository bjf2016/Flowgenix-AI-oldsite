import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Silence the “multiple lockfiles” warning by telling Next
  // our workspace (repo) root is one level up from next-app/
  outputFileTracingRoot: path.join(__dirname, ".."),
};

export default nextConfig;
