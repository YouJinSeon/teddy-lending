const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";
const NEWS_URL = "https://play.google.com/store/apps/details?id=com.teddyjs.news";
const ENG_URL = "https://play.google.com/store/apps/details?id=com.teddyjs.english";
const FOOD_URL = "https://play.google.com/store/apps/details?id=com.teddyjs.food";

type App = {
  id: string; theme: string; badge: string; name: string; tagline: string;
  features: string[]; url: string;
};

const APPS: App[] = [
  {
    id: "news", theme: "news", badge: "AI 뉴스 요약", name: "뉴스 브리핑",
    tagline: "여러 언론사 뉴스를 AI가 핵심만 3줄로. 바쁜 하루, 3분이면 끝나요.",
    features: ["AI 3줄 요약으로 핵심만 빠르게", "아침·점심·저녁 자동 브리핑", "속보 푸시 알림", "오프라인 열람 · 홈 화면 위젯"],
    url: NEWS_URL,
  },
  {
    id: "english", theme: "eng", badge: "AI 영어 학습", name: "Teddy 영어",
    tagline: "AI와 대화하며 배우는 영어. 회화부터 OPIc·토익 시험 준비까지 한 앱에서.",
    features: ["AI 영어회화 — 실제 상황 롤플레이", "OPIc·토익스피킹 AI 모의시험", "26,000개 단어 · 발음 평가", "스마트 복습 · 연속 학습 스트릭"],
    url: ENG_URL,
  },
  {
    id: "diet", theme: "diet", badge: "AI 다이어트 코치", name: "곰코치",
    tagline: "사진 한 장이면 칼로리 기록 끝. 1:1 AI 코치와 식단·체중을 함께 관리해요.",
    features: ["사진 찍으면 칼로리·영양소 자동 기록", "1:1 AI 코치 채팅", "체중 추세 그래프 · 목표 관리", "성장형 뱃지 & 미션으로 꾸준하게"],
    url: FOOD_URL,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: "Teddy", url: SITE, description: "AI로 매일을 더 똑똑하게 — 뉴스·영어·식단 관리 앱" },
    { "@type": "SoftwareApplication", name: "뉴스 브리핑 — AI 뉴스 요약·속보", applicationCategory: "NewsApplication", operatingSystem: "Android", offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" }, url: NEWS_URL },
    { "@type": "SoftwareApplication", name: "Teddy 영어 — AI 영어회화·단어", applicationCategory: "EducationalApplication", operatingSystem: "Android", offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" }, url: ENG_URL },
    { "@type": "SoftwareApplication", name: "곰코치 — AI 다이어트·식단 코치", applicationCategory: "HealthApplication", operatingSystem: "Android", offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" }, url: FOOD_URL },
  ],
};

function AppSection({ app }: { app: App }) {
  return (
    <section className={`app app-${app.theme}`} id={app.id} aria-label={app.name}>
      <div className="container app-inner">
        <div className="app-head">
          <span className={`badge badge-${app.theme}`}>{app.badge}</span>
          <h2>{app.name}</h2>
          <p className="tagline">{app.tagline}</p>
          <ul className="features">
            {app.features.map((f) => (
              <li className="feature" key={f}><span className="check" aria-hidden>✓</span><span>{f}</span></li>
            ))}
          </ul>
          <a className={`btn btn-${app.theme}`} href={app.url} target="_blank" rel="noopener">
            Google Play에서 무료 다운로드
          </a>
        </div>
        <div className="shots" role="list">
          {[1, 2, 3].map((n) => (
            <img key={n} className="shot" src={`/shots/${app.id}/${n}.png`} alt={`${app.name} 화면 ${n}`} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
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
          <p className="sub">복잡한 뉴스는 3줄로, 영어는 대화로, 식단은 사진 한 장으로. 매일 쓰는 AI 앱 셋.</p>
          <div className="cta-row">
            <a className="btn btn-news" href="#news">뉴스 브리핑</a>
            <a className="btn btn-eng" href="#english">Teddy 영어</a>
            <a className="btn btn-diet" href="#diet">곰코치</a>
          </div>
        </div>
      </header>

      {APPS.map((app) => <AppSection key={app.id} app={app} />)}

      <section className="why container">
        <h2>왜 Teddy인가요?</h2>
        <div className="why-grid">
          <div><strong>매일 쓰는 앱</strong><p>뉴스·영어·식단, 하루 루틴 안에 자연스럽게.</p></div>
          <div><strong>AI가 챙겨줘요</strong><p>요약하고, 가르치고, 코칭까지 내 수준에 맞게.</p></div>
          <div><strong>부담 없이 무료</strong><p>핵심 기능은 무료로 바로 시작할 수 있어요.</p></div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <span className="brand small">Teddy</span>
          <nav>
            <a href={NEWS_URL} target="_blank" rel="noopener">뉴스 브리핑</a>
            <a href={ENG_URL} target="_blank" rel="noopener">Teddy 영어</a>
            <a href={FOOD_URL} target="_blank" rel="noopener">곰코치</a>
          </nav>
          <p className="copy">© {new Date().getFullYear()} Teddy. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
