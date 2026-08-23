 "use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowDown, ArrowUpRight, ChevronRight, Download, Github, Linkedin,
  Mail, Menu, Play, Sparkles, X, Code2, Gamepad2, Cpu, Layers3, ExternalLink
} from "lucide-react";
import { projects, type Project } from "@/lib/projects";

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
      <div style={{position:"fixed",top:0,left:0,width:`${progress}%`,height:2,background:"var(--acid)",zIndex:100}} />

      <header className="container nav">
        <Link href="#top" className="brand">
          <span className="brand-mark">H</span>
          HIMANSHU<span style={{color:"var(--acid)"}}>.</span>
        </Link>

        <nav className="nav-links">
          <Link href="#games">Games</Link>
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#resume">Resume</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <Link href="#contact" className="nav-cta">LET&apos;S BUILD <ArrowUpRight size={13}/></Link>
        <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Open menu"><Menu/></button>
      </header>

      {mobileOpen && (
        <div className="mobile-menu-panel">
          {["games","about","skills","resume","contact"].map((x) => (
            <Link key={x} href={`#${x}`} onClick={() => setMobileOpen(false)}>{x}</Link>
          ))}
        </div>
      )}

      <main id="top">
        <section className="container hero">
          <div>
            <div className="mono kicker"><span className="pulse-dot"/> GAME PROGRAMMER · UNITY · C#</div>
            <h1>I BUILD GAMES<br/><span>PEOPLE REMEMBER.</span></h1>
            <p className="hero-copy">I&apos;m Himanshu, a BCA Game Development student and aspiring game programmer focused on gameplay systems, Unity, C# and interactive experiences.</p>
            <div className="hero-buttons">
              <Link href="#games" className="button-primary">EXPLORE MY GAMES <ArrowDown size={17}/></Link>
              <a href="/resume.pdf" className="button-secondary">DOWNLOAD RESUME <Download size={17}/></a>
            </div>
            <div className="hero-stats">
              <div><b>UNITY</b><span>ENGINE</span></div>
              <div><b>C#</b><span>GAMEPLAY</span></div>
              <div><b>3D</b><span>DEVELOPMENT</span></div>
              <div><b>GIT</b><span>WORKFLOW</span></div>
            </div>
          </div>

          <div className="hero-art grid-bg float">
            <div className="orb orb-one"/>
            <div className="orb orb-two"/>
            <div className="code-card">
              <div className="code-head"><span>PLAYER_CONTROLLER.cs</span><span>● ● ●</span></div>
              <pre>{codeLines.join("\n")}</pre>
              <div className="code-status"><span/> SYSTEMS ONLINE</div>
            </div>
            <span className="hero-tag tag-left mono">GAMEPLAY</span>
            <span className="hero-tag tag-right mono">SYSTEMS</span>
          </div>
        </section>

        <div className="marquee mono">
          <div className="marquee-track">
            GAMEPLAY PROGRAMMING <i>✦</i> UNITY <i>✦</i> C# <i>✦</i> GAME AI <i>✦</i> GAME SYSTEMS <i>✦</i> PROTOTYPING <i>✦</i> GAME DESIGN <i>✦</i> GITHUB <i>✦</i> GAMEPLAY PROGRAMMING <i>✦</i> UNITY <i>✦</i> C# <i>✦</i>
          </div>
        </div>

        <section id="games" className="container section">
          <SectionHeading number="01 / SELECTED WORK" title={<>GAMES &amp; <span>PROJECTS.</span></>} text="Playable ideas, prototypes and systems I have built while learning game development." />
          <div className="filter-row">
            {filters.map((f) => (
              <button key={f} className={`filter ${filter === f ? "active" : ""}`} onClick={() => setFilter(f)}>{f}</button>
            ))}
          </div>

          <div className="project-grid">
            {shown.map((project, index) => (
              <ProjectCard key={project.slug} project={project} featured={index === 0 && shown.length > 2} onOpen={() => setSelected(project)} />
            ))}
          </div>
        </section>

        <section id="about" className="container about section">
          <div className="about-photo grid-bg">
            <div className="photo-letter">H</div>
            <div className="photo-note mono">YOUR PHOTO / DEVELOPER PORTRAIT</div>
            <div className="experience-card"><b>GAME<br/>PROGRAMMER</b><span>PORTFOLIO</span></div>
          </div>

          <div>
            <div className="mono section-label">02 / ABOUT ME</div>
            <h2>FROM IDEA → <span>PLAYABLE.</span></h2>
            <p>I&apos;m studying BCA Game Development and building my skills toward a career in game programming. My main focus is turning game ideas into working gameplay systems in Unity using C#.</p>
            <p>I enjoy the technical side of games: player controllers, health systems, UI, enemy AI, state machines, NavMesh, object pooling and reusable gameplay architecture.</p>
            <p>I also experiment with game design, 3D workflows and Unreal Engine/C++ as I continue expanding my programming foundation.</p>
            <div className="quote">“Good code disappears into the experience. The player just feels the game.”</div>
            <div className="about-actions">
              <a href="https://github.com/HimanshuMeshrm" target="_blank" rel="noreferrer" className="button-secondary"><Github size={16}/> GITHUB</a>
              <a href="#contact" className="button-secondary">LET&apos;S CONNECT <ArrowUpRight size={16}/></a>
            </div>
          </div>
        </section>

        <section id="skills" className="container section skills">
          <SectionHeading number="03 / TECHNICAL TOOLKIT" title={<>WHAT I <span>BUILD WITH.</span></>} text="The technologies and gameplay concepts I am actively developing." />

          <div className="skill-cards">
            <Skill icon={<Gamepad2/>} title="Unity & Gameplay" text="Unity 3D, URP, Input System, Cinemachine, gameplay loops and prototyping." />
            <Skill icon={<Code2/>} title="C# Programming" text="OOP, classes, methods, properties, events, state machines and reusable systems." />
            <Skill icon={<Cpu/>} title="Game Systems & AI" text="Enemy AI, NavMesh, health systems, object pooling, managers and UI communication." />
            <Skill icon={<Layers3/>} title="Development Tools" text="Git/GitHub, Blender/Maya, Mixamo, Quixel and Unreal Engine/C++ exploration." />
          </div>

          <div className="skill-table">
            {[
              ["Unity", "Gameplay, 3D, URP, Input System, NavMesh", "PRIMARY"],
              ["C#", "Gameplay programming, OOP, systems", "PRIMARY"],
              ["C++", "Programming foundation / Unreal exploration", "LEARNING"],
              ["Game AI", "Enemy AI, NavMesh, state machines", "FOCUS"],
              ["Git / GitHub", "Version control and portfolio workflow", "WORKFLOW"],
              ["Blender / 3D", "Basic asset and environment workflow", "SUPPORT"]
            ].map(([name,desc,status]) => (
              <div className="skill-line" key={name}>
                <b>{name}</b><span>{desc}</span><em className="mono">{status}</em>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="container resume-section section">
          <div className="resume-card">
            <div>
              <div className="mono section-label">04 / RESUME</div>
              <h2>READY TO <span>BUILD.</span></h2>
              <p>A concise snapshot of my game-development education, technical skills and selected projects.</p>
            </div>
            <div className="resume-actions">
              <a href="/resume.pdf" download className="button-primary"><Download size={17}/> DOWNLOAD RESUME</a>
              <a href="/resume.pdf" target="_blank" className="button-secondary"><ExternalLink size={17}/> VIEW PDF</a>
            </div>
          </div>

          <div className="resume-facts">
            <div><span className="mono">EDUCATION</span><b>BCA — Game Development</b><small>Seamedu, Pune</small></div>
            <div><span className="mono">SPECIALIZATION</span><b>Game Programming</b><small>Unity · C# · Gameplay Systems</small></div>
            <div><span className="mono">CURRENT FOCUS</span><b>Building polished playable projects</b><small>Portfolio · GitHub · Itch.io · internships</small></div>
          </div>
        </section>

        <section className="container terminal-section">
          <div className="terminal">
            <div className="terminal-bar mono"><span>himanshu@portfolio:~</span><span>● ● ●</span></div>
            <div className="terminal-body mono">
              <p><span>$</span> whoami</p><p className="out">game_developer.exe</p>
              <p><span>$</span> cat focus.txt</p><p className="out">Gameplay programming<br/>Interactive systems<br/>Unity + C#</p>
              <p><span>$</span> status</p><p className="success">OPEN TO INTERNSHIPS · JUNIOR GAME PROGRAMMING ROLES</p>
              <p><span>$</span> <i className="cursor">_</i></p>
            </div>
          </div>
        </section>

        <section id="contact" className="container contact section">
          <div className="mono section-label">05 / CONTACT</div>
          <h2>LET&apos;S MAKE<br/><span>SOMETHING PLAYABLE.</span></h2>
          <p>For internships, junior game-programming opportunities, collaborations or game projects, get in touch.</p>
          <div className="contact-buttons">
            <a href="mailto:your.email@example.com" className="button-primary"><Mail size={17}/> EMAIL ME</a>
            <a href="https://github.com/HimanshuMeshrm" target="_blank" rel="noreferrer" className="button-secondary"><Github size={17}/> GITHUB</a>
            <a href="#" className="button-secondary"><Linkedin size={17}/> LINKEDIN</a>
            <a href="/resume.pdf" className="button-secondary"><Download size={17}/> RESUME</a>
          </div>
        </section>
      </main>

      <footer className="container footer">
        <span>© 2026 HIMANSHU</span>
        <span className="mono">UNITY · C# · GAMEPLAY</span>
        <Link href="#top">BACK TO TOP ↑</Link>
      </footer>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}

      <style jsx>{`
        .nav{height:78px;display:flex;align-items:center;justify-content:space-between;position:relative;z-index:60}
        .brand{display:flex;align-items:center;gap:10px;font-weight:800;letter-spacing:.1em}
        .brand-mark{width:31px;height:31px;border-radius:8px;display:grid;place-items:center;background:var(--acid);color:#07080c}
        .nav-links{display:flex;gap:25px;font-size:13px;color:var(--muted)}
        .nav-links a:hover,.nav-cta:hover{color:var(--text)}
        .nav-cta{display:flex;align-items:center;gap:5px;border:1px solid var(--line);padding:10px 14px;border-radius:8px;font-size:12px}
        .mobile-menu-btn{display:none;background:none;border:0;color:white}
        .mobile-menu-panel{display:none}
        .hero{min-height:calc(100vh - 78px);display:grid;grid-template-columns:1.05fr .95fr;align-items:center;gap:40px;padding:50px 0 80px}
        .kicker{font-size:11px;letter-spacing:.12em;color:var(--acid);display:flex;gap:8px;align-items:center}
        .pulse-dot{width:7px;height:7px;border-radius:50%;background:var(--acid)}
        .hero h1{font-size:clamp(55px,7.7vw,106px);line-height:.86;letter-spacing:-.07em;margin:22px 0 28px}
        .hero h1 span,h2 span{color:var(--acid)}
        .hero-copy{font-size:18px;line-height:1.65;color:var(--muted);max-width:600px}
        .hero-buttons,.about-actions,.contact-buttons{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
        .button-primary,.button-secondary{display:inline-flex;align-items:center;justify-content:center;gap:12px;padding:14px 17px;border-radius:9px;font-size:12px}
        .button-primary{background:var(--acid);color:#07080c;font-weight:700}
        .button-secondary{border:1px solid var(--line);background:rgba(255,255,255,.015)}
        .hero-stats{display:flex;gap:30px;margin-top:52px}
        .hero-stats div{display:grid;gap:4px}.hero-stats b{font-size:14px}.hero-stats span{font-size:9px;color:var(--muted);font-family:"Courier New",monospace}
        .hero-art{height:560px;border:1px solid var(--line);border-radius:18px;position:relative;overflow:hidden;display:grid;place-items:center}
        .orb{position:absolute;border-radius:50%;filter:blur(2px)}.orb-one{width:280px;height:280px;right:0;top:20px;background:radial-gradient(circle,rgba(139,108,255,.30),transparent 65%)}.orb-two{width:230px;height:230px;left:-20px;bottom:-30px;background:radial-gradient(circle,rgba(201,255,59,.18),transparent 65%)}
        .code-card{width:82%;background:rgba(7,8,12,.9);border:1px solid var(--line);border-radius:14px;padding:20px;position:relative;z-index:2;transform:rotate(2deg);box-shadow:0 30px 80px rgba(0,0,0,.45)}
        .code-head,.terminal-bar{font-size:10px;color:#74798a;border-bottom:1px solid var(--line);padding-bottom:14px;display:flex;justify-content:space-between}
        .code-card pre{font-size:12px;line-height:1.9;color:#d9dbe4;overflow:auto;margin:18px 0}
        .code-status{font-size:10px;color:#858998}.code-status span{display:inline-block;width:6px;height:6px;border-radius:50%;background:var(--acid);margin-right:7px}
        .hero-tag{position:absolute;font-size:10px;border:1px solid var(--line);padding:9px 11px;background:#0c0e14;z-index:3}.tag-left{top:35px;left:25px}.tag-right{bottom:35px;right:25px}
        .marquee{border-block:1px solid var(--line);padding:18px 0;overflow:hidden;white-space:nowrap;font-size:11px;color:#737887;letter-spacing:.1em}
        .marquee-track{display:inline-block}.marquee i{font-style:normal;color:var(--acid);margin:0 25px}
        .section{padding:125px 0}
        .section-label{font-size:11px;color:var(--muted);letter-spacing:.08em}
        .section-head{display:flex;justify-content:space-between;align-items:end;gap:40px;margin-bottom:35px}
        .section-head h2,.about h2,.resume-card h2{font-size:clamp(45px,6vw,76px);line-height:.92;letter-spacing:-.06em;margin:14px 0}
        .section-head p{max-width:390px;color:var(--muted);font-size:14px;line-height:1.65}
        .filter-row{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:25px}.filter{border:1px solid var(--line);background:transparent;color:var(--muted);padding:9px 13px;border-radius:100px;font:11px "Courier New",monospace;cursor:pointer}.filter.active{background:var(--acid);border-color:var(--acid);color:#07080c}
        .project-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}
        .project-card{background:var(--panel);border:1px solid var(--line);border-radius:15px;overflow:hidden;transition:transform .25s,border-color .25s}.project-card:hover{transform:translateY(-5px);border-color:rgba(201,255,59,.35)}
        .project-card.featured{grid-column:span 2;display:grid;grid-template-columns:1.2fr .8fr}
        .project-art{min-height:280px;position:relative;display:grid;place-items:center;overflow:hidden}.project-card.featured .project-art{min-height:390px}
        .project-icon{font-size:170px;font-weight:800;opacity:.12}.project-art-label{position:absolute;top:20px;left:20px;font-size:10px;letter-spacing:.12em}.project-status{position:absolute;bottom:20px;left:20px;font-size:9px;color:#8a8f9e}
        .project-info{padding:25px}.project-top{display:flex;justify-content:space-between;color:#727687;font-size:10px}.project-info h3{font-size:30px;letter-spacing:-.04em;margin:18px 0 10px}.project-info p{color:var(--muted);font-size:13px;line-height:1.6}.tags{display:flex;gap:6px;flex-wrap:wrap;margin-top:18px}.tags span{font-size:9px;padding:6px 8px;background:rgba(255,255,255,.04);border:1px solid var(--line);border-radius:100px;color:#a6aab7}.case-link{border:0;background:none;color:var(--acid);padding:0;margin-top:24px;font-size:11px;cursor:pointer;display:flex;align-items:center;gap:7px}
        .about{display:grid;grid-template-columns:.8fr 1.2fr;gap:100px;align-items:center;padding-top:60px}
        .about-photo{height:520px;border:1px solid var(--line);border-radius:16px;display:grid;place-items:center;background-color:#0c0f15;position:relative}
        .photo-letter{font-size:220px;font-weight:800;line-height:.8;color:rgba(255,255,255,.07)}.photo-note{position:absolute;bottom:22px;font-size:10px;color:#6d7180}
        .experience-card{position:absolute;right:-30px;bottom:30px;background:var(--acid);color:#07080c;padding:18px 20px;border-radius:10px;display:flex;gap:18px;align-items:center}.experience-card b{font-size:17px;line-height:1.1}.experience-card span{font-size:9px}
        .about p{color:var(--muted);line-height:1.85;font-size:15px}.quote{border-left:2px solid var(--acid);padding:8px 0 8px 18px;margin:28px 0;color:#dfe1e7}
        .skills{padding-top:70px}.skill-cards{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:55px}.skill-card{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:22px}.skill-card svg{color:var(--acid)}.skill-card h3{margin:18px 0 9px;font-size:18px}.skill-card p{margin:0;color:var(--muted);font-size:12px;line-height:1.65}
        .skill-table{border-top:1px solid var(--line)}.skill-line{display:grid;grid-template-columns:180px 1fr 100px;gap:20px;padding:20px 0;border-bottom:1px solid var(--line);align-items:center}.skill-line span{color:var(--muted);font-size:12px}.skill-line em{font-style:normal;color:var(--acid);font-size:9px;text-align:right}
        .resume-section{padding-top:40px}.resume-card{border:1px solid var(--line);border-radius:16px;padding:38px;display:flex;justify-content:space-between;align-items:center;gap:40px;background:linear-gradient(135deg,rgba(201,255,59,.06),rgba(139,108,255,.04))}.resume-card p{color:var(--muted);line-height:1.7;max-width:570px}.resume-actions{display:flex;gap:9px;flex-wrap:wrap}.resume-facts{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line);margin-top:18px;border:1px solid var(--line)}.resume-facts div{background:var(--panel);padding:22px;display:grid;gap:7px}.resume-facts span{color:var(--muted);font-size:9px}.resume-facts b{font-size:15px}.resume-facts small{color:#6f7483;font-size:11px}
        .terminal-section{padding-bottom:125px}.terminal{max-width:820px;margin:auto;background:#0b0d12;border:1px solid var(--line);border-radius:12px;overflow:hidden}.terminal-body{padding:24px;font-size:12px;line-height:1.8;min-height:250px}.terminal-body p{margin:0 0 5px}.terminal-body p span{color:var(--acid)}.out{color:#8e94a5;margin-left:15px}.success{color:var(--acid)!important;margin-left:15px}.cursor{font-style:normal}
        .contact{text-align:center;padding-bottom:150px}.contact h2{font-size:clamp(62px,9.5vw,120px);line-height:.88;letter-spacing:-.07em;margin:18px 0}.contact p{max-width:540px;margin:25px auto;color:var(--muted);line-height:1.7}.contact-buttons{justify-content:center}
        .footer{border-top:1px solid var(--line);padding:25px 0;display:flex;justify-content:space-between;gap:15px;flex-wrap:wrap;color:#666b79;font-size:10px}
        .modal-backdrop{position:fixed;inset:0;z-index:90;background:rgba(0,0,0,.80);backdrop-filter:blur(8px);display:grid;place-items:center;padding:20px}.modal{width:min(820px,100%);max-height:90vh;overflow:auto;background:var(--panel);border:1px solid var(--line);border-radius:16px;padding:34px;position:relative}.modal-close{position:absolute;right:15px;top:12px;background:none;border:0;color:white;cursor:pointer}.modal h3{font-size:clamp(40px,7vw,65px);letter-spacing:-.06em;margin:12px 0}.modal-media{height:250px;border:1px solid var(--line);border-radius:12px;display:grid;place-items:center;text-align:center;margin:25px 0}.modal p{color:var(--muted);line-height:1.8}.modal-features{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.modal-feature{border:1px solid var(--line);padding:12px;border-radius:8px;font-size:12px}.modal-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:25px}
        @media(max-width:950px){.skill-cards{grid-template-columns:repeat(2,1fr)}.about{grid-template-columns:1fr;gap:50px}.hero{grid-template-columns:1fr}.hero-art{height:450px}.resume-card{display:block}.resume-actions{margin-top:25px}}
        @media(max-width:800px){.nav-links,.nav-cta{display:none}.mobile-menu-btn{display:block}.mobile-menu-panel{display:grid;gap:18px;position:fixed;top:70px;left:16px;right:16px;z-index:55;padding:22px;background:var(--panel);border:1px solid var(--line);border-radius:12px;text-transform:uppercase;font-size:12px}.container{width:calc(100% - 32px)}.project-grid{grid-template-columns:1fr}.project-card.featured{grid-column:auto;display:block}.project-card.featured .project-art{min-height:280px}.skill-line{grid-template-columns:120px 1fr}.skill-line em{display:none}.resume-facts{grid-template-columns:1fr}.section{padding:90px 0}}
        @media(max-width:600px){.skill-cards{grid-template-columns:1fr}.hero h1{font-size:58px}.hero-stats{gap:18px;flex-wrap:wrap}.hero-art{height:390px}.code-card{width:92%}.about-photo{height:420px}.experience-card{right:10px}.modal-features{grid-template-columns:1fr}}
      `}</style>
    </>
  );
}

