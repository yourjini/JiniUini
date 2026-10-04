// 사이트에 보이는 프로젝트 목록입니다. 이 파일만 고치면 사이트가 바뀝니다.
//
// 새 프로젝트 추가: 아래 배열에 { ... } 하나를 복사해 붙이고 내용을 바꾸세요.
// 숨기기: visible 을 false 로 바꾸면 사이트에 나오지 않습니다 (목록에는 남아 있음).
// 순서: featured 가 true 인 항목이 먼저, 그다음 period 가 최근인 순서로 자동 정렬됩니다.

export type Category = "game" | "docs" | "service";
export type Status = "live" | "building" | "local" | "archived";

export type Project = {
  /** 고유 이름 (영문, 띄어쓰기 없이) */
  slug: string;
  name: string;
  /** 카드에 보이는 한 줄 설명 */
  summary: string;
  category: Category;
  /** live: 배포되어 열어볼 수 있음 · building: 만드는 중 · local: 내 PC에서만 실행 · archived: 보관 */
  status: Status;
  /** 배포 주소 (Vercel 등). 없으면 비워두세요. */
  url?: string;
  /** GitHub 저장소. public: true 일 때만 사이트에 저장소 링크가 보입니다. */
  repos: { name: string; public: boolean }[];
  stack: string[];
  /** 시작(또는 대표) 시기, YYYY-MM */
  period: string;
  /** 이력서에 쓸 만한 내가 한 일, 2~3개 */
  highlights: string[];
  featured?: boolean;
  visible: boolean;
};

export const categoryLabels: Record<Category, string> = {
  game: "게임",
  docs: "문서/기획",
  service: "웹서비스",
};

export const statusLabels: Record<Status, string> = {
  live: "LIVE",
  building: "BUILDING",
  local: "LOCAL",
  archived: "ARCHIVED",
};

export const statusDescriptions: Record<Status, string> = {
  live: "배포되어 누구나 열어볼 수 있어요",
  building: "만드는 중이에요",
  local: "내 PC에서만 실행하는 도구예요",
  archived: "작업을 마치고 보관 중이에요",
};

