// /** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
    // topLevelAwait: true
    serverComponentsExternalPackages: ['mongoose', 'bcrypt'],
  },
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  images: {
    domains: [
      '**.rasamalaysia.com',
      'res.cloudinary.com',
      'www.koookoochicken.com',
    ],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rasamalaysia.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack}) => {
  //   // return modified config
  //   return config;
  // }
};

module.exports = nextConfig;
