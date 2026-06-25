# Teddy 랜딩페이지

뉴스 브리핑 + Teddy 영어 앱 통합 소개 페이지 (Next.js App Router).
Google·Naver 검색 최적화(SEO) 기본 세팅 포함.

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 배포 빌드 검증
```

## 배포 (Vercel 추천)

1. 이 폴더를 GitHub 레포로 올리기
2. [vercel.com](https://vercel.com) → New Project → 레포 선택 → Deploy
3. Vercel 환경변수 설정:
   - `NEXT_PUBLIC_SITE_URL` = 실제 도메인 (예: `https://teddy-apps.com`)
   - `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` = (검색콘솔 등록 후)
   - `NEXT_PUBLIC_NAVER_SITE_VERIFICATION` = (서치어드바이저 등록 후)

## 검색 등록 (다운로드 유입의 핵심)

### Google
1. [Search Console](https://search.google.com/search-console) → 속성 추가 → URL 접두어
2. HTML 태그 인증값 → `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`에 넣고 재배포
3. 색인 생성 → Sitemaps → `sitemap.xml` 제출

### Naver (한국 유입에 중요)
1. [서치어드바이저](https://searchadvisor.naver.com) → 사이트 등록 (https 필수)
2. HTML 태그 인증값 → `NEXT_PUBLIC_NAVER_SITE_VERIFICATION`에 넣고 재배포
3. 요청 → 사이트맵 제출 (`/sitemap.xml`)
4. 네이버 규칙: description ≤ 80자, `og:description` === `description` (이미 맞춰둠)

## SEO 스킬로 고도화 (선택)

[web-seo-google-naver-skill](https://github.com/gunheeaug/web-seo-google-naver-skill)을 Claude Code/Cursor에 설치하면,
페이지 추가 시 메타데이터·JSON-LD·sitemap을 자동으로 맞춰줘요.

## 구조

```
app/
  layout.tsx     # 메타데이터(title/description/OG/canonical/verification)
  page.tsx       # 랜딩 콘텐츠 + JSON-LD(구조화 데이터)
  sitemap.ts     # /sitemap.xml 자동 생성
  robots.ts      # /robots.txt 자동 생성
  globals.css    # 스타일
```

수정 포인트: 도메인은 env로, 앱 링크는 `page.tsx` 상단 상수(`NEWS_URL`, `ENG_URL`, `FOOD_URL`), 앱 정보는 `APPS` 배열, 스크린샷은 `public/shots/{news,english,diet}/`.
