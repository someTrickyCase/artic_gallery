import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    agentRules: false,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.artic.edu",
            },
        ],
    },
};

export default nextConfig;
