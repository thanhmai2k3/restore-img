/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'


module.exports = {
  basePath: isProd ? '/restore-img' : '',
  output: 'export',
  distDir: 'dist',

  // reactStrictMode: true,
  images: {
    domains: ["upcdn.io", "replicate.delivery", "lh3.googleusercontent.com"],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/Nutlope/restorePhotos",
        permanent: false,
      },
      {
        source: "/deploy",
        destination: "https://vercel.com/templates/next.js/ai-photo-restorer",
        permanent: false,
      },
    ];
  },
};
