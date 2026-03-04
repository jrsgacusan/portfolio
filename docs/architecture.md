# Architecture

## Overview

Single-page portfolio app built with React, Vite, and Tailwind CSS. No router; sections are in-page anchors (`#home`, `#about`, `#experience`, `#projects`, `#contact`).

## Folder structure

| Path | Purpose |
|------|--------|
| `src/components/` | **Agnostic, reusable UI only.** Card, Modal, Reveal, Chip, ProjectCard. No app-specific data or business logic. |
| `src/sections/` | **App-specific page sections.** Header, Hero, About, Timeline, Projects, Contact, Footer. These use `src/data/`, `src/contexts/`, and `src/utils/`. |
| `src/contexts/` | React context (e.g. ThemeContext). |
| `src/data/` | Static content (personalData, timelineData). |
| `src/utils/` | Pure helpers (e.g. email sending). |
| `src/assets/` | Images and static assets. |

## Data flow

- **Theme:** `ThemeProvider` in `main.tsx`; sections and components use `useTheme()`.
- **Scroll state:** Lifted in `App.tsx` (scroll progress, isScrolled); passed to `Header` for styling.
- **Modal state:** Projects section owns `activeProject`; `Modal` and `ProjectCard` are controlled via props.
- **Contact form:** Local state in `Contact`; `sendEmail()` from `utils/email` for submission.

## Conventions

- **Mobile-first:** All components and sections are optimized for small viewports first; use responsive breakpoints (`sm:`, `md:`, `lg:`) to enhance for larger screens. See `.cursor/rules/components.mdc` for details.
- **Components** in `src/components/` accept all data via props; no direct imports from `data/` or app-specific modules.
- **Sections** in `src/sections/` may import from `data/`, `contexts/`, and `utils/`.
- **Landmarks:** One `<header>`, one `<main id="main">`, one `<footer>`. Sections use `<section>` with `id` and `aria-labelledby` for headings.
- **Headings:** Single `<h1>` on the page (Hero); sections use `<h2>`, then `<h3>` as needed.

## SEO & a11y

- Skip link in `App.tsx` targets `#main`.
- Semantic HTML and ARIA where needed (dialog, form status, live regions).
- Focus styles on interactive elements; modal restores focus on close.
- See `.cursor/rules/components.mdc` for WCAG and SEO expectations.
