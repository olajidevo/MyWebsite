# MyWebsite
# Portfolio: Victor Olajide

Personal portfolio site built with Next.js (App Router), TypeScript, and Tailwind CSS. Features a galaxy theme with a dark/light toggle, an animated starfield and nebula background, a drifting profile photo, and a shooting-star cursor trail.

Live at [olajidevo.netlify.app](https://olajidevo.netlify.app).

## Structure

- `src/app/page.tsx`: home page with hero, project grid, skills, about, and contact sections
- `src/app/work/[slug]/page.tsx`: individual case study pages for each project
- `src/data/projects.ts`: project metadata shown on the home page cards and reused across case studies
- `src/data/skills.ts`: categorized skills shown in the Skills section
- `src/components/`: Nav, Footer, Box, ProjectCard, TechTags, CaseStudyHeader, CaseStudyLinks, ThemeToggle, Starfield, ProfilePhoto, CursorTrail
- `public/`: resume.pdf and profile photo