function SectionHeading({number,title,text}:{number:string;title:React.ReactNode;text:string}) {
  return (
    <div className="section-head">
      <div><div className="mono section-label">{number}</div><h2>{title}</h2></div>
      <p>{text}</p>
    </div>
  );
}

function Skill({icon,title,text}:{icon:React.ReactNode;title:string;text:string}) {
  return <div className="skill-card"><div>{icon}</div><h3>{title}</h3><p>{text}</p></div>;
}

function ProjectCard({project,featured,onOpen}:{project:Project;featured:boolean;onOpen:()=>void}) {
  const background =
    project.accent === "violet" ? "radial-gradient(circle at 60% 55%,rgba(139,108,255,.28),transparent 25%),linear-gradient(135deg,#171924,#08090d)" :
    project.accent === "cyan" ? "radial-gradient(circle at 40% 45%,rgba(102,217,255,.22),transparent 25%),linear-gradient(135deg,#0e1821,#10131b)" :
    project.accent === "orange" ? "radial-gradient(circle at 50% 50%,rgba(255,145,80,.20),transparent 25%),linear-gradient(135deg,#1b1411,#0d0e12)" :
    "radial-gradient(circle at 65% 50%,rgba(201,255,59,.20),transparent 25%),linear-gradient(135deg,#171a24,#08090d)";

  return (
    <article className={`project-card ${featured ? "featured" : ""}`}>
      <div className="project-art" style={{background}}>
        <span className="mono project-art-label">{project.title.toUpperCase()}</span>
        <span className="project-icon">{project.icon}</span>
        <span className="mono project-status">{project.status}</span>
      </div>
      <div className="project-info">
        <div className="mono project-top"><span>{project.year}</span><span>{project.type}</span></div>
        <h3>{project.title}</h3>
        <p>{project.short}</p>
        <div className="tags">{project.tags.map((tag)=><span key={tag}>{tag}</span>)}</div>
        <div style={{display:"flex",gap:18,alignItems:"center",flexWrap:"wrap"}}>
          <button className="case-link" onClick={onOpen}>QUICK VIEW <ChevronRight size={15}/></button>
          <Link className="case-link" href={`/projects/${project.slug}`}>FULL CASE STUDY <ArrowUpRight size={14}/></Link>
        </div>
      </div>
    </article>
  );
}

