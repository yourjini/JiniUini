# jini 프로젝트 허브

GitHub에 만들고 Vercel로 배포한 서비스·게임·QA 도구를 한 곳에 모아 보여주는 포트폴리오 사이트입니다.

## 내용 고치기

코드를 몰라도 아래 두 파일만 고치면 됩니다. GitHub 웹에서 파일을 열고 연필 아이콘으로 바로 고쳐도 됩니다.

| 파일 | 내용 |
|---|---|
| `content/projects.ts` | 프로젝트 목록 (이름, 설명, 배포 주소, 기술, 내가 한 일) |
| `content/profile.ts` | 상단 소개, 이력, 기술 |

- **프로젝트 추가**: `projects` 배열에서 항목 하나를 복사해 붙이고 내용을 바꿉니다.
- **숨기기**: `visible: false` 로 바꿉니다. 개인 정보가 담긴 MyDoctor, raina-go, Jininews 는 기본으로 숨겨 두었습니다.
- **상태 표시**: `live`(배포 중) · `building`(만드는 중) · `local`(내 PC에서만 실행) · `archived`(보관)
- **저장소 링크**: `repos` 의 `public: true` 인 저장소만 사이트에 링크가 보입니다.

## Vercel 배포

1. https://vercel.com/new 에서 이 저장소를 Import
2. Framework Preset 이 Next.js 로 잡힌 상태 그대로 Deploy
3. 이후 `main` 에 변경이 올라가면 자동으로 다시 배포됩니다

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # out/ 폴더에 정적 사이트 생성
```

Next.js 16 · React 19 · TypeScript, 정적 내보내기(`output: "export"`).
