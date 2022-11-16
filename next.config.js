/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.kinja-img.com', 's.yimg.com', 'media.wired.com', 'cdn.vox-cdn.com', 'ichef.bbci.co.uk', 'www.reuters.com', 'cdn.mos.cms.futurecdn.net', 'i.guim.co.uk'],
  },
}

module.exports = nextConfig
