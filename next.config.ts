const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/username.github.io" : "",
  assetPrefix: isProd ? "/username.github.io/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;