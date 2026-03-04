/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "api.microlink.io" },
            {
                protocol: "https",
                hostname: "23ptjdzmtl.ufs.sh",
                pathname: "/f/*",
            },
        ],
        qualities: [100, 75, 70],
    },
};

export default nextConfig;
