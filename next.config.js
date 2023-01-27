// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   test: /\\.(png|jp(e*)g|svg|gif)$/, 
//   use: ['file-loader'],
//   env: {
//     // API_URL: 'https://revisado-back.onrender.com'
//     API_URL: 'http://192.168.0.128:3001'
//   }
// }

// module.exports = nextConfig


/** @type {import('next').NextConfig} **/
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  test: /\\.(png|jp(e*)g|svg|gif)$/, 
  use: ['file-loader'],
  env: {
    // API_URL: 'https://revisado-back.onrender.com'
    API_URL: 'http://localhost:3001'
  }
}

module.exports = nextConfig
