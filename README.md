# nsukonik.com — 2026 Edition

**Personal website · Digital portfolio · Writing · Historical restoration**

> **Project status:** Planning / historical inventory pending. This repository is the home of the new nsukonik.com, not yet a deployed application.

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
| /work/ | Projects A–Z with filters for Current, Web Design, and **Past Projects**; clearly link to GoldenSunAI's full portfolio |
| /work/[slug]/ | Optional project case studies and historical projects |
| /writing/ | New blog / writing: essay feed and topic filters (replaces the former Blog + Topics menu items) |
| /writing/[slug]/ | Individual modern articles |
| /archive/ | Historical directory with original dates, year/topic navigation, restoration status, and source links |
| /archive/[slug]/ | Restored legacy articles/pages with provenance and original URL references |
| /archive/site-2018/ | Dedicated **historical site** landing page and Wayback reference; an on-site legacy reproduction is optional and only after assets are verified |
| /about/ | Current professional bio and a separate historical timeline |
| /contact/ | Simple contact and approved social/profile links |

Use **one unified primary menu**: Home · Writing · Work · Archive · About · Contact. The historic Blog becomes Writing, Design/Web Design becomes Work, Topics becomes Writing filters, monthly Archives become Archive, and the old CV top-level link is removed. Historical URLs and labels remain preserved in the manifest. An archive visitor should never confuse a 2015–2018 post with a newly published 2026 article.

## Design direction

Borrow principles, **not identical visual components**, from the wider GoldenSun portfolio:

- **GoldenSunAI:** clear project categories, alphabetical order, visible statuses **under** project titles, unmistakable live-site/source links, responsive cards.
- **UUUB Cocoa House:** thoughtful editorial typography, strong text hierarchy, restraint in imagery, story-first presentation.
- **GoldenSunLaw:** professional readability, refined spacing, clean professional identity, excellent mobile and desktop behavior.
- **Original nsukonik.com:** preserve personality, historic writing, design work, experimentation, and the early web character.

**Approved direction:** GoldenSunAI-inspired **dark-first visual canvas** with eight user-selected **gemstone accent palettes**. Do not build eight separate website layouts; switch semantic accent tokens using `<html data-theme="...">`. Do not add a separate light/dark UI toggle in V0.1; optional light treatment can be considered after the eight gemstone accents pass contrast review. The eight-theme spec and exact palette are in **V1.1 approved design addendum** below.

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


---

## V1.1 approved design addendum — October 9, 2026

**These approved directions supersede any contradictory early design suggestions above.** Nathan supplied original 2018 homepage material and approved a single modern navigation system, GoldenSunLaw-style mobile "server rack" drawer, GoldenSunAI-style gemstone theme identity, and a Past Projects area instead of an old CV link.

### 1) One menu — no second legacy WordPress menu

Main navigation (canonical order):

1. **Home** — /
2. **Writing** — /writing/ (original Blog + Topics consolidated; tags/categories/years are filters, not another global menu)
3. **Work** — /work/ (original Design / Web Design modernized; includes Current Work, Web Design and Past Projects sections/filters)
4. **Archive** — /archive/ (historic articles, monthly archives, 2018 site)
5. **About** — /about/
6. **Contact** — /contact/

**Do not add:** a secondary top bar, a duplicate navigation rail, a dedicated CV menu item, or a separate global Topics menu.

- The site's current Web Design / product portfolio features the GoldenSunAI studio as a central destination, with a prominent **"View full GoldenSunAI portfolio"** external link: https://sukonik.github.io/goldensunai/work.html . Also allow relevant individual personal case studies.
- **Past Projects** is a filter or tab under Work, **not** a seventh top-level menu entry. Begin historical candidates with **NY Hackathons** and **CollegeStartup.org**, but validate archival content before publishing claims.
- Historic **Design**, **Web Design**, **Blog**, **Topics**, monthly archives and **CV** are recorded in the archive URL manifest; modern navigation does not need to recreate their old placement.
- No automatic CV link to LinkedIn; put any approved up-to-date LinkedIn/profile link under About or Contact if desired, separate from historical CV metadata.
- One canonical nav data array/config drives both desktop presentation and mobile drawer to avoid route/label drift. The theme picker is a *setting*, not another navigation menu.

### 2) Mobile server-rack drawer adapted from GoldenSunLaw

**Reference files (inspect current versions, do not blindly paste entire stylesheet):**

