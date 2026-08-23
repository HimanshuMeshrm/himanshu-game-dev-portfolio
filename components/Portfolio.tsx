 "use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown, ArrowUpRight, ChevronRight, Github, Linkedin, Mail,
  Menu, Play, Sparkles, X, Download
} from "lucide-react";

type Project = {
  id: string;
  title: string;
  type: string;
  year: string;
  tags: string[];
  description: string;
  long: string;
  accent: "acid" | "violet" | "cyan" | "orange";
  icon: string;
  features: string[];
  status: string;
  demo: string;
  github: string;
};

const projects: Project[] = [
  {
    id: "chronoshift",
    title: "ChronoShift",
    type: "3D GAME",
    year: "2026",
    tags: ["Unity", "C#", "Prototype"],
    icon: "◒",
    accent: "acid",
    description: "A time-bending game concept built around movement, timing and reactive gameplay systems.",
    long: "ChronoShift is a prototype focused on a strong central time-control mechanic. The project is a showcase of gameplay logic, player interaction, state handling and level-flow experimentation.",
    features: ["Time-control gameplay", "Player controller systems", "Reactive level logic", "Gameplay prototyping"],
    status: "Prototype / In Development",
    demo: "#",
    github: "#"
  },
  {
    id: "freezerun",
    title: "Freeze Run",
    type: "MOBILE GAME",
    year: "2026",
    tags: ["Unity", "C#", "Mobile"],
    icon: "❄",
    accent: "cyan",
    description: "An endless runner where holding the screen freezes time and creates a risk-versus-reward loop.",
    long: "Freeze Run is designed around one readable mobile interaction: hold to freeze the world, release to move again. An energy system turns the mechanic into a strategic decision rather than a simple button.",
    features: ["Hold-to-freeze mechanic", "Energy management", "Mobile input", "Endless game loop"],
    status: "Prototype",
    demo: "#",
    github: "#"
  },
  {
    id: "deepcore",
    title: "DeepCore Dive",
    type: "ROGUELITE",
    year: "2026",
    tags: ["Unity", "3D", "Prototype"],
    icon: "⌁",
    accent: "violet",
    description: "A roguelite mining concept focused on underground exploration, resources and procedural spaces.",
    long: "DeepCore Dive explores how procedural environments and progression can create replayable exploration. The portfolio version highlights the systems and design thinking behind the prototype.",
    features: ["3D exploration", "Procedural direction", "Resource systems", "Progression concept"],
    status: "Concept / Prototype",
    demo: "#",
    github: "#"
  },
  {
    id: "crop",
    title: "AI Crop Simulator",
    type: "EDUCATIONAL",
    year: "2026",
    tags: ["Unity", "Simulation", "Education"],
    icon: "⌘",
    accent: "acid",
    description: "An educational simulation concept showing students how AI can support farming decisions.",
    long: "AI Crop Simulator was designed as a student-friendly experience. It uses a simple simulation loop to communicate how AI can help with decisions such as crop planning and resource management.",
    features: ["Simulation loop", "Educational UX", "Decision systems", "AI concept"],
    status: "Educational Prototype",
    demo: "#",
    github: "#"
  },
  {
    id: "fruit",
    title: "Fruit Collector",
    type: "MINI GAME",
    year: "2025",
    tags: ["Unity", "3D", "Prototype"],
    icon: "✦",
    accent: "orange",
    description: "A compact Unity gameplay prototype built to practice interaction, scoring and game-loop fundamentals.",
    long: "Fruit Collector is one of the smaller prototypes in the portfolio. It demonstrates the ability to turn a simple mechanic into a complete playable loop with feedback and scoring.",
    features: ["Player interaction", "Score system", "Game loop", "Prototype iteration"],
    status: "Prototype",
    demo: "#",
    github: "#"
  },
  {
    id: "lava",
    title: "Floor is Lava",
    type: "MINI GAME",
    year: "2025",
    tags: ["Unity", "3D", "Prototype"],
    icon: "△",
    accent: "violet",
    description: "A Unity 3D prototype focused on movement, hazards and quick gameplay iteration.",
    long: "Floor is Lava is a small gameplay experiment that helped develop practical Unity skills around movement, collision, hazards and level composition.",
    features: ["3D movement", "Hazards", "Collision logic", "Level prototype"],
    status: "Prototype",
    demo: "#",
    github: "#"
  }
];

const filters = ["All", "Unity", "C#", "Mobile", "3D", "Prototype", "Education"];

