# Freres Global Systems — PRD

## Problem Statement
User purchased freresglobal.com. They are an IT solutions provider and supplier of laptops, workstations, servers, desktops and other storage and computer systems and parts. They asked for an award-worthy (Awwwards Site-of-the-Day level) marketing site built from scratch with kinetic hero, numbered manifesto chapters, editorial marquee, product photography with spotlights, framer-motion scroll reveals and lenis smooth scrolling.

## Personas
- **CIO / IT Director** — evaluating a new hardware supplier for global fleet rollouts.
- **Procurement Manager** — spec-driven buyer looking to submit a quote request.
- **SMB Founder** — non-technical buyer wanting a trustworthy partner.

## Architecture
- **Frontend**: React 19, React Router 7, TailwindCSS, shadcn/ui components, framer-motion for animations, lenis for smooth scroll, react-fast-marquee for the editorial ticker, lucide-react icons, sonner for toasts.
- **Backend**: FastAPI + Motor (MongoDB async), Pydantic v2 models with UUID ids + ISO datetimes.
- **DB**: MongoDB (single collection `inquiries`).

## Core Requirements (static)
- Award-worthy dark editorial aesthetic (Outfit display + IBM Plex Sans body + IBM Plex Mono labels).
- Masked line-by-line hero reveal on load.
- Slow editorial marquee.
- Four numbered manifesto chapters.
- Six product category cards (asymmetric bento) with spotlight hover and grayscale→color reveal.
- Services grid, partners row, stats row.
- Contact form persisting inquiries to MongoDB.
- Global lenis smooth scroll + anchor click interception.

## Implemented (2026-08-03)
- Hero with masked reveal, animated status pill, parallax orbs, background image.
- Slow editorial marquee.
- Four-chapter numbered manifesto.
- Six-card asymmetric product bento with real product photography and spotlight hover.
- Six-service grid with lucide icons.
- Partners row (10 tier-1 OEMs) + big-number stats.
- Contact section with sonner toast success and inquiries persisted to MongoDB.
- Giant editorial footer sign-off.
- Backend endpoints: GET /api/health, GET /api/catalog, POST /api/inquiries, GET /api/inquiries.
- Testing agent iteration_1: 100% pass backend & frontend.

## Backlog / P1
- Case studies / real client logos when supplied.
- Blog / press page.
- Real product SKUs & quote-configurator.
- Email notification (Resend) when a new inquiry lands.
- Admin dashboard to view inquiries.

## Deployment Guidance provided
Explained Emergent Deploy flow, Entri custom domain link for freresglobal.com, rollback/redeploy controls, and credit implications (50/mo).
