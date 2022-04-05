const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');
/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextJsConfig = {
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
};

module.exports = withBundleAnalyzer(
  withPlugins(
    [
      [
        optimizedImages,
        {
          imagesFolder: 'public',
          optimizeImages: true,
          optimizeImagesInDev: false,
          inlineImageLimit: 8192,
          imagesName: '[name]-[hash].[ext]',
          mozjpeg: {
            quality: 80,
          },
          optipng: {
            optimizationLevel: 3,
          },
          pngquant: false,
          webp: {
            preset: 'default',
            quality: 75,
          },
        },
      ],
    ],
    nextJsConfig
  )
);