- https://github.com/Sukonik/GoldenSunLaw/blob/main/css/site.css — section beginning "Mobile drawer as a server rack: each page is a rack unit with a status LED" (original roughly lines 1404–1494).
- https://github.com/Sukonik/GoldenSunLaw/blob/main/js/main.js — drawer toggle, active-page marker, Escape behavior, theme picker (original roughly lines 160–299).
- https://github.com/Sukonik/GoldenSunLaw/blob/main/index.html — header + semantic nav drawer markup.
- https://github.com/Sukonik/goldensunai/blob/main/css/responsive.css — narrow-screen wordmark/theme-control placement and responsive work-grid approach.
- https://github.com/Sukonik/goldensunai/blob/main/css/tokens.css — shared dark base and variable-driven gemstone accents.

**Behavior and visual specification:**

- Small screen: one hamburger button opens **one full-height, scrolling, accessible drawer** (not two menus). Emulate the vertical stacked server-rack units.
- Each row has a leading **status LED**, a large route label, a restrained **U01–U06** unit index, and subtle right-edge ventilated-faceplate detailing.
- Current route: colored illuminated LED + accent edge + **ONLINE** label (visual flourish only; link must still convey active page using \`aria-current="page"\`).
- Inactive entries: low-key LEDs, no misleading "offline" claim. Subtle rack separators and robust spacing.
- Desktop: one horizontal primary nav, coherent identity and theme button; mobile drawer is the small-screen presentation of that **same nav model**. Do not show desktop and drawer concurrently.
- Theme picker: desktop dropdown/popover in the header, compact on small tablet; **inside the one mobile drawer** on narrow phones (no second hamburger or extra global menu).
- Touch hit areas >=44px; focus visible; Escape closes, backdrop click closes, link selection closes, focus returns to launcher, scroll is locked while open, background cannot receive unintended focus. Honor \`prefers-reduced-motion\`.
- Account for safe-area insets, dynamic viewport height (\`dvh\` with fallback), keyboard opening, landscape phones, long localized labels and nested route paths.
- If reusing GoldenSunLaw CSS, adapt to Astro layouts, avoid fixed home-page path matching based only on basename, and test menu behavior with nested /writing/... and /archive/... URLs.
- Reactivity minimal: vanilla TS/JS for theme switch and drawer; server/static HTML remains meaningful without JavaScript.

### 3) Eight gemstone themes

**Visual rule:** As with GoldenSunAI, the background stays dark and content layout identical while accents, glows, dividers, active navigation, links and selected UI states change. Light/dark modes are *not* separate entries in the theme chooser.

| Theme ID | Display name | Accent sample | Deep companion | Identity |
| --- | --- | --- | --- | --- |
| sunstone | Sunstone (default) | #D4A447 | #251C13 | GoldenSun warmth and signature |
| ruby | Ruby | #D54E66 | #28121B | Brilliant red |
| sapphire | Sapphire | #577CFA | #131D39 | Royal blue |
| emerald | Emerald | #2DA77C | #102B24 | Forest-green clarity |
| amethyst | Amethyst | #A171DE | #251633 | Violet imagination |
| aquamarine | Aquamarine | #38B9C9 | #102B34 | Coastal / Long Beach inspiration |
| garnet | Garnet | #A34A61 | #31161F | Classic burgundy editorial |
| obsidian | Obsidian | #AEB6C3 | #111419 | Neutral graphite / restrained minimalism |

Values above are **conceptual palette seeds**, not final text-on-background contrast approvals. Implement separate semantic tokens for \`--accent\`, \`--accent-text\`, \`--accent-hover\`, \`--accent-glow\`, \`--focus-ring\`, \`--surface\`, \`--background\`, \`--border\`, \`--text\`, \`--muted\`. Test WCAG AA contrast for every theme and interaction. A decorative swatch and readable text color may have different values.

- Theme picker explicitly labels eight options with a recognizable swatch and selected state.
- Default **Sunstone**; persist choice in \`localStorage["ns-theme"]\` (separate key from GoldenSunAI's \`gs-theme\` and GoldenSunLaw's \`sun-theme\`).
- Apply valid saved choice before first paint when possible; if localStorage unavailable or invalid, use Sunstone safely, without errors or flash.
- \`data-theme\` on \`<html>\`; centralized theme data/tokens; never duplicate magic hexadecimal values across components.
- Responsive header theme selection must not shrink/clip the brand. Show one accessible control per viewport rather than two simultaneously operable controls.
- Minimal transitions with reduced-motion support; theme must work across all routes, archive views, and mobile drawer.
- Design goal: original GoldenSunAI dark editorial visual language, but a distinct personal identity—not a clone.

### 4) Historical homepage intake (user-supplied transcription, 2018 snapshot)

**Archive reference:** https://web.archive.org/web/20180413094759/http://nsukonik.com/

**Original title:** "Nathan Sukonik's Blog" (historic identity). The snapshot described a background in **Digital Marketing, Product Development and User Experience Research**, with writing about **food, art, gaming and technology**. It referenced **NY Hackathons** as an event-listing and educational-resource project, plus historical services involving marketing, product design, analytics, social media, sales/CRM, content and web publishing.

**Important:** These are *historic 2018 claims*, not a current bio or present-day services offer. Do not copy the old "Nathan Sukonik can help you" list or historical tools inventory into the 2026 homepage as if they describe current offerings. Preserve them faithfully in the restored 2018 homepage record.

**Legacy top-level links from supplied snapshot** (import into inventory; fetch content/verify each):
- Home: http://nsukonik.com/
- Blog: http://nsukonik.com/blog/
- Design: http://nsukonik.com/design/
- Topics: http://nsukonik.com/category/topics/
- About: http://nsukonik.com/about/
- Contact: http://nsukonik.com/contact/
- Web Design: http://nsukonik.com/webdesign/

**Five supplied article leads** — retain exact original slugs and year/month; archive capture date is *not* publication date:

| Historical title | Original path |
| --- | --- |
| How to Delete 200,000 Emails from Gmail | /2017/10/cleanmygmail/ |
| Fallout 4: A Settler’s Guide from the Lone Wanderer to Dovahkiin | /2017/01/fallout-4-a-settlers-guide-from-the-lone-wanderer-to-dovahkiin/ |
| The Dos Toros Experience | /2016/10/the-dos-toros-experience/ |
| Banana Oreo Milkshake + Bonus: Dirty Banana Cafe Allemand Drink Recipe | /2016/09/banana-oreo-milkshake-bonus-dirty-banana-cafe-allemand-drink-recipe/ |
| Morning Bike Ride | /2016/08/morning-bike-ride/ |

**Historic monthly archive leads:** 2017/10, 2017/01, 2016/10, 2016/09, 2016/08, 2015/08, 2015/05, 2015/03, 2015/02. Treat these as **discovered archive directory links, not proof of full monthly content**. Restore filters by year/month instead of a second sidebar menu.

**Legacy asset leads:** \`/wp-content/uploads/2015/06/apple-touch-icon-144x144.png\`; \`/wp-content/uploads/2015/05/Screen-Shot-2015-10-16-at-7.57.31-AM.png\`; additional wp.com transformed copies may be in snapshots. Verify availability, rights, resolution and exact source before copying; prefer local retained copies to fragile archive hotlinks.

**Historic off-site links:** @Sukonik Twitter, NY Hackathons (including archived /tools/), and LinkedIn CV. Preserve these in the legacy manifest as references, but do not present them as current destinations without verifying the endpoints and obtaining editorial approval. **No CV navigation item.**

### 5) Required responsive QA / design gates

Test widths **320, 360, 390, 430, 768, 1024, 1440, 1920px**, plus mobile landscape; both touch and keyboard. There must be **zero horizontal overflow** and no clipped theme picker, brand, menu close button, archive title or rack numbering. Aim for stable typography with \`clamp()\`, container query/content-driven adaptations, touch-friendly controls, 1/2/3/4-column work grid at appropriate widths and correct image aspect ratios.

Screens to test in **all eight themes**: homepage, Work filter, Writing listing, Archive article, open mobile drawer, theme control. Automated checks may cover contrast tokens and nav states, but human visual review remains required.

### 6) Cole's next implementation sequence (V1.1)

- **PR A1 — Foundation + one navigation**: initialize Astro; six routes; single nav config; GoldenSunLaw-derived server rack drawer; accessibility and responsive header.
- **PR A2 — Gemstone theme system**: eight token palettes; header/drawer picker; persistence, early apply, valid fallback, contrast audit.
- **PR B — Archival inventory**: seed exact URLs above in manifest with status = unverified; CDX discovery, unique pages/assets, provenance, monthly archive map. Do not invent article bodies.
- **PR C — Homepage / Work / Writing**: GoldenSunAI-inspired editorial homepage, alphabetical Work entries, Current/Web Design/Past Projects filters, writing topics within Writing, featured verified links to GoldenSunAI.
- **PR D — Verified archival restoration**: import recovered post content and assets, source links, original dates, legacy URL mapping, partial-content notices.
- **PR E — Ship**: production QA, accessibility, metadata, GitHub Pages, domain/DNS approval. No unreviewed deployment to nsukonik.com.

**Immediate task for Cole:** start PR A1 with the nav pattern from GoldenSunLaw, not with bulk Wayback downloads or a visual redesign of every archived page. Preserve original history, modernize presentation.

