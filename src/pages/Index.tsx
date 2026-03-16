import { useState } from "react";

const AVATARS = [
  {
    id: 1,
    label: "Вариант I — Корона & Роза",
    subtitle: "Crown & Rose",
    url: "https://cdn.poehali.dev/projects/a42702b8-c05a-4fe4-b843-696510a7282f/files/433dd27d-63b3-4c92-9550-965686dbd7bd.jpg",
  },
  {
    id: 2,
    label: "Вариант II — Монограмма",
    subtitle: "Monogram & Dagger",
    url: "https://cdn.poehali.dev/projects/a42702b8-c05a-4fe4-b843-696510a7282f/files/40f13eec-70af-4b75-ad17-1239875385ea.jpg",
  },
];

const Index = () => {
  const [active, setActive] = useState(0);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ background: "#080808", fontFamily: "'Cormorant Garamond', serif" }}
    >
      <div className="w-full max-w-xl px-6 flex flex-col items-center">

        <div className="mb-2 tracking-[0.4em] text-xs uppercase" style={{ color: "#555", fontFamily: "'Oswald', sans-serif", fontWeight: 200 }}>
          Majestic RP
        </div>
        <h1
          className="text-center mb-1"
          style={{ fontSize: "clamp(2rem,6vw,3.2rem)", color: "#e8e0d0", fontWeight: 300, letterSpacing: "0.12em" }}
        >
          DELORIA
        </h1>
        <div className="mb-10 tracking-[0.3em] text-xs" style={{ color: "#8b0000", fontFamily: "'Oswald', sans-serif", fontWeight: 200 }}>
          CRIME FAMILY
        </div>

        <div className="relative w-72 h-72 sm:w-96 sm:h-96 mb-8">
          {AVATARS.map((av, i) => (
            <img
              key={av.id}
              src={av.url}
              alt={av.label}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                opacity: active === i ? 1 : 0,
                transition: "opacity 0.6s ease",
                border: "1px solid #222",
              }}
            />
          ))}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ boxShadow: "inset 0 0 60px rgba(0,0,0,0.6), 0 0 80px rgba(139,0,0,0.08)" }}
          />
        </div>

        <div
          className="text-center mb-8"
          style={{ minHeight: 40 }}
        >
          <div style={{ color: "#e8e0d0", fontSize: "1.1rem", letterSpacing: "0.06em", fontWeight: 300 }}>
            {AVATARS[active].label}
          </div>
          <div style={{ color: "#444", fontSize: "0.75rem", letterSpacing: "0.2em", fontFamily: "'Oswald', sans-serif", fontWeight: 200, marginTop: 4 }}>
            {AVATARS[active].subtitle}
          </div>
        </div>

        <div className="flex gap-6 items-center mb-10">
          {AVATARS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: active === i ? 32 : 20,
                height: 1,
                background: active === i ? "#8b0000" : "#333",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

        <div className="flex gap-3">
          {AVATARS.map((av, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="flex flex-col items-center gap-2"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                opacity: active === i ? 1 : 0.35,
                transition: "opacity 0.3s ease",
              }}
            >
              <img
                src={av.url}
                alt={av.label}
                style={{
                  width: 60,
                  height: 60,
                  objectFit: "cover",
                  border: active === i ? "1px solid #8b0000" : "1px solid #1a1a1a",
                  transition: "border 0.3s ease",
                }}
              />
              <span style={{ color: "#555", fontSize: "0.6rem", letterSpacing: "0.2em", fontFamily: "'Oswald', sans-serif", fontWeight: 200 }}>
                {i + 1 === 1 ? "I" : "II"}
              </span>
            </button>
          ))}
        </div>

        <a
          href={AVATARS[active].url}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10"
          style={{
            display: "inline-block",
            padding: "10px 36px",
            border: "1px solid #2a2a2a",
            color: "#888",
            textDecoration: "none",
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 300,
            textTransform: "uppercase",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "#8b0000";
            (e.currentTarget as HTMLAnchorElement).style.color = "#e8e0d0";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2a2a2a";
            (e.currentTarget as HTMLAnchorElement).style.color = "#888";
          }}
        >
          Скачать аватар
        </a>

        <div className="mt-14 mb-6" style={{ color: "#1e1e1e", fontSize: "0.5rem", letterSpacing: "0.4em", fontFamily: "'Oswald', sans-serif" }}>
          ——— DELORIA ———
        </div>
      </div>
    </div>
  );
};

export default Index;