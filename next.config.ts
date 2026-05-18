import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'export',
	// TODO: Remove when adding local assets
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.figma.com',
				pathname: '/api/mcp/asset/**',
			},
		],
	},
};

export default nextConfig;
