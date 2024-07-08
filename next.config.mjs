/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   staleTimes: {
  //     dynamic: 30,
  //     static: 180,
  //   },
  // },
  experimental: {
    serverActions: { allowedOrigins: ["localhost:3000", "*.app.github.dev/"] },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
        port: "",
        pathname: "/*",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://eu-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://eu.i.posthog.com/:path*",
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;

// import MillionLint from '@million/lint';
// /** @type {import('next').NextConfig} */
// const nextConfig = {};
// export default MillionLint.next({
//   rsc: true
// })(nextConfig);
