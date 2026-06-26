const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com";
const NEWS_URL = "https://play.google.com/store/apps/details?id=com.teddyjs.news";
const ENG_URL = "https://play.google.com/store/apps/details?id=com.teddyjs.english";
const FOOD_URL = "https://play.google.com/store/apps/details?id=com.teddyjs.food";

type App = { id: string; theme: string; badge: string; name: string; tagline: string; features: string[]; url: string };

const APPS: App[] = [
  { id: "english", theme: "eng", badge: "AI 영어 학습", name: "Teddy 영어", tagline: "AI와 대화하며 배우는 영어. 회화부터 OPIc·토익 시험 준비까지 한 앱에서.",
    features: ["AI 영어회화 — 실제 상황 롤플레이", "OPIc·토익스피킹 AI 모의시험", "26,000개 단어 · 발음 평가", "스마트 복습 · 연속 학습 스트릭"], url: ENG_URL },
  { id: "news", theme: "news", badge: "AI 뉴스 요약", name: "뉴스 브리핑", tagline: "여러 언론사 뉴스를 AI가 핵심만 3줄로. 바쁜 하루, 3분이면 끝나요.",
    features: ["AI 3줄 요약으로 핵심만 빠르게", "아침·점심·저녁 자동 브리핑", "속보 푸시 알림", "오프라인 열람 · 홈 화면 위젯"], url: NEWS_URL },
  { id: "diet", theme: "diet", badge: "AI 다이어트 코치", name: "곰코치", tagline: "사진 한 장이면 칼로리 기록 끝. 1:1 AI 코치와 식단·체중을 함께 관리해요.",
    features: ["사진 찍으면 칼로리·영양소 자동 기록", "1:1 AI 코치 채팅", "체중 추세 그래프 · 목표 관리", "성장형 뱃지 & 미션으로 꾸준하게"], url: FOOD_URL },
];

