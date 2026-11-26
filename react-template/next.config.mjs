/** @type {import('next').NextConfig} */
const nextConfig = {
  // .jsx pages belong to React Router, not the Next Pages Router.
  pageExtensions: ["js"],
  async redirects() {
    return [{ source: "/faqs", destination: "/faq", permanent: true }];
  },
  async rewrites() {
    // React Router owns the public pages; Next continues to serve existing APIs.
    return {
      beforeFiles: [
        "/about",
        "/services",
        "/become-agent",
        "/contact",
        "/faq",
      ].map((source) => ({ source, destination: "/" })),
    };
  },
};
export default nextConfig;
