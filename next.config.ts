/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output as static export
  output: 'export',

  // If your GitHub Pages repo is at `username/curafitt-site`
  // and you want to serve at: https://username.github.io/curafitt-site
  // basePath: '/curafitt-website',
  basePath: '',

  // Disable image optimization for static export if you plan to use <Image />
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig