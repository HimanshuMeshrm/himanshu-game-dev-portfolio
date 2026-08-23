# Himanshu — Next.js Game Developer Portfolio

This is the corrected Vercel-ready version.

## Stack
Next.js 15 + React 19 + TypeScript + Tailwind CSS v4 + Lucide React.

## Important fix
The previous build error came from the JSX code sample in `components/Portfolio.tsx`. This version uses a normal string array for the code-editor preview, so the JSX compiler does not parse the sample C# syntax.

`app/page.tsx` uses the direct relative import:
`../components/Portfolio`

## Deploy
The repository root must contain:
- app/
- components/
- public/
- package.json
- next.config.ts
- tsconfig.json
- postcss.config.mjs

After pushing this version to GitHub, Vercel should build it as a Next.js project.

## Customize before final publishing
Replace:
- your.email@example.com
- GitHub `#`
- LinkedIn `#`
- `/resume.pdf`
- Project demo/GitHub links
- Project screenshots/video placeholders
- Your portrait
- Any project descriptions that need correction
