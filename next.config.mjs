/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cf.bstatic.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
