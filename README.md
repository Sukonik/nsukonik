# nsukonik.com — 2026 Edition

**Personal website · Digital portfolio · Writing · Historical restoration**

> **Project status:** V1 site skeleton built (Astro). Historical inventory still pending. See docs/handoff-v1.md.

- **Repository:** https://github.com/Sukonik/nsukonik
- **Historical reference:** https://web.archive.org/web/20180413094759/http://nsukonik.com/
- **Implementation:** Cole (development) · Ari (product architecture / design review) · Nathan (direction, editorial approval, deployment approval)
- **Strategy:** Hybrid restoration — preserve the old site and its history while building a new GoldenSun-inspired personal website.

## Product vision

Build a fast, accessible, mobile-first personal home for Nathan's work and writing. The site should communicate both *where the work began* (the archived site) and *what exists today* (AI products, engineering, design, and entrepreneurial experiments).

**Separation of concerns**
- **nsukonik.com** = personal identity, professional portfolio, essays, project history, archive.
- **GoldenSunAI** = company and product ecosystem; link to it rather than duplicating its entire website.
- **Historical collection** = faithful original content and metadata, distinguishable from modern commentary and redesigns.

Preservation **and** modernization are both goals. Do not replace the archive with a modern interpretation or force the live design to imitate a legacy WordPress theme.

## Site information architecture

| Route | Purpose |
| --- | --- |
| / | Editorial homepage, short introduction, featured projects, recent writing, and entry into the archive |
| /work/ | Searchable/filterable project portfolio, **alphabetical by project name** by default |
| /work/[slug]/ | Optional project case studies and historical projects |
| /writing/ | New essays and articles with topic filters |
| /writing/[slug]/ | Individual modern articles |
| /archive/ | Historical directory with original dates, year/topic navigation, restoration status, and source links |
| /archive/[slug]/ | Restored legacy articles/pages with provenance and original URL references |
| /archive/site-2018/ | Dedicated **historical site** landing page and Wayback reference; an on-site legacy reproduction is optional and only after assets are verified |
| /about/ | Current professional bio and a separate historical timeline |
| /contact/ | Simple contact and approved social/profile links |

Use a compact, responsive header; no sprawling navigation. An archive visitor should never confuse a 2015–2018 post with a newly published 2026 article.

## Design direction

Borrow principles, **not identical visual components**, from the wider GoldenSun portfolio:

- **GoldenSunAI:** clear project categories, alphabetical order, visible statuses **under** project titles, unmistakable live-site/source links, responsive cards.
- **UUUB Cocoa House:** thoughtful editorial typography, strong text hierarchy, restraint in imagery, story-first presentation.
- **GoldenSunLaw:** professional readability, refined spacing, clean professional identity, excellent mobile and desktop behavior.
- **Original nsukonik.com:** preserve personality, historic writing, design work, experimentation, and the early web character.

**Proposed theme (design tokens, subject to visual review)**

| Token | Light | Dark |
| --- | --- | --- |
| Background | #F8F6F1 | #15202B |
| Surface | #FFFFFF | #1D2A37 |
| Text | #1D2732 | #F1F4F5 |
| Accent (solar gold) | #A67B32 | #E1B861 |
| Supporting accent | #5B7485 | #91ACBC |

Typography: modern readable sans-serif for UI; selective editorial serif for long-form headings or quotations. Avoid large JavaScript libraries, needless carousels, forced scroll animation, or excessive imagery.

**Homepage:** strong introduction → featured work → recent writing → “Explore the original site” archive invitation → About / contact.

**Portfolio:** alphabetical default, responsive 1/2/3-column layout, status directly beneath title (never floating off-card), short purpose, category, links to live site and GitHub where confirmed. Do not invent availability, statuses, URLs, or completion dates.

## Historical recovery — audit before import

The April 13, 2018 Wayback snapshot is the **reference capture**, not proof of when any article was published and not proof that every asset survived.

### Discovery checklist

1. Query the Internet Archive / CDX for the hostname and www/non-www variants; enumerate unique original URLs and capture timestamps, respecting archival service limits.
2. Inspect the April 2018 reference, then earlier/later captures when useful for missing content and assets.
3. Inventory pages, posts, historical navigation, project pages, images, downloads, CSS, fonts, and outgoing links.
4. Record **source URL, snapshot URL, snapshot timestamp, original published date if independently available, title, slug, type, topic, asset references, and recovery confidence**.
5. Preserve article text, original spelling, credited authorship, headings and dates. Record any edits, corrections, or replacement images separately.
6. Download recoverable materials to appropriately named local paths where legally usable; track source attribution and whether each asset is original or third-party.
7. Keep missing/unrecoverable content explicitly marked as missing or partial. Never fabricate historical articles, dates, screenshots, or reconstructed quotations.
8. Review old links; map original URL slugs to restored pages or safe redirects. Do not blindly rewrite external historical links.

**Initial candidate areas to verify** (leads from a preliminary review, not yet a complete confirmed Wayback inventory): Home, Blog, Design, Topics, About, Contact; CollegeStartup.org and NY Hackathons material; older writing about design, startups, food, technology, gaming, and cycling. Treat every individual entry as **unverified until checked**.

### Proposed archive manifest

Store an auditable inventory in docs/archive-inventory.csv or data/archive-manifest.json. Suggested fields:

~~~json
{
  "id": "legacy-0001",
  "title": null,
  "original_url": null,
  "wayback_url": null,
  "snapshot_timestamp": null,
  "published_at": null,
  "original_slug": null,
  "type": "post",
  "topics": [],
  "recovery_status": "unverified",
  "content_path": null,
  "assets": [],
  "rights_review": "pending",
  "notes": ""
}
~~~

