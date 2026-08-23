export type Project = {
  slug: string;
  title: string;
  type: string;
  year: string;
  status: string;
  tags: string[];
  accent: "acid" | "violet" | "cyan" | "orange";
  icon: string;
  short: string;
  overview: string;
  role: string;
  systems: string[];
  challenges: string[];
  learnings: string[];
  demo: string;
  github: string;
  mediaLabel: string;
};

export const projects: Project[] = [
  {
    slug: "chronoshift",
    title: "ChronoShift",
    type: "3D GAME",
    year: "2026",
    status: "Prototype / In Development",
    tags: ["Unity", "C#", "Gameplay", "Prototype"],
    accent: "acid",
    icon: "◒",
    short: "A time-bending game concept built around movement, timing and reactive gameplay systems.",
    overview: "ChronoShift is a gameplay-focused prototype exploring a strong time-control mechanic. The goal is to make time manipulation feel like a physical part of movement, level flow and player decision-making.",
    role: "Gameplay programming, Unity implementation, mechanic prototyping and systems design.",
    systems: ["Player movement", "Time-control mechanic", "Reactive gameplay logic", "State handling", "Level-flow experiments"],
    challenges: ["Keeping the mechanic readable", "Making time control affect gameplay rather than just visuals", "Balancing a powerful player ability"],
    learnings: ["Design mechanics around one clear player verb", "Separate gameplay state from presentation", "Prototype the core loop before adding content"],
    demo: "#",
    github: "#",
    mediaLabel: "Add ChronoShift gameplay video / GIF / screenshots"
  },
  {
    slug: "freeze-run",
    title: "Freeze Run",
    type: "MOBILE GAME",
    year: "2026",
    status: "Prototype",
    tags: ["Unity", "C#", "Mobile", "Gameplay"],
    accent: "cyan",
    icon: "❄",
    short: "An endless runner where holding the screen freezes time and creates a risk-versus-reward loop.",
    overview: "Freeze Run is a mobile endless runner built around one simple interaction: hold to freeze the world, release to continue. Energy management makes the mechanic strategic instead of unlimited.",
    role: "Gameplay programming, mobile input, game-loop design and UI/system prototyping.",
    systems: ["Hold-to-freeze input", "Energy system", "Endless runner loop", "Obstacle timing", "Mobile UI"],
    challenges: ["Making the control feel instant", "Balancing energy drain", "Keeping the loop understandable on a small screen"],
    learnings: ["Simple controls can create deep decisions", "Feedback is critical for mobile mechanics", "Resource systems can reinforce a core mechanic"],
    demo: "#",
    github: "#",
    mediaLabel: "Add Freeze Run gameplay video / GIF / screenshots"
  },
  {
    slug: "deepcore-dive",
    title: "DeepCore Dive",
    type: "ROGUELITE",
    year: "2026",
    status: "Concept / Prototype",
    tags: ["Unity", "3D", "Procedural", "Prototype"],
    accent: "violet",
    icon: "⌁",
    short: "A roguelite mining concept focused on underground exploration, resources and procedural spaces.",
    overview: "DeepCore Dive explores replayable underground exploration through procedural spaces, resource collection and progression. The portfolio version focuses on the systems and design thinking behind the prototype.",
    role: "Game concept development, Unity prototyping and systems planning.",
    systems: ["3D exploration", "Procedural environment direction", "Resource collection", "Progression concepts", "Roguelite loop"],
    challenges: ["Designing repeatable spaces", "Creating meaningful resource choices", "Keeping procedural content readable"],
    learnings: ["Procedural systems need strong design rules", "Exploration benefits from clear player goals", "Progression should support the core fantasy"],
    demo: "#",
    github: "#",
    mediaLabel: "Add DeepCore Dive gameplay video / GIF / screenshots"
  },
  {
    slug: "ai-crop-simulator",
    title: "AI Crop Simulator",
    type: "EDUCATIONAL SIMULATION",
    year: "2026",
    status: "Educational Prototype",
    tags: ["Unity", "Simulation", "Education", "AI Concept"],
    accent: "acid",
    icon: "⌘",
    short: "An educational simulation concept showing students how AI can support farming decisions.",
    overview: "AI Crop Simulator is designed primarily as a learning experience. It uses a simple simulation loop to help students understand how AI can assist with farming decisions and resource management.",
    role: "Unity development, interaction design, simulation logic and educational presentation.",
    systems: ["Simulation loop", "Decision system", "Educational UI", "Resource concepts", "AI-assisted learning concept"],
    challenges: ["Keeping the simulation simple for students", "Explaining AI without overwhelming the player", "Connecting decisions to visible outcomes"],
    learnings: ["Educational games need clarity first", "Visual feedback can explain complex ideas", "A simulation should have an understandable cause-and-effect loop"],
    demo: "#",
    github: "#",
    mediaLabel: "Add AI Crop Simulator screenshots / demo video"
  },
  {
    slug: "fruit-collector",
    title: "Fruit Collector",
    type: "MINI GAME",
    year: "2025",
    status: "Prototype",
    tags: ["Unity", "3D", "Prototype"],
    accent: "orange",
    icon: "✦",
    short: "A compact Unity gameplay prototype for practicing interaction, scoring and game-loop fundamentals.",
    overview: "Fruit Collector is a small playable experiment focused on the fundamentals of interaction, scoring, feedback and a complete gameplay loop.",
    role: "Unity implementation and gameplay scripting.",
    systems: ["Player interaction", "Collectibles", "Score system", "Game loop", "Feedback"],
    challenges: ["Making the loop feel complete with few mechanics", "Giving clear feedback to the player"],
    learnings: ["Small projects are useful for practicing complete loops", "Game feel comes from feedback, not just mechanics"],
    demo: "#",
    github: "#",
    mediaLabel: "Add Fruit Collector gameplay screenshot"
  },
  {
    slug: "floor-is-lava",
    title: "Floor is Lava",
    type: "3D MINI GAME",
    year: "2025",
    status: "Prototype",
    tags: ["Unity", "3D", "Prototype"],
    accent: "violet",
    icon: "△",
    short: "A Unity 3D prototype focused on movement, hazards and quick gameplay iteration.",
    overview: "Floor is Lava is a compact Unity experiment used to practice movement, collision, hazards and level composition.",
    role: "Unity implementation, movement and gameplay scripting.",
    systems: ["3D movement", "Hazards", "Collision logic", "Level prototype"],
    challenges: ["Making hazards readable", "Building a playable level quickly"],
    learnings: ["Rapid prototyping exposes gameplay problems early", "Simple hazards can create interesting movement decisions"],
    demo: "#",
    github: "#",
    mediaLabel: "Add Floor is Lava gameplay screenshot"
  }
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