const FAQ = [
  { q: "앱은 무료인가요?", a: "세 앱 모두 무료로 시작할 수 있어요. 일부 고급 기능은 선택형 프리미엄으로 제공돼요." },
  { q: "어떤 기기에서 쓸 수 있나요?", a: "현재 안드로이드(Google Play)에서 다운로드할 수 있어요." },
  { q: "Teddy 영어는 어떤 시험을 지원하나요?", a: "OPIc·토익스피킹 AI 모의시험으로 예상 등급과 항목별 점수를 받을 수 있어요." },
  { q: "곰코치는 칼로리를 어떻게 기록하나요?", a: "음식 사진을 찍으면 AI가 메뉴와 칼로리·영양소를 자동으로 인식해 기록해줘요." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", name: "Teddy", url: SITE, description: "AI로 매일을 더 똑똑하게 — 뉴스·영어·식단 관리 앱" },
    { "@type": "SoftwareApplication", name: "Teddy 영어 — AI 영어회화·단어", applicationCategory: "EducationalApplication", operatingSystem: "Android", offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" }, url: ENG_URL },
    { "@type": "SoftwareApplication", name: "뉴스 브리핑 — AI 뉴스 요약·속보", applicationCategory: "NewsApplication", operatingSystem: "Android", offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" }, url: NEWS_URL },
    { "@type": "SoftwareApplication", name: "곰코치 — AI 다이어트·식단 코치", applicationCategory: "HealthApplication", operatingSystem: "Android", offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" }, url: FOOD_URL },
    { "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ],
};

function Icon({ name }: { name: string }) {
  return (
    <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {name === "sun" && <g><circle cx="12" cy="12" r="4.2" /><path d="M12 2v2.4M12 19.6V22M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2 12h2.4M19.6 12H22M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" /></g>}
      {name === "chat" && <g><path d="M20 11.5a7.5 7.5 0 0 1-10.9 6.7L4 19.5l1.4-4.2A7.5 7.5 0 1 1 20 11.5z" /><path d="M8.5 11h7M8.5 14h4" /></g>}
      {name === "camera" && <g><path d="M3 8.5A1.5 1.5 0 0 1 4.5 7H7l1.4-2h7.2L17 7h2.5A1.5 1.5 0 0 1 21 8.5V18a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18z" /><circle cx="12" cy="13" r="3.4" /></g>}
      {name === "spark" && <g><path d="M12 3l1.9 5.6L19.5 10l-5.6 1.4L12 17l-1.9-5.6L4.5 10l5.6-1.4z" /><path d="M19 4.5l.6 1.7 1.7.6-1.7.6-.6 1.7-.6-1.7-1.7-.6 1.7-.6z" /></g>}
      {name === "target" && <g><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4.4" /><circle cx="12" cy="12" r="1" /></g>}
      {name === "shield" && <g><path d="M12 3l7 2.7v5.1c0 4.6-3 8.2-7 10.2-4-2-7-5.6-7-10.2V5.7z" /><path d="M9 12l2 2 4-4" /></g>}
    </svg>
  );
}

function PlayBadge({ href, big = false }: { href: string; big?: boolean }) {
  return (
    <a className={`play${big ? " play-big" : ""}`} href={href} target="_blank" rel="noopener" aria-label="Google Play에서 다운로드">
      <svg viewBox="0 0 512 512" width="22" height="22" aria-hidden>
        <path d="M48 32l244 224L48 480c-9-5-16-15-16-27V59c0-12 7-22 16-27z" fill="#34d399" />
        <path d="M48 32c3-2 7-3 11-3 5 0 10 2 15 5l158 92-60 60z" fill="#60a5fa" />
        <path d="M48 480c3 2 7 3 11 3 5 0 10-2 15-5l158-92-60-60z" fill="#f87171" />
        <path d="M372 196l64 37c20 12 20 39 0 51l-64 37-68-81z" fill="#fbbf24" />
      </svg>
      <span className="play-t"><small>GET IT ON</small><b>Google Play</b></span>
    </a>
  );
}

function Phone({ id, n }: { id: string; n: number }) {
  return (
    <div className="phone">
      <span className="notch" aria-hidden />
      <img src={`/shots/${id}/${n}.png`} alt="" loading="lazy" />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="nav">
        <div className="container nav-inner">
          <span className="brand">Teddy</span>
          <div className="nav-links">
            <a href="#english">Teddy 영어</a>
            <a href="#news">뉴스 브리핑</a>
            <a href="#diet">곰코치</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <span className="pill">AI 뉴스·영어·다이어트 앱</span>
            <h1>AI로 매일을<br />더 똑똑하게</h1>
            <p className="sub">영어는 AI와 대화로, 뉴스는 3줄로,<br />식단은 사진 한 장으로. 매일 쓰는 AI 앱 셋.</p>
            <div className="cta-row">
              <a className="chip chip-eng" href="#english">Teddy 영어</a>
              <a className="chip chip-news" href="#news">뉴스 브리핑</a>
              <a className="chip chip-diet" href="#diet">곰코치</a>
            </div>
            <PlayBadge href={ENG_URL} big />
          </div>
          <div className="hero-phones">
            <Phone id="news" n={1} />
            <Phone id="english" n={1} />
            <Phone id="diet" n={1} />
          </div>
        </div>
      </header>

      <section className="cards container">
        {[
          { t: "매일 아침, AI가 골라주는 맞춤 뉴스 브리핑", d: "관심사 기반 개인화 피드 · 실시간 시세", icon: "sun", c: "news" },
          { t: "AI가 핵심만 요약, 궁금하면 바로 질문", d: "긴 기사도 3줄 요약 · AI에게 물어보기", icon: "chat", c: "eng" },
          { t: "사진 한 장으로 칼로리·영양까지 기록", d: "찍으면 자동 인식 · 1:1 AI 코치", icon: "camera", c: "diet" },
        ].map((card) => (
          <div className={`fcard fcard-${card.c}`} key={card.t}>
            <div className={`ficon ficon-${card.c}`}><Icon name={card.icon} /></div>
            <h3>{card.t}</h3>
            <p>{card.d}</p>
          </div>
        ))}
      </section>

      {APPS.map((app) => (
        <section className={`app app-${app.theme}`} id={app.id} key={app.id} aria-label={app.name}>
          <div className="container app-inner">
            <div className="app-head">
              <span className={`badge badge-${app.theme}`}>{app.badge}</span>
              <h2>{app.name}</h2>
              <p className="tagline">{app.tagline}</p>
              <ul className="features">
                {app.features.map((f) => (<li className="feature" key={f}><span className="check" aria-hidden>✓</span><span>{f}</span></li>))}
              </ul>
              <a className={`chip chip-${app.theme}`} href={app.url} target="_blank" rel="noopener">자세히 보기 →</a>
            </div>
            <div className="app-phones"><Phone id={app.id} n={1} /><Phone id={app.id} n={2} /></div>
          </div>
        </section>
      ))}

      <section className="why">
        <div className="container">
          <h2>왜 Teddy인가요?</h2>
          <p className="why-sub">매일 사용하는 AI 습관 파트너</p>
          <div className="why-grid">
            {[
              { icon: "spark", t: "AI가 핵심만 요약", d: "시간은 절약하고 정보는 더 빠르게", color: "var(--eng)" },
              { icon: "chat", t: "대화로 배우는 맞춤", d: "실제 상황에서 쓰는 진짜 영어", color: "var(--news)" },
              { icon: "camera", t: "사진으로 간편하게", d: "식단·칼로리·체중을 한 번에 관리", color: "var(--diet)" },
              { icon: "target", t: "꾸준함이 답이다", d: "성장형 뱃지와 미션으로 매일 성장", color: "#a855f7" },
              { icon: "shield", t: "안전하고 믿을 수 있는", d: "사용자 데이터를 안전하게 보호", color: "var(--eng)" },
            ].map((w) => (
              <div className="why-item" key={w.t}><div className="why-ico" style={{ color: w.color }}><Icon name={w.icon} /></div><strong>{w.t}</strong><p>{w.d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container band-inner">
          <img className="mascot" src="/mascot.png" alt="Teddy 마스코트" />
          <div className="band-text">
            <h2>오늘부터 똑똑한 습관을 시작해보세요!</h2>
            <p>뉴스·영어·다이어트, AI가 매일 함께합니다.</p>
          </div>
          <PlayBadge href={ENG_URL} big />
        </div>
      </section>

      <section className="faq container" id="faq">
        <h2>자주 묻는 질문</h2>
        <div className="faq-list">
          {FAQ.map((f) => (<details className="faq-item" key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>))}
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <span className="brand small">Teddy</span>
            <p>AI가 당신의 매일을 더 똑똑하게 만들어주는<br />뉴스·영어·다이어트 통합 앱 서비스입니다.</p>
            <p className="copy">© {new Date().getFullYear()} Teddy. All rights reserved.</p>
          </div>
          <div className="footer-col"><h4>서비스</h4><a href={ENG_URL} target="_blank" rel="noopener">Teddy 영어</a><a href={NEWS_URL} target="_blank" rel="noopener">뉴스 브리핑</a><a href={FOOD_URL} target="_blank" rel="noopener">곰코치</a></div>
          <div className="footer-col"><h4>지원</h4><a href="#faq">FAQ</a><a href="mailto:namch1597@gmail.com">문의하기</a></div>
          <div className="footer-col"><h4>다운로드</h4><a href={ENG_URL} target="_blank" rel="noopener">Google Play에서 받기</a></div>
        </div>
      </footer>
    </main>
  );
}
