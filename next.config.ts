/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's0.wordpress.com', // Mengizinkan API Screenshot WordPress
      },
      {
        protocol: 'https',
        hostname: 'rsudcibinong.id', // Jaga-jaga kalau mau pakai gambar manual dari sana
      },
    ],
  },
};

export default nextConfig;
