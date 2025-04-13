const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "growming-backend-production.up.railway.app",
                pathname: "/uploads/**",
            },
        ],
    },
};
