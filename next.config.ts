/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.microlink.io"],
    remotePatterns: [{ protocol: "https", hostname: "api.microlink.io" }, {
      protocol: "https",
      hostname: "23ptjdzmtl.ufs.sh",
      pathname: "/f/*",
    },],
  },
};

export default nextConfig;
