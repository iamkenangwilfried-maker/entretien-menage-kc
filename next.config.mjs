/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "randomuser.me" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/strategie-complete-entretien-menager-kc",
        destination: "/strategie/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
