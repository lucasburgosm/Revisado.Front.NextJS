/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  test: /\\.(png|jp(e*)g|svg|gif)$/, 
  use: ['file-loader'],
}



module.exports = nextConfig
