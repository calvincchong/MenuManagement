// /** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // topLevelAwait: true
    serverComponentsExternalPackages: ["mongoose", "bcrypt"]
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  }
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack}) => {
  //   // return modified config
  //   return config;
  // }
}

module.exports = nextConfig
