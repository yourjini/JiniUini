// 상단 소개와 이력 섹션 내용입니다. 자유롭게 고치세요.

export const profile = {
  name: "jini",
  role: "플랫폼 서비스 QA",
  /** 첫 화면의 큰 문구. 한 줄씩 나뉘어 보입니다. */
  headline: ["Tested.", "Built.", "Shipped."],
  /** 큰 문구 아래 한 줄 소개 */
  tagline: "QA가 AI와 함께 직접 만들고, 검수하고, 배포한 서비스와 게임들.",
  intro:
    "테일즈런너를 비롯한 게임·웹 플랫폼 서비스를 검수합니다. 반복되는 검수는 AI와 자동화 도구로 줄이고, 필요한 서비스는 직접 만들어 배포합니다.",
  links: [{ label: "GitHub", href: "https://github.com/yourjini" }],
  updatedAt: "2026-10-04",
};

// 이력. 위에서부터 최근 순서로 적어 주세요. period 는 자유 형식입니다.
export const experience: { period: string; title: string; detail: string }[] = [
  {
    period: "진행 중",
    title: "스테이블코인 기반 중앙화 지갑 QA",
    detail: "신규 지갑 서비스 QA 준비. 기획·디자인 산출물 분석과 테스트 설계.",
  },
  {
    period: "진행 중",
    title: "신규 웹 게임 포털 QA",
    detail: "스팀과 같은 웹 게임 포털 서비스 검수. 글로벌 가입 흐름 시안(molep) 제작.",
  },
  {
    period: "진행 중",
    title: "테일즈런너 웹서비스 QA",
    detail: "2주 간격 정기점검 이벤트 검수, Stage/Live 비교 자동화(Diffy), 모니터링 대시보드(Watchtower) 운영.",
  },
];

export const skills = ["웹 QA", "테스트 설계", "Playwright", "pytest", "GitHub Actions", "Next.js", "Vercel", "Claude Code"];