Allowed recovery statuses: **unverified, captured, restored, partial, missing, excluded**. Show a restrained “Archived from [year]” or “Partially restored” note on each relevant page, sourced from this manifest.

**Archive integrity rules**
- Historical post published date and archive snapshot capture date are separate fields.
- Provide original URL + Wayback citation/link on restored pages.
- Keep an immutable reference export if original content is successfully recovered; modern notes live in separate fields.
- Keep original filenames and a mapping when assets must be renamed.
- Do not copy third-party photography or brand assets without appropriate rights and attribution.
- Do not render raw archived scripts, old tracking tags, or unsafe legacy embeds.

## Recommended implementation

**Proposed stack:** Astro + TypeScript + content collections (Markdown/MDX only when actually needed) + hand-written CSS/custom properties. Static generation, minimal JavaScript. Deploy to **GitHub Pages** after repository Pages settings, custom domain ownership, and DNS are validated.

This is a **proposal**, not an existing implementation. There is no package.json / Astro application in the repository as of the planning handoff.

Suggested structure once initialized:

~~~text
src/
  components/       # Header, Footer, ProjectCard, PostCard, ArchiveSource
  content/
    writing/         # New writing
    legacy/          # Restored historical posts
    projects/        # Structured project descriptions
  data/
    archive-manifest.json
  layouts/           # BaseLayout, ArticleLayout
  pages/             # Home, work, writing, archive, about, contact
  styles/            # Tokens, typography, layout
public/
  images/            # New approved site assets
  legacy/            # Rights-cleared recovered archive assets
docs/
  archive-inventory.csv
  restoration-log.md
  design-system.md
.github/
  workflows/         # CI and Pages deployment
~~~

Use Astro's supported GitHub Pages build and deploy workflow. Implement 404, sitemap, robots.txt, semantic metadata and canonical URLs. Preserve legacy SEO slugs via redirects where feasible; for GitHub Pages static hosting, implement any required client/static redirect page carefully and document limitations.

**Accessibility/performance requirements:** keyboard navigation, visible focus states, color contrast targeting WCAG AA, reduced-motion support, accessible menus, responsive 320px+ layouts, responsive images, no autoplay or layout jumps, minimal JS on initial load.

**Safety/privacy:** never place private government documents, proprietary client work, internal credentials, personal contact information without approval, or unlicensed archival assets into the public repository. No analytics/tracking by default.

## Delivery plan — focused pull requests

| PR | Scope | Acceptance gate |
| --- | --- | --- |
| PR A — Foundation | Initialize Astro/TS, base routes, navbar, footer, mobile menu, theme variables, README alignment | Build works; Home/Work/Writing/Archive/About/Contact all route |
| PR B — Archive inventory | CDX-based discovery (or documented manual recovery), manifest, source mapping, restoration log | Every inventoried item has source + capture metadata; missing materials identified |
| PR C — Design system + portfolio | Theme, editorial homepage, work cards, categorized project data, filters | Mobile/desktop QA; alphabetical default; status under project name; only verified links |
| PR D — Historical content | Restore verified posts, archive lists/detail pages, source badges, old-slug mapping | Original text/dates faithfully retained; original vs modern notes visually separated |
| PR E — Launch/QA | SEO, accessibility, performance, broken-link checks, GitHub Pages, optional CNAME/DNS | CI green; no 404 on critical routes; custom domain only after owner approval |

Keep each PR independently reviewable; no huge all-at-once redesign. Nathan approves content and deployment. Start with PR A and parallel **read-only** historical discovery; do not publish invented archive entries to fill gaps.

### Cole: first implementation pass

1. Clone **Sukonik/nsukonik** and work on a fresh branch from main, such as feature/site-foundation.
2. Initialize Astro without deleting or replacing existing LICENSE (MPL-2.0).
3. Build the responsive navigation, shared layout and six initial routes. Use coherent placeholder text identified as placeholder; do not impersonate restored content.
4. Add a small project data schema with name, category, description, status, live URL, repo URL; render alphabetically and only display known-good links.
5. Add a blank archive-index state with an explicit “Restoration in progress” explanation and an outbound link to the April 2018 Wayback snapshot.
6. Add build checks / Pages deployment plan and open PR A with screenshots at mobile and desktop widths.
7. Report archive recovery findings and blockers separately: total captured URLs, unique articles, recoverable assets, missing assets and rights questions. **No inflated counts.**

## Release gates

- **V0.1 / Foundation:** modern skeleton and responsive routes.
- **V0.2 / Public beta:** real work entries + verified initial archive entries.
- **V1.0 / Restoration launch:** archive provenance, responsive/editorial QA, functional internal/external links, accessible navigation, tested domain routing.

## Decisions to retain

- Hybrid restoration is approved.
- This repository is the canonical build target; do not create a separate duplicate repo.
- Keep historic original content distinct from 2026 editorial updates.
- Prioritize fast, text-first, mobile-friendly pages over elaborate animation.
- Existing LICENSE is **Mozilla Public License 2.0**; document external asset licensing separately.
- Custom-domain DNS, publishing and any third-party services require owner review.

---

**Historical source:** [nsukonik.com — April 13, 2018 Wayback snapshot](https://web.archive.org/web/20180413094759/http://nsukonik.com/)

**Current repository:** [Sukonik/nsukonik](https://github.com/Sukonik/nsukonik)