const codeLines = [
  "public class Player : MonoBehaviour",
  "{",
  "    void Update()",
  "    {",
  "        Vector3 input = ReadMovement();",
  "",
  "        transform.Translate(",
  "            input * speed * Time.deltaTime",
  "        );",
  "    }",
  "}"
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const shown = useMemo(
    () => filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter)),
    [filter]
  );

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <>
      <div style={{ position: "fixed", top: 0, left: 0, width: `${progress}%`, height: 2, background: "var(--acid)", zIndex: 100 }} />

      <header className="container" style={{ height: 78, display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 60 }}>
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 800, letterSpacing: ".1em" }}>
          <span style={{ width: 31, height: 31, borderRadius: 8, display: "grid", placeItems: "center", background: "var(--acid)", color: "#07080c" }}>H</span>
          HIMANSHU<span style={{ color: "var(--acid)" }}>.</span>
        </a>

        <nav style={{ display: "flex", gap: 28, fontSize: 13, color: "var(--muted)" }} className="desktop-nav">
          <a href="#games">Games</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="desktop-nav" style={{ border: "1px solid var(--line)", padding: "10px 14px", borderRadius: 8, fontSize: 12 }}>
          LET&apos;S BUILD <span style={{ color: "var(--acid)" }}>↗</span>
        </a>

        <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu" style={{ display: "none", background: "none", border: 0, color: "white" }} className="mobile-menu">
          <Menu />
        </button>
      </header>

      {mobileOpen && (
        <div style={{ position: "fixed", top: 70, left: 20, right: 20, zIndex: 55, padding: 20, background: "var(--panel)", border: "1px solid var(--line)", borderRadius: 12 }} className="mobile-menu">
          <div style={{ display: "grid", gap: 18 }}>
            {["games", "about", "skills", "contact"].map((x) => (
              <a key={x} href={`#${x}`} onClick={() => setMobileOpen(false)} style={{ textTransform: "uppercase", fontSize: 12 }}>{x}</a>
            ))}
          </div>
        </div>
      )}

      <main id="top">
        <section className="container hero-section">
          <div>
            <div className="mono" style={{ fontSize: 11, letterSpacing: ".12em", color: "var(--acid)", display: "flex", gap: 8, alignItems: "center" }}>
              <span className="pulse" style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--acid)" }} />
              GAME PROGRAMMER · UNITY · C#
            </div>

            <h1 style={{ fontSize: "clamp(56px,8vw,108px)", lineHeight: .87, letterSpacing: "-.07em", margin: "22px 0 28px", maxWidth: 900 }}>
              I BUILD GAMES<br />
              <span style={{ color: "var(--acid)" }}>PEOPLE REMEMBER.</span>
            </h1>

            <p style={{ fontSize: 18, lineHeight: 1.65, color: "var(--muted)", maxWidth: 560 }}>
              I&apos;m Himanshu, a game developer focused on gameplay programming, systems, and polished interactive experiences.
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 30 }}>
              <a href="#games" style={{ background: "var(--acid)", color: "#07080c", padding: "14px 18px", borderRadius: 9, fontSize: 13, fontWeight: 700, display: "inline-flex", gap: 20 }}>
                EXPLORE MY GAMES <ArrowDown size={17} />
              </a>
              <a href="#contact" style={{ border: "1px solid var(--line)", padding: "14px 18px", borderRadius: 9, fontSize: 13, display: "inline-flex", gap: 20 }}>
                CONTACT ME <ArrowUpRight size={17} />
              </a>
            </div>

            <div style={{ display: "flex", gap: 35, marginTop: 55 }}>
              {[["Unity", "ENGINE"], ["C#", "PROGRAMMING"], ["3D", "GAMES"]].map(([a, b]) => (
                <div key={a}><b>{a}</b><div className="mono" style={{ fontSize: 9, color: "var(--muted)", marginTop: 5 }}>{b}</div></div>
              ))}
            </div>
          </div>

          <div className="hero-art grid-bg float">
            <div style={{ position: "absolute", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle,rgba(139,108,255,.32),transparent 65%)", top: 40, right: 20 }} />
            <div style={{ position: "absolute", width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle,rgba(201,255,59,.18),transparent 65%)", bottom: 0, left: 0 }} />

            <div style={{ width: "82%", background: "rgba(7,8,12,.88)", border: "1px solid var(--line)", borderRadius: 14, padding: 20, position: "relative", zIndex: 2, transform: "rotate(2deg)" }}>
              <div className="mono" style={{ fontSize: 10, color: "#74798a", borderBottom: "1px solid var(--line)", paddingBottom: 14, display: "flex", justifyContent: "space-between" }}>
                <span>PLAYER_CONTROLLER.cs</span><span>● ● ●</span>
              </div>
              <pre className="mono" style={{ fontSize: 12, lineHeight: 1.9, color: "#d9dbe4", overflow: "auto", margin: "18px 0" }}>
                {codeLines.join("\n")}
              </pre>
              <div className="mono" style={{ fontSize: 10, color: "#858998" }}>
                <span style={{ color: "var(--acid)" }}>●</span> SYSTEMS ONLINE
              </div>
            </div>

            <span className="mono hero-tag-left">GAMEPLAY</span>
            <span className="mono hero-tag-right">SYSTEMS</span>
          </div>
        </section>

        <div style={{ borderBlock: "1px solid var(--line)", overflow: "hidden", whiteSpace: "nowrap", padding: "18px 0", fontSize: 11 }} className="mono">
          <div className="marquee-track" style={{ display: "inline-block", color: "#737887", letterSpacing: ".1em" }}>
            GAMEPLAY PROGRAMMING <span style={{ color: "var(--acid)", margin: "0 25px" }}>✦</span>
            UNITY <span style={{ color: "var(--acid)", margin: "0 25px" }}>✦</span>
            C# <span style={{ color: "var(--acid)", margin: "0 25px" }}>✦</span>
            GAME SYSTEMS <span style={{ color: "var(--acid)", margin: "0 25px" }}>✦</span>
            PROTOTYPING <span style={{ color: "var(--acid)", margin: "0 25px" }}>✦</span>
            GAME DESIGN <span style={{ color: "var(--acid)", margin: "0 25px" }}>✦</span>
            GAMEPLAY PROGRAMMING <span style={{ color: "var(--acid)", margin: "0 25px" }}>✦</span>
            UNITY <span style={{ color: "var(--acid)", margin: "0 25px" }}>✦</span>
            C#
          </div>
        </div>

        <section id="games" className="container" style={{ padding: "125px 0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 40, marginBottom: 35, flexWrap: "wrap" }}>
            <div>
              <div className="mono" style={{ fontSize: 11, color: "var(--muted)" }}>01 / SELECTED WORK</div>
              <h2 style={{ fontSize: "clamp(45px,6vw,76px)", lineHeight: .95, letterSpacing: "-.06em", margin: "14px 0" }}>GAMES &amp; <span style={{ color: "var(--acid)" }}>PROJECTS.</span></h2>
            </div>
            <p style={{ maxWidth: 380, color: "var(--muted)", lineHeight: 1.65, fontSize: 14 }}>
              A growing collection of prototypes, experiments and game-development work. Each project can become a full case study.
            </p>
          </div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 25 }}>
            {filters.map((f) => (
              <button key={f} onClick={() => setFilter(f)} style={{ border: `1px solid ${filter === f ? "var(--acid)" : "var(--line)"}`, background: filter === f ? "var(--acid)" : "transparent", color: filter === f ? "#07080c" : "var(--muted)", padding: "9px 13px", borderRadius: 100, fontSize: 11, cursor: "pointer" }} className="mono">
                {f}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {shown.map((p, i) => (
              <ProjectCard key={p.id} p={p} featured={i === 0 && shown.length > 2} onOpen={() => setSelected(p)} />
            ))}
          </div>
        </section>

        <section id="about" className="container about-section">
          <div className="photo-placeholder grid-bg">
            <div style={{ fontSize: 70, fontWeight: 800, lineHeight: .8, letterSpacing: "-.08em", color: "rgba(255,255,255,.09)", textAlign: "center" }}>YOUR<br />PHOTO</div>
            <div className="mono" style={{ position: "absolute", bottom: 22, fontSize: 10, color: "#6d7180" }}>REPLACE WITH DEVELOPER PORTRAIT</div>
            <div style={{ position: "absolute", right: -30, bottom: 30, background: "var(--acid)", color: "#07080c", padding: "18px 20px", borderRadius: 10, display: "flex", gap: 18, alignItems: "center" }}>
              <b style={{ fontSize: 32 }}>01</b><span className="mono" style={{ fontSize: 10 }}>GAME<br />PROGRAMMER<br />PORTFOLIO</span>
            </div>
          </div>

          <div>
            <div className="mono" style={{ fontSize: 11, color: "var(--muted)" }}>02 / ABOUT ME</div>
            <h2 style={{ fontSize: "clamp(45px,6vw,76px)", lineHeight: .95, letterSpacing: "-.06em", margin: "14px 0 25px" }}>FROM IDEA → <span style={{ color: "var(--acid)" }}>PLAYABLE.</span></h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>I enjoy turning game ideas into working systems — from player movement and health to enemy AI, UI, state machines and interactive mechanics.</p>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>My current focus is becoming a stronger gameplay programmer and building a portfolio that demonstrates both technical ability and game-design thinking.</p>
            <div style={{ borderLeft: "2px solid var(--acid)", padding: "8px 0 8px 18px", margin: "28px 0", color: "#dfe1e7" }}>
              “Good code disappears into the experience. The player just feels the game.”
            </div>
          </div>
        </section>

        <section id="skills" className="container" style={{ padding: "20px 0 125px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 40, flexWrap: "wrap", gap: 25 }}>
            <div>
              <div className="mono" style={{ fontSize: 11, color: "var(--muted)" }}>03 / TOOLKIT</div>
              <h2 style={{ fontSize: "clamp(45px,6vw,76px)", lineHeight: .95, letterSpacing: "-.06em", margin: "14px 0" }}>MY <span style={{ color: "var(--acid)" }}>STACK.</span></h2>
            </div>
            <p style={{ maxWidth: 380, color: "var(--muted)", fontSize: 14, lineHeight: 1.6 }}>Tools and concepts I use to prototype and develop games.</p>
          </div>

          <div style={{ borderTop: "1px solid var(--line)" }}>
            {[
              ["01", "Unity", "3D development · URP · Input System · Cinemachine · NavMesh", "90%"],
              ["02", "C#", "OOP · gameplay systems · events · state machines · patterns", "80%"],
              ["03", "Game Systems", "Player controllers · AI · UI · health · pooling · managers", "78%"],
              ["04", "Tools", "Git · Blender/Maya · Mixamo · Quixel · GitHub · Itch.io", "72%"]
            ].map(([n, t, d, v]) => (
              <div key={n} className="skill-row">
                <span className="mono" style={{ fontSize: 10, color: "#666b79" }}>{n}</span>
                <div><h3 style={{ margin: "0 0 6px", fontSize: 20 }}>{t}</h3><p style={{ margin: 0, color: "var(--muted)", fontSize: 12 }}>{d}</p></div>
                <b className="mono" style={{ fontSize: 11, color: "var(--acid)", textAlign: "right" }}>{v}</b>
              </div>
            ))}
          </div>
        </section>

        <section className="container" style={{ paddingBottom: 125 }}>
          <div style={{ maxWidth: 820, margin: "auto", background: "#0b0d12", border: "1px solid var(--line)", borderRadius: 12, overflow: "hidden" }}>
            <div className="mono" style={{ background: "#12151d", padding: "11px 14px", fontSize: 10, color: "#74798a", display: "flex", justifyContent: "space-between" }}>
              <span>himanshu@portfolio:~</span><span>● ● ●</span>
            </div>
            <div className="mono" style={{ padding: 24, fontSize: 12, lineHeight: 1.8, minHeight: 250 }}>
              <p><span style={{ color: "var(--acid)" }}>$</span> whoami</p>
              <p style={{ color: "#8e94a5", marginLeft: 15 }}>game_developer.exe</p>
              <p><span style={{ color: "var(--acid)" }}>$</span> cat focus.txt</p>
              <p style={{ color: "#8e94a5", marginLeft: 15 }}>Gameplay programming<br />Interactive systems<br />Unity + C#</p>
              <p><span style={{ color: "var(--acid)" }}>$</span> status</p>
              <p style={{ color: "var(--acid)", marginLeft: 15 }}>OPEN TO INTERNSHIPS · JUNIOR GAME PROGRAMMING ROLES</p>
              <p><span style={{ color: "var(--acid)" }}>$</span> <span style={{ animation: "blink 1s steps(1) infinite" }}>_</span></p>
            </div>
          </div>
        </section>

        <section id="contact" className="container" style={{ textAlign: "center", padding: "30px 0 150px" }}>
          <div className="mono" style={{ fontSize: 11, color: "var(--muted)" }}>04 / CONTACT</div>
          <h2 style={{ fontSize: "clamp(65px,10vw,125px)", lineHeight: .88, letterSpacing: "-.07em", margin: "18px 0" }}>HAVE A GAME<br /><span style={{ color: "var(--acid)" }}>IN MIND?</span></h2>
          <p style={{ maxWidth: 500, margin: "25px auto", color: "var(--muted)", lineHeight: 1.7 }}>I&apos;m interested in building, learning and collaborating on interesting interactive projects.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap", marginTop: 30 }}>
            <a href="mailto:your.email@example.com" style={{ background: "var(--acid)", color: "#07080c", padding: "16px 20px", borderRadius: 9, fontWeight: 700, fontSize: 13, display: "inline-flex", gap: 18 }}>EMAIL ME <Mail size={17} /></a>
            <a href="#" style={{ border: "1px solid var(--line)", padding: "16px 20px", borderRadius: 9, fontSize: 13, display: "inline-flex", gap: 18 }}>GITHUB <Github size={17} /></a>
            <a href="#" style={{ border: "1px solid var(--line)", padding: "16px 20px", borderRadius: 9, fontSize: 13, display: "inline-flex", gap: 18 }}>LINKEDIN <Linkedin size={17} /></a>
            <a href="/resume.pdf" style={{ border: "1px solid var(--line)", padding: "16px 20px", borderRadius: 9, fontSize: 13, display: "inline-flex", gap: 18 }}>RESUME <Download size={17} /></a>
          </div>
        </section>
      </main>

      <footer className="container" style={{ borderTop: "1px solid var(--line)", padding: "25px 0", display: "flex", justifyContent: "space-between", gap: 15, flexWrap: "wrap", color: "#666b79", fontSize: 10 }}>
        <span>© 2026 HIMANSHU</span><span className="mono">BUILT WITH CODE &amp; CURIOSITY</span><a href="#top">BACK TO TOP ↑</a>
      </footer>

      {selected && (
        <div onMouseDown={(e) => { if (e.currentTarget === e.target) setSelected(null); }} style={{ position: "fixed", inset: 0, zIndex: 90, background: "rgba(0,0,0,.78)", backdropFilter: "blur(8px)", display: "grid", placeItems: "center", padding: 20 }}>
          <div style={{ width: "min(780px,100%)", maxHeight: "90vh", overflow: "auto", background: "var(--panel)", border: "1px solid var(--line)", borderRadius: 16, padding: 34, position: "relative" }}>
            <button onClick={() => setSelected(null)} aria-label="Close project" style={{ position: "absolute", right: 15, top: 12, background: "none", border: 0, color: "white", cursor: "pointer" }}><X /></button>
            <div className="mono" style={{ fontSize: 10, color: "var(--muted)" }}>{selected.type} · {selected.year}</div>
            <h3 style={{ fontSize: "clamp(40px,7vw,64px)", letterSpacing: "-.06em", margin: "12px 0" }}>{selected.title}</h3>
            <div style={{ height: 230, borderRadius: 12, border: "1px solid var(--line)", display: "grid", placeItems: "center", background: selected.accent === "violet" ? "radial-gradient(circle,rgba(139,108,255,.22),transparent 45%),#090a0f" : selected.accent === "cyan" ? "radial-gradient(circle,rgba(102,217,255,.2),transparent 45%),#090a0f" : "radial-gradient(circle,rgba(201,255,59,.18),transparent 45%),#090a0f", margin: "24px 0" }}>
              <span className="mono" style={{ fontSize: 11, color: "#707586" }}>ADD GAMEPLAY VIDEO / GIF / SCREENSHOT HERE</span>
            </div>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>{selected.long}</p>
            <h4 style={{ marginTop: 28 }}>What I built</h4>
            <div className="feature-grid">
              {selected.features.map((x) => (
                <div key={x} style={{ border: "1px solid var(--line)", padding: 12, borderRadius: 8, fontSize: 12 }}>
                  <Sparkles size={14} style={{ verticalAlign: "middle", marginRight: 7, color: "var(--acid)" }} />{x}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 25, flexWrap: "wrap" }}>
              <a href={selected.github} style={{ background: "var(--acid)", color: "#07080c", padding: "12px 15px", borderRadius: 8, fontSize: 12, fontWeight: 700, display: "inline-flex", gap: 10 }}>GITHUB <Github size={15} /></a>
              <a href={selected.demo} style={{ border: "1px solid var(--line)", padding: "12px 15px", borderRadius: 8, fontSize: 12, display: "inline-flex", gap: 10 }}>PLAY / DEMO <Play size={15} /></a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .hero-section{min-height:calc(100vh - 78px);display:grid;grid-template-columns:1.05fr .95fr;align-items:center;gap:40px;padding-top:40px;padding-bottom:70px}
        .hero-art{height:550px;border:1px solid var(--line);border-radius:18px;position:relative;overflow:hidden;display:grid;place-items:center}
        .hero-tag-left{position:absolute;top:35px;left:25px;font-size:10px;border:1px solid var(--line);padding:9px 11px;background:#0c0e14}
        .hero-tag-right{position:absolute;bottom:35px;right:25px;font-size:10px;border:1px solid var(--line);padding:9px 11px;background:#0c0e14}
        .project-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}
        .about-section{padding:60px 0 125px;display:grid;grid-template-columns:.8fr 1.2fr;gap:100px;align-items:center}
        .photo-placeholder{height:520px;border:1px solid var(--line);border-radius:16px;display:grid;place-items:center;background-color:#0c0f15;position:relative}
        .skill-row{display:grid;grid-template-columns:60px 1fr 60px;gap:20px;padding:25px 0;border-bottom:1px solid var(--line);align-items:center}
        .feature-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}
        @media(max-width:850px){
          .hero-section{grid-template-columns:1fr}
          .hero-art{height:430px}
          .about-section{grid-template-columns:1fr;gap:50px}
          .project-grid{grid-template-columns:1fr}
          .project-grid article:first-child{grid-column:auto!important}
        }
        @media(max-width:800px){
          .desktop-nav{display:none!important}.mobile-menu{display:block!important}
          .container{width:calc(100% - 32px)}
          .skill-row{grid-template-columns:40px 1fr 50px}
        }
        @media(max-width:600px){
          .feature-grid{grid-template-columns:1fr}
          .hero-art{height:390px}
          .hero-art > div:nth-child(3){width:90%!important}
        }
      `}</style>
    </>
  );
}

function ProjectCard({ p, featured, onOpen }: { p: Project; featured: boolean; onOpen: () => void }) {
  const bg = p.accent === "violet"
    ? "radial-gradient(circle at 60% 55%,rgba(139,108,255,.28),transparent 25%),linear-gradient(135deg,#171924,#08090d)"
    : p.accent === "cyan"
      ? "radial-gradient(circle at 40% 45%,rgba(102,217,255,.22),transparent 25%),linear-gradient(135deg,#0e1821,#10131b)"
      : p.accent === "orange"
        ? "radial-gradient(circle at 50% 50%,rgba(255,145,80,.20),transparent 25%),linear-gradient(135deg,#1b1411,#0d0e12)"
        : "radial-gradient(circle at 65% 50%,rgba(201,255,59,.20),transparent 25%),linear-gradient(135deg,#171a24,#08090d)";

  return (
    <article style={{ gridColumn: featured ? "span 2" : "auto", background: "var(--panel)", border: "1px solid var(--line)", borderRadius: 15, overflow: "hidden", display: featured ? "grid" : "block", gridTemplateColumns: featured ? "1.2fr .8fr" : undefined }}>
      <div style={{ minHeight: featured ? 390 : 280, position: "relative", overflow: "hidden", background: bg, display: "grid", placeItems: "center" }}>
        <span className="mono" style={{ position: "absolute", top: 20, left: 20, fontSize: 10, letterSpacing: ".12em" }}>{p.title.toUpperCase()}</span>
        <span style={{ fontSize: 170, fontWeight: 800, opacity: .11, lineHeight: 1 }}>{p.icon}</span>
        <span className="mono" style={{ position: "absolute", bottom: 20, left: 20, fontSize: 9, color: "#8a8f9e" }}>{p.status}</span>
      </div>

      <div style={{ padding: 25 }}>
        <div className="mono" style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#727687" }}><span>{p.year}</span><span>{p.type}</span></div>
        <h3 style={{ fontSize: 30, letterSpacing: "-.04em", margin: "18px 0 10px" }}>{p.title}</h3>
        <p style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.6 }}>{p.description}</p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 18 }}>
          {p.tags.map((t) => <span key={t} className="mono" style={{ fontSize: 9, padding: "6px 8px", background: "rgba(255,255,255,.04)", border: "1px solid var(--line)", borderRadius: 100, color: "#a6aab7" }}>{t}</span>)}
        </div>
        <button onClick={onOpen} style={{ border: 0, background: "none", padding: 0, marginTop: 24, color: "var(--acid)", fontSize: 12, cursor: "pointer", display: "inline-flex", gap: 9, alignItems: "center" }} className="mono">
          VIEW CASE STUDY <ChevronRight size={15} />
        </button>
      </div>
    </article>
  );
}
