/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // async rewrites() {
  //   return [
  //     {
  //       source: '/vender',
  //       destination: 'http://localhost:3001/api/products',
  //       basePath: false,
  //     },
  //   ]
  // }
}


module.exports = nextConfig
