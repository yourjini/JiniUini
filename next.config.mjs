/** @type {import('next').NextConfig} */
const nextConfig = {
  // 정적 사이트로 내보냅니다 (Vercel, GitHub Pages 어디든 배포 가능)
  output: "export",
  images: { unoptimized: true },
  // /projects/froggy-road/ 처럼 폴더형 주소로 내보내 어느 정적 호스팅에서도 열리게 합니다
  trailingSlash: true,
};

export default nextConfig;
