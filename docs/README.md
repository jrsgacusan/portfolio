# Project documentation

This folder holds **project-level context** so humans and AI can make consistent, informed decisions when changing code.

## What to put here

| Document | Purpose |
|----------|--------|
| **Architecture** | How the app is structured (routing, state, data flow, key folders). |
| **Decisions** | Important choices (libraries, patterns, APIs) and why they were made. |
| **APIs & env** | Endpoints, env vars, shared types, third-party contracts. |
| **Conventions** | Naming, file layout, patterns not already in Cursor rules. |

## Files

- **architecture.md** – App structure, folder roles, data flow, and conventions. Start here when changing layout or adding features.

## File ideas

- `decisions.md` or `adr/` – Decision records or “why we did X” notes.
- `api.md` or `integrations.md` – External APIs, env, and contracts.

Add and edit these over time. The AI is instructed to read `docs/` when making code changes so it can align with this context.
