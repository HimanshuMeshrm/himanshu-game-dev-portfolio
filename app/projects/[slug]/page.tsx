import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github, Play } from "lucide-react";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const mediaBg =
    project.accent === "violet"
      ? "radial-gradient(circle,rgba(139,108,255,.25),transparent 45%),#090a0f"
      : project.accent === "cyan"
        ? "radial-gradient(circle,rgba(102,217,255,.23),transparent 45%),#090a0f"
        : project.accent === "orange"
          ? "radial-gradient(circle,rgba(255,145,80,.20),transparent 45%),#090a0f"
          : "radial-gradient(circle,rgba(201,255,59,.20),transparent 45%),#090a0f";

  return (
    <main>
      <header className="container project-header">
        <Link href="/" className="mono back-link"><ArrowLeft size={15}/> BACK TO PORTFOLIO</Link>
        <span className="mono">PROJECT / {project.year}</span>
      </header>

      <section className="container project-hero">
        <div>
          <div className="mono project-kicker">{project.type} · {project.status}</div>
          <h1>{project.title}</h1>
          <p>{project.short}</p>
          <div className="tag-row">
            {project.tags.map((tag) => <span key={tag} className="mono">{tag}</span>)}
          </div>
        </div>
        <div className="project-symbol" style={{ background: mediaBg }}>
          <span>{project.icon}</span>
        </div>
      </section>

      <section className="container case-media" style={{ background: mediaBg }}>
        <div className="mono">ADD YOUR GAMEPLAY VIDEO / GIF / SCREENSHOTS HERE</div>
        <small>{project.mediaLabel}</small>
      </section>

      <section className="container case-grid">
        <div>
          <div className="mono section-label">01 / OVERVIEW</div>
          <h2>The idea</h2>
          <p>{project.overview}</p>
          <h3>My role</h3>
          <p>{project.role}</p>
        </div>
        <div className="case-side">
          <div className="mono section-label">SYSTEMS</div>
          <ul>{project.systems.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
      </section>

      <section className="container case-grid">
        <div>
          <div className="mono section-label">02 / CHALLENGES</div>
          <h2>What I had to solve</h2>
          <ul className="big-list">{project.challenges.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
        <div>
          <div className="mono section-label">03 / LEARNINGS</div>
          <h2>What I learned</h2>
          <ul className="big-list">{project.learnings.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
      </section>

      <section className="container case-actions">
        <a href={project.github} className="action-primary"><Github size={17}/> GITHUB</a>
        <a href={project.demo} className="action-secondary"><Play size={17}/> PLAY / DEMO</a>
        <Link href="/#games" className="action-secondary"><ArrowLeft size={17}/> ALL PROJECTS</Link>
      </section>

      <footer className="container project-footer">
        <span>© 2026 HIMANSHU</span>
        <Link href="/">HOME ↗</Link>
      </footer>

      <style jsx>{`
        .project-header{height:88px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--line);font-size:10px;color:var(--muted)}
        .back-link{display:flex;align-items:center;gap:8px;color:var(--text)}
        .project-hero{padding:100px 0 80px;display:grid;grid-template-columns:1.1fr .9fr;gap:70px;align-items:center}
        .project-kicker,.section-label{font-size:10px;color:var(--acid);letter-spacing:.12em}
        .project-hero h1{font-size:clamp(65px,10vw,130px);line-height:.85;letter-spacing:-.07em;margin:18px 0}
        .project-hero p{max-width:650px;color:var(--muted);font-size:18px;line-height:1.7}
        .tag-row{display:flex;gap:7px;flex-wrap:wrap;margin-top:25px}
        .tag-row span{font-size:10px;color:#a6aab7;border:1px solid var(--line);padding:7px 9px;border-radius:100px}
        .project-symbol{height:430px;border:1px solid var(--line);border-radius:18px;display:grid;place-items:center;overflow:hidden}
        .project-symbol span{font-size:250px;font-weight:800;opacity:.13}
        .case-media{height:430px;border:1px solid var(--line);border-radius:18px;display:grid;place-items:center;text-align:center;margin-bottom:110px}
        .case-media .mono{font-size:12px;color:#8c91a0}
        .case-media small{position:absolute;margin-top:100px;color:#666b79}
        .case-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:100px;padding-bottom:110px}
        .case-grid h2{font-size:clamp(38px,5vw,62px);letter-spacing:-.05em;margin:14px 0 20px}
        .case-grid h3{margin-top:35px}
        .case-grid p{color:var(--muted);line-height:1.85;font-size:15px}
        .case-side{border:1px solid var(--line);border-radius:14px;padding:25px;background:rgba(255,255,255,.02);align-self:start}
        .case-side ul,.big-list{padding-left:20px;color:var(--muted);line-height:2}
        .big-list{font-size:15px}
        .case-actions{display:flex;gap:10px;flex-wrap:wrap;padding-bottom:120px}
        .action-primary,.action-secondary{display:inline-flex;align-items:center;gap:10px;padding:13px 16px;border-radius:8px;font-size:12px}
        .action-primary{background:var(--acid);color:#07080c;font-weight:700}
        .action-secondary{border:1px solid var(--line)}
        .project-footer{border-top:1px solid var(--line);padding:25px 0;color:#666b79;font-size:10px;display:flex;justify-content:space-between}
        @media(max-width:850px){.project-hero,.case-grid{grid-template-columns:1fr;gap:40px}.project-symbol{height:300px}.case-media{height:300px;margin-bottom:80px}.project-hero{padding:70px 0 60px}}
      `}</style>
    </main>
  );
}
