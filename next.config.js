// Next.js configuration file

const nextConfig = {
    env: {
        // Environment variables here
    },
    reactStrictMode: true,
    images: {
        domains: [
            // External image domains
        ]
    },
    async redirects() {
        return [
            {
                source: "/redirect",
                destination: "https://google.com",
                permanent: true
            }
        ];
    }
};

module.exports = nextConfig;