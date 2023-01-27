const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  test: /\\.(png|jp(e*)g|svg|gif)$/, 
  use: ['file-loader'],
  env: {
    API_URL: 'https://revisado-back.onrender.com'
  }
}

module.exports = nextConfig



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   test: /\\.(png|jp(e*)g|svg|gif)$/, 
//   use: ['file-loader'],
// }



// module.exports = nextConfig
