/** @type {import('webpack').Configuration} */
export default function sharedWebpackConfig(config) {
  config.module.rules.push({
    test: /\.svg$/i,
    include: /src\/assets\/icons/, // Only applies to icons inside shared UI package
    use: ["@svgr/webpack"],
  });

  return config;
}