function ProjectModal({project,onClose}:{project:Project;onClose:()=>void}) {
  const background =
    project.accent === "violet" ? "radial-gradient(circle,rgba(139,108,255,.24),transparent 45%),#090a0f" :
    project.accent === "cyan" ? "radial-gradient(circle,rgba(102,217,255,.22),transparent 45%),#090a0f" :
    project.accent === "orange" ? "radial-gradient(circle,rgba(255,145,80,.20),transparent 45%),#090a0f" :
    "radial-gradient(circle,rgba(201,255,59,.20),transparent 45%),#090a0f";

  return (
    <div className="modal-backdrop" onMouseDown={(e)=>{if(e.currentTarget===e.target)onClose()}}>
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="Close"><X/></button>
        <div className="mono section-label">{project.type} · {project.year}</div>
        <h3>{project.title}</h3>
        <div className="modal-media" style={{background}}>
          <span className="mono" style={{fontSize:11,color:"#707586"}}>ADD GAMEPLAY VIDEO / GIF / SCREENSHOT</span>
        </div>
        <p>{project.overview}</p>
        <h4>Systems &amp; features</h4>
        <div className="modal-features">{project.systems.map((x)=><div className="modal-feature" key={x}><Sparkles size={14} style={{verticalAlign:"middle",marginRight:7,color:"var(--acid)"}}/>{x}</div>)}</div>
        <div className="modal-actions">
          <Link href={`/projects/${project.slug}`} className="button-primary" onClick={onClose}>FULL CASE STUDY <ArrowUpRight size={15}/></Link>
          <a href={project.github} className="button-secondary"><Github size={15}/> GITHUB</a>
          <a href={project.demo} className="button-secondary"><Play size={15}/> PLAY / DEMO</a>
        </div>
      </div>
    </div>
  );
}
