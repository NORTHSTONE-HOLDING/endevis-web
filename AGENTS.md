# endevis-web

Premium multilingual corporate marketing website for ENDEVIS, built with Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Cursor Cloud specific instructions

Single Next.js app; no database, backend, or external services are required. Standard commands are documented in `README.md` (`npm run dev`, `npm run build`, `npm run start`, `npm run lint`).

Non-obvious notes for running/testing:

- Node 22 and npm 10 (preinstalled) work fine even though Next 16 only requires Node 18.18+.
- Dev server runs on `http://localhost:3000`. The root path `/` returns a 307 redirect to a locale prefix (`/en`, `/cs`, `/sk`, `/pl`) via `src/middleware.ts` based on `Accept-Language`; always test a locale-prefixed URL (e.g. `/en`), not `/`.
- The build/dev logs print a deprecation warning that the `middleware` file convention should be renamed to `proxy`, and an anonymous telemetry notice. Both are harmless and not errors.
- No test runner is configured (`npm test` does not exist). Use `npm run lint` plus a manual browser smoke test (load `/en`, switch language via navbar, toggle dark/light theme) to validate changes.
- No `.env` files are needed; the code does not read `process.env`.
