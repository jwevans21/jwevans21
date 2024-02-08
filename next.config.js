/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/github',
                destination: 'https://github.com/jwevans21',
                permanent: true
            },
        ]
    }
}

module.exports = nextConfig
