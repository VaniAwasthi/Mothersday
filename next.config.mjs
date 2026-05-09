// @ts-check

const isProd = process.env.NODE_ENV === "production";
const repoBasePath = "/Mothersday";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // GitHub Pages serves the site under /Mothersday/. Only apply the prefix in
  // production builds so `next dev` keeps working at http://localhost:3000/.
  basePath: isProd ? repoBasePath : "",
  assetPrefix: isProd ? `${repoBasePath}/` : "",
  // Static export can't use the on-demand image optimizer.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