export const projects: Project[] = [
  {
    slug: "watchtower",
    name: "Watchtower",
    summary: "테일즈런너 웹서비스 품질 관리 대시보드. UI 자동화 테스트, API 헬스체크, 릴리즈 이력, 장애 보고서를 한 화면에서 봅니다.",
    category: "service",
    status: "live",
    url: "https://watchtower-mu-two.vercel.app/",
    repos: [
      { name: "watchtower", public: false },
      { name: "talesrunner-releases", public: false },
    ],
    stack: ["Next.js 14", "pytest", "Playwright", "GitHub Actions"],
    period: "2026-04",
    highlights: [
      "라온·스토브·한게임 3개 채널 × Stage/Live 모니터링 테스트를 매일 새벽 자동 실행",
      "채널별 API 컬렉션으로 헬스체크 자동화",
      "정기점검 릴리즈 이력과 장애 보고서를 대시보드로 통합",
    ],
    featured: true,
    visible: true,
  },
  {
    slug: "diffy",
    name: "Diffy · 이벤트 검수",
    summary: "정기점검 전후 이벤트 페이지를 Stage와 Live에서 자동으로 열어 비교하고, 기본 검수 기준을 판정하는 도구.",
    category: "service",
    status: "local",
    repos: [{ name: "tr-event-qa", public: false }],
    stack: ["Node.js", "Playwright", "pixel diff"],
    period: "2026-09",
    highlights: [
      "채널 × PC/모바일 × Chrome/Edge 조합을 동시에 검수",
      "Stage↔Live 화면 차이를 전체 캡처 위에 빨간색으로 표시",
      "비개발자도 더블클릭으로 켜고 끄도록 실행 파일 제공",
    ],
    featured: true,
    visible: true,
  },
  {
    slug: "game-portal-poc",
    name: "캐주얼 게임 포털 PoC",
    summary: "SEA·US 대상 HTML5 캐주얼 게임 포털의 출시 작업 문서. 라이선스, 인프라, 출시 체크리스트와 보고서를 관리합니다.",
    category: "docs",
    status: "archived",
    repos: [{ name: "game-portal-docs", public: false }],
    stack: ["Markdown", "Python", "PPTX 보고서"],
    period: "2026-05",
    highlights: [
      "게임 2종의 라이선스·배포·백엔드 검토 자료 작성",
      "출시 체크리스트와 보고서를 스크립트로 재생성",
    ],
    visible: false,
  },
  {
    slug: "froggy-road",
    name: "Froggy Road",
    summary: "길을 건너며 끝없이 달리는 아케이드 게임. 게임 포털 PoC 1번 게임.",
    category: "game",
    status: "live",
    url: "https://froggy-road.vercel.app",
    repos: [{ name: "froggy-road", public: false }],
    stack: ["HTML5", "CreateJS"],
    period: "2026-05",
    highlights: [
      "QA P0 이슈 수정: 화면 크기 변경 시 재배치, 스케일 계산 오류",
      "Vercel 정적 배포에 맞게 공유 기능과 메타 정보 정리",
    ],
    visible: true,
  },
  {
    slug: "onet-classic",
    name: "Onet Classic",
    summary: "같은 그림 타일을 짝지어 없애는 퍼즐 게임. 게임 포털 PoC 2번 게임.",
    category: "game",
    status: "live",
    url: "https://onet-classic-six.vercel.app",
    repos: [{ name: "onet-classic", public: false }],
    stack: ["HTML5", "Phaser 3"],
    period: "2026-05",
    highlights: [
      "코드 분석으로 난이도 변수 구조 파악, 난이도 모드 설계 근거 정리",
      "QA P0 이슈 수정: 화면 스케일 리스너, 도움말 버튼 위치",
    ],
    visible: true,
  },
  {
    slug: "bubblebubble",
    name: "Bubble Bobble",
    summary: "버블보블을 웹 브라우저에서 즐기는 HTML5 게임.",
    category: "game",
    status: "building",
    url: "", // Vercel 주소가 있으면 여기에 넣으세요
    repos: [{ name: "bubblebubble", public: true }],
    stack: ["HTML5 Canvas", "JavaScript"],
    period: "2026-04",
    highlights: ["빌드 없이 index.html 하나로 동작하는 게임 구조"],
    visible: true,
  },
  {
    slug: "molep",
    name: "molep 글로벌 포털 시안",
    summary: "5개국(KR·US·TW·JP·CN) 글로벌 게임 포털의 비로그인 접근부터 회원가입까지 시연하는 인터랙티브 프로토타입.",
    category: "service",
    status: "live",
    url: "https://molep.vercel.app",
    repos: [{ name: "molep", public: false }],
    stack: ["HTML", "CSS", "JavaScript"],
    period: "2026-04",
    highlights: [
      "접속 국가(GeoIP)와 표시 언어를 분리하는 정책 설계",
      "국가 스위치로 가입 수단·약관·연령 기준이 바뀌는 흐름 구현",
      "국가별 정책과 리스크를 화면 옆 오버레이로 표시",
    ],
    featured: true,
    visible: true,
  },
  {
    slug: "factlens",
    name: "FactLens",
    summary: "팩트체크 기준으로 뉴스를 걸러 보여주는 뉴스 리더. 해외 기사는 한국어로 번역해 보여줍니다.",
    category: "service",
    status: "live",
    url: "https://p4-sigma-eight.vercel.app/",
    repos: [{ name: "factlens", public: false }],
    stack: ["Next.js", "RSS", "Tailwind CSS"],
    period: "2026-07",
    highlights: ["RSS 수집, 검색, 기사 번역 캐시"],
    visible: true,
  },
  {
    slug: "hormuz-strait-monitor",
    name: "Hormuz Strait Monitor",
    summary: "호르무즈 해협 봉쇄 상황을 실시간으로 모아 보는 모니터링 페이지.",
    category: "service",
    status: "live",
    url: "https://hormuz-monitor-nine.vercel.app/",
    repos: [{ name: "hormuz-strait-monitor", public: false }],
    stack: ["Next.js", "Tailwind CSS"],
    period: "2026-07",
    highlights: ["관련 뉴스와 지표를 한 화면에 모아 FactLens와 연결"],
    visible: true,
  },
  {
    slug: "genie",
    name: "Genie AI 헬프데스크",
    summary: "회사 기획 문서를 학습해 개발·기획·QA 직군의 질문에 답하는 사내 AI 헬프데스크.",
    category: "service",
    status: "building",
    repos: [
      { name: "SUPA-GENIE", public: false },
      { name: "DocsGenie", public: false },
    ],
    stack: ["Next.js", "Supabase", "Claude API", "RAGFlow"],
    period: "2026-02",
    highlights: [
      "RAGFlow 기반 문서 지식베이스 구축과 자연어 질의응답 검증",
      "PDF·Word·Excel 문서 업로드와 Supabase 저장 구조 설계",
    ],
    visible: true,
  },
  {
    slug: "naemoeum",
    name: "내모음",
    summary: "지도 저장 장소, 즐겨찾기, 유튜브 재생목록, 스크린샷 글을 한곳에 모아 출처·주제별로 정리하는 웹페이지.",
    category: "service",
    status: "building",
    url: "", // Vercel 주소가 있으면 여기에 넣으세요
    repos: [{ name: "naemoeum", public: false }],
    stack: ["HTML", "JavaScript", "tesseract.js"],
    period: "2026-10",
    highlights: ["스크린샷 속 한국어·영어 글자를 브라우저에서 바로 읽어 저장"],
    visible: true,
  },
  {
    slug: "meticulous-monet",
    name: "Claude Code 운영 원칙",
    summary: "여러 환경과 계정에서 Claude Code를 쓸 때 지켜야 할 보안·운영 원칙과 체크리스트 모음.",
    category: "docs",
    status: "building",
    repos: [{ name: "meticulous-monet", public: false }],
    stack: ["Astro", "Markdown"],
    period: "2026-08",
    highlights: ["신규 프로젝트 체크리스트와 자가진단 프롬프트를 slash command로 제공"],
    visible: true,
  },

  // ── 아래는 개인 정보가 담긴 프로젝트라 기본으로 숨겨 두었습니다 ──
  {
    slug: "mydoctor",
    name: "MyDoctor",
    summary: "가족 건강 기록(방문 이력, 예약, 건강검진, 일상 기록)을 한 곳에서 관리하는 개인용 웹 앱.",
    category: "service",
    status: "live",
    url: "", // 개인 정보가 있어 링크를 비워 두었습니다
    repos: [
      { name: "MyDoctor", public: false },
      { name: "MyDoctor_db", public: false },
    ],
    stack: ["Next.js", "TypeScript", "Vercel Blob", "GitHub API"],
    period: "2026-09",
    highlights: ["데이터를 별도 private 저장소에 JSON으로 커밋해 자동 버전 관리"],
    visible: false,
  },
  {
    slug: "raina-go",
    name: "raina-go",
    summary: "고교학점제 학생부 관리와 대학 입시 로드맵 웹서비스 (PWA).",
    category: "service",
    status: "building",
    repos: [{ name: "raina-go", public: false }],
    stack: ["Next.js 16", "Prisma", "SQLite"],
    period: "2026-07",
    highlights: ["대학 모집요강 페이지 주기 크롤링과 변경 감지 설계"],
    visible: false,
  },
  {
    slug: "jininews",
    name: "Jininews",
    summary: "뉴스 수집과 개인 다이어리를 결합한 개인 프로젝트.",
    category: "service",
    status: "building",
    repos: [{ name: "Jininews", public: false }],
    stack: ["Python", "Next.js", "CodeQL", "Gitleaks"],
    period: "2026-04",
    highlights: ["Secret Scanning, CodeQL, Gitleaks로 보안 파이프라인 구성"],
    visible: false,
  },
];

export function visibleProjects() {
  return projects
    .filter((p) => p.visible)
    .sort((a, b) => Number(!!b.featured) - Number(!!a.featured) || b.period.localeCompare(a.period));
}
