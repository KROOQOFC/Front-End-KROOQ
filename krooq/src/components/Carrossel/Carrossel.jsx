import { useState, useEffect, useRef, useCallback } from "react";
import "./Carrossel.css";
import Artur from "../../assets/Artur.jpeg"
import Alice from "../../assets/Alice.jpeg"
import Beatriz from "../../assets/Beatriz.jpeg"
import Gabriel from "../../assets/Gabriel.jpeg"
import Eduardo from "../../assets/Eduardo.jpeg"
import Lucas from "../../assets/Lucas.jpeg"
import Walter from "../../assets/Walter.jpeg"
import Maria from "../../assets/Maria.jpeg"

/**
 * TeamCarousel
 *
 * Props:
 *   members  – array de objetos com: { name, role, photo?, initials, linkedin, github }
 *   interval – tempo em ms entre rotações automáticas (default: 3000)
 *   title    – título exibido acima do carrossel (default: "Conheça o time")
 *   label    – rótulo pequeno acima do título (default: "Nossa equipe")
 */
export default function Carrossel({
  members = DEFAULT_MEMBERS,
  interval = 4000,
  title = "KROOQ com você",
  label = "Quem constrói a",
}) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const n = members.length;

  const resetAuto = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % n);
    }, interval);
  }, [n, interval]);

  useEffect(() => {
    resetAuto();
    return () => clearInterval(timerRef.current);
  }, [resetAuto]);

  function goTo(index) {
    setCurrent(index);
    resetAuto();
  }

  function getTransform(pos) {
    const angle = (pos / n) * 360;
    const rad = (angle * Math.PI) / 180;
    const rx = 260;
    const ry = 60;
    const x = Math.sin(rad) * rx;
    const z = Math.cos(rad) * ry;
    const scale = 0.55 + 0.45 * ((z + ry) / (2 * ry));
    const opacity = 0.3 + 0.7 * ((z + ry) / (2 * ry));
    const blur = z < 0 ? (Math.abs(z) / ry) * 2 : 0;
    const zIndex = Math.round(scale * 100);
    return { x, z, scale, opacity, blur, zIndex };
  }

  return (
    <section className="tc-section">
      <p className="tc-label">{label}</p>
      <h2 className="tc-title">{title}</h2>

      <div className="tc-stage">
        <div className="tc-wrapper">
          {members.map((m, i) => {
            const pos = ((i - current) % n + n) % n;
            const t = getTransform(pos);
            return (
              <div
                key={i}
                className="tc-card"
                style={{
                  transform: `translateX(${t.x}px) translateZ(${t.z}px) scale(${t.scale})`,
                  opacity: t.opacity,
                  zIndex: t.zIndex,
                  filter: t.blur > 0 ? `blur(${t.blur}px)` : "none",
                  pointerEvents: pos === 0 ? "auto" : "none",
                }}
                onClick={() => goTo(i)}
              >
                {m.photo ? (
                  <img
                    className="tc-avatar tc-avatar--img"
                    src={m.photo}
                    alt={m.name}
                  />
                ) : (
                  <div
                    className="tc-avatar tc-avatar--initials"
                    style={{ background: m.color || "#e8f0fe" }}
                  >
                    {m.initials}
                  </div>
                )}

                <p className="tc-name">{m.name}</p>
                <p className="tc-role">{m.role}</p>

                <div className="tc-links">
                  {m.linkedin && (
                    <a
                      className="tc-link"
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon />
                      LinkedIn
                    </a>
                  )}
                  {m.github && (
                    <a
                      className="tc-link"
                      href={m.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="tc-nav">
        <button
          className="tc-nav-btn"
          aria-label="Anterior"
          onClick={() => goTo((current - 1 + n) % n)}
        >
          ‹
        </button>

        <button
          className="tc-nav-btn"
          aria-label="Próximo"
          onClick={() => goTo((current + 1) % n)}
        >
          ›
        </button>
      </div>
    </section>
  );
}

/* ── Inline icons (sem dependência extra) ─────────────────── */

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

const DEFAULT_MEMBERS = [
  {
    name: "Gabriel Oliveira",
    role: "Product Onwer e Full Stack",
    initials: "GO",
    photo: Gabriel,
    linkedin: "https://www.linkedin.com/in/gabrielcavaloliveira/",
    github: "https://github.com/GabrielC0liveira",
  },
  {
    name: "Alice Galas",
    role: "Front-end e Marketing",
    initials: "AG",
    photo: Alice,
    linkedin: "https://www.linkedin.com/in/alicefgalas/",
    github: "https://github.com/Alicegalas",
  },
  {
    name: "Artur Cosmo",
    role: "Scrum Master e Back-End",
    initials: "AC",
    photo: Artur,
    linkedin: "https://www.linkedin.com/in/arturqueirozz/",
    github: "https://github.com/Arturqueiiroz",
  },
  {
    name: "Beatriz Prates",
    role: "Ui/Ux Designer e Front-End",
    initials: "BP",
    photo: Beatriz,
    linkedin: "https://www.linkedin.com/in/beatriz-morais-207b2a2a5/",
    github: "https://github.com/santosmoraisbeatriz40-bot",
  },
  {
    name: "Eduardo Lima",
    role: "Back-end",
    initials: "EL",
    photo: Eduardo,
    linkedin: "https://www.linkedin.com/in/eduardoslima7/",
    github: "https://github.com/Eduardosliima",
  },
  {
    name: "Lucas Santos",
    role: "Full Stack",
    initials: "LS",
    photo: Lucas,
    linkedin: "https://www.linkedin.com/in/lucassantos-silva/",
    github: "https://github.com/LucSantSil",
  },
  {
    name: "Maria Mota",
    role: "Front-End",
    initials: "MM",
    photo: Maria,
    linkedin: "https://www.linkedin.com/in/marialuisamota/",
    github: "https://github.com/luisamota",
  },
  {
    name: "Walter Riva",
    role: "Back-end",
    initials: "WR",
    photo: Walter,
    linkedin: "https://www.linkedin.com/in/walter-santana-riva-17baa2409/",
    github: "https://github.com/WalterSantanaRiva",
  },
];
