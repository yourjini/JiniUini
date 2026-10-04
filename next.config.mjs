/** @type {import('next').NextConfig} */
const nextConfig = {
  // 정적 사이트로 내보냅니다 (Vercel, GitHub Pages 어디든 배포 가능)
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
