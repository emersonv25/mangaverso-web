/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        domains: ['cdn.discordapp.com'],
        unoptimized: true,
    },
}

module.exports = nextConfig
