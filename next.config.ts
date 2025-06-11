import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
     images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdncheck.nyc3.cdn.digitaloceanspaces.com', 
        port: '',
        pathname: '/**',
      },
    ],
  },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
