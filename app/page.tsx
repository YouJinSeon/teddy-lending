const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";
const NEWS_URL = "https://play.google.com/store/apps/details?id=com.teddyjs.news";
const ENG_URL = "https://play.google.com/store/apps/details?id=com.teddyjs.english";

// 구조화 데이터(JSON-LD) — 구글 리치결과/이해도↑
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Teddy",
      url: SITE,
      description: "AI로 매일을 더 똑똑하게 — 뉴스 요약·영어 학습 앱",
    },
    {
      "@type": "SoftwareApplication",
      name: "뉴스 브리핑 — AI 뉴스 요약·속보",
      applicationCategory: "NewsApplication",
      operatingSystem: "Android",
      offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
      url: NEWS_URL,
    },
    {
      "@type": "SoftwareApplication",
      name: "Teddy 영어 — AI 영어회화·단어",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Android",
      offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
      url: ENG_URL,
    },
  ],
};

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <li className="feature">
      <span className="check" aria-hidden>✓</span>
      <span>{children}</span>
    </li>
  );
}

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="hero">
        <div className="container">
          <span className="brand">Teddy</span>
          <h1>AI로 매일을 더 똑똑하게</h1>
          <p className="sub">
            복잡한 뉴스는 3줄로, 영어는 AI와 대화하며. 매일 쓰는 두 개의 AI 앱.
          </p>
          <div className="cta-row">
            <a className="btn btn-news" href={NEWS_URL} target="_blank" rel="noopener">뉴스 브리핑 받기</a>
            <a className="btn btn-eng" href={ENG_URL} target="_blank" rel="noopener">Teddy 영어 받기</a>
          </div>
        </div>
      </header>

      <section className="apps container" aria-label="앱 소개">
        {/* 뉴스 브리핑 */}
        <article className="card card-news">
          <div className="badge badge-news">AI 뉴스 요약</div>
          <h2>뉴스 브리핑</h2>
          <p className="desc">
            여러 언론사 뉴스를 AI가 핵심만 3줄로 요약. 바쁜 하루, 3분이면 끝나요.
          </p>
          <ul className="features">
            <Feature>AI 3줄 요약 — 핵심만 빠르게</Feature>
            <Feature>아침·점심·저녁 자동 브리핑</Feature>
            <Feature>속보 푸시 알림</Feature>
            <Feature>오프라인 열람 · 홈 화면 위젯</Feature>
            <Feature>주식·경제·정치·글로벌 카테고리</Feature>
          </ul>
          <a className="btn btn-news full" href={NEWS_URL} target="_blank" rel="noopener">무료 다운로드 (Google Play)</a>
        </article>

        {/* Teddy 영어 */}
        <article className="card card-eng">
          <div className="badge badge-eng">AI 영어 학습</div>
          <h2>Teddy 영어</h2>
          <p className="desc">
            AI와 대화하며 배우는 영어. 회화부터 시험 준비까지 한 앱에서.
          </p>
          <ul className="features">
            <Feature>AI 영어회화 — 실제 상황 롤플레이</Feature>
            <Feature>OPIc·토익스피킹 AI 모의시험</Feature>
            <Feature>26,000개 단어 · 난이도별 플래시카드</Feature>
            <Feature>발음 평가 (음소 단위 피드백)</Feature>
            <Feature>스마트 복습 · 연속 학습 스트릭</Feature>
          </ul>
          <a className="btn btn-eng full" href={ENG_URL} target="_blank" rel="noopener">무료 다운로드 (Google Play)</a>
        </article>
      </section>

      <section className="why container">
        <h2>왜 Teddy인가요?</h2>
        <div className="why-grid">
          <div><strong>매일 쓰는 앱</strong><p>뉴스도, 영어도 하루 루틴 안에 자연스럽게.</p></div>
          <div><strong>AI가 골라줘요</strong><p>핵심만 요약하고, 내 수준에 맞게 알려줘요.</p></div>
          <div><strong>부담 없이 무료</strong><p>광고는 최소로, 핵심 기능은 무료로 시작.</p></div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <span className="brand small">Teddy</span>
          <nav>
            <a href={NEWS_URL} target="_blank" rel="noopener">뉴스 브리핑</a>
            <a href={ENG_URL} target="_blank" rel="noopener">Teddy 영어</a>
          </nav>
          <p className="copy">© {new Date().getFullYear()} Teddy. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
