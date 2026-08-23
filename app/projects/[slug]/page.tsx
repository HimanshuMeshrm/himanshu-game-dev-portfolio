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


    </main>
  );
}
