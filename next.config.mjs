/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
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
};

export default nextConfig;

// import MillionLint from '@million/lint';
// /** @type {import('next').NextConfig} */
// const nextConfig = {};
// export default MillionLint.next({
//   rsc: true
// })(nextConfig);
