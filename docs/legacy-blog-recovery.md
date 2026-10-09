# The Original Blog — restoration playbook

**Status (October 9, 2026): No article bodies have been recovered or published.** Five user-supplied historical titles and URL leads are staged in `docs/archive-inventory.csv` with status `unverified`. The blog URL itself was not retrievable from this environment.

**Historical references**
- March 30, 2018 blog: https://web.archive.org/web/20180330043245/http://nsukonik.com/blog/
- April 13, 2018 homepage: https://web.archive.org/web/20180413094759/http://nsukonik.com/
- Import issue: https://github.com/Sukonik/nsukonik/issues/4
- Inventory issue: https://github.com/Sukonik/nsukonik/issues/3

## Recover using either available source

**1. Optional original WordPress XML (WXR):** If an old `Tools > Export` .xml file exists, stage it *outside the public repository*. WXR may preserve original bodies, post dates, authors, categories, tags, attachment URLs, and drafts. Import *published posts only* after review. XML is not required to proceed.

**2. Wayback / CDX HTML:** Use an internet-enabled development environment to query CDX for `nsukonik.com/*` and `www.nsukonik.com/*`, check success status, de-duplicate canonical URLs, inspect multiple archived timestamps where needed, download article HTML, and separately inventory media. Rate-limit requests. Do not mistake URL inventory rows for fully recovered bodies.

Example bounded discovery request (adjust pagination and host scope as needed):

```bash
curl -L --fail --retry 2 --max-time 45 \
  'https://web.archive.org/cdx/search/cdx?url=nsukonik.com%2F%2A&output=json&fl=timestamp%2Coriginal%2Cstatuscode%2Cmimetype%2Cdigest&filter=statuscode%3A200&collapse=urlkey&limit=500' \
  -o nsukonik-cdx-sample.json
```

Official upstream API specification: https://github.com/internetarchive/wayback/blob/master/wayback-cdx-server/README.md

## Required content handling

- Keep `published_at` (true original publication date), `url_year_month` (inferred only from path), and `archive_capture_timestamp` **distinct**.
- Extract and preserve titles, bodies, post URLs, media, authors, categories, tags, and source snapshots, with original HTML as a non-public review reference before cleanup.
- Avoid copying archived scripts, WordPress widgets, injected Wayback toolbar code, trackers, third-party embeds, and unsafe inline event attributes.
- Respect asset licenses/attribution; host rights-cleared images locally where recoverable, and mark missing images honestly.
- Never publish drafts, comments, raw XML, admin exports, or possibly sensitive archived material without editorial review.
- Review all output before promotion into the Astro legacy content collection; never generate replacement paragraphs and call them restored originals.

## Item status transitions

| Status | Meaning |
| --- | --- |
| unverified | Historical URL/title lead; no recovered article body |
| captured | A matching HTML or WXR article source obtained |
| parsed | Body and metadata extracted, awaiting review |
| reviewed | Originality, date, links, privacy and rights approved |
| restored | Published as static article with provenance |
| partial | Incomplete surviving text or media |
| missing | No article text recoverable after checks |
| excluded | Deliberately withheld for editorial/rights/privacy reason |

## Product integration

- Use one navigation: Home · Writing · Work · Archive · About · Contact.
- Writing gets a distinct filter/tab called **Original Blog · 2015–2018** beside new writing.
- Archive gets year/month/category filters and recovered post pages, not an old second WordPress menu.
- Restored pages carry an **ARCHIVED ARTICLE** label, verified original date if available, and both original and saved Wayback source URL.
- Historical slugs should map to working local routes; use static redirects/aliases when practical for GitHub Pages.
- Theme tokens, rack-style drawer and article typography must work on mobile across all eight gemstone styles.

## Cole's definition of done (PR B2 after PR B)

1. Enumerate unique indexed HTML URLs, actual post candidates, and available image assets; report real counts.
2. Verify all five seeded articles and discover other blog posts through archive pagination/months and older captures.
3. Import at least one genuine article body end-to-end, with source and original-versus-capture dates correctly labeled.
4. Normalize remaining retrieved posts with a repeatable, safely staged importer and per-item review state.
5. Deliver archive search/filter, responsive article pages, legacy link mapping, and a completeness report.

**A WordPress XML backup is beneficial but not a blocker.** Archive HTML alone is sufficient for any articles actually captured in full.
