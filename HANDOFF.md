# PARADISE LOBBY — HANDOFF DOCUMENT
## INTERNAL USE ONLY — DO NOT DISTRIBUTE

---

## WHAT WAS BUILT

A full Next.js 15 (App Router) site implementing the PARADISE LOBBY ARCHIVE SYSTEM concept: a leaked institutional archive that processes, classifies, and partially withholds creative work. Not a portfolio. Not a showcase. An administrative processing layer.

All 14 pages build statically. No external data dependencies. No authentication layer. Zero runtime errors.

---

## FILE STRUCTURE

```
paradise-lobby/
├── app/
│   ├── globals.css          ← All colors, fonts, animations, responsive classes
│   ├── layout.tsx           ← Root layout (no Geist, correct metadata)
│   ├── page.tsx             ← / — Registry intake index
│   ├── about-system/
│   │   └── page.tsx         ← /about-system — System note
│   ├── access/
│   │   └── page.tsx         ← /access — Clearance request form CR-7
│   ├── cases/
│   │   ├── page.tsx         ← /cases — Case archive grid
│   │   └── [slug]/
│   │       └── page.tsx     ← /cases/[slug] — Case detail
│   └── registry/
│       └── page.tsx         ← /registry — Sortable classification index
│
├── components/
│   ├── ArchiveSidebar.tsx   ← Chain of custody + metadata sidebar
│   ├── CaseCard.tsx         ← Case file card (client — hover states)
│   ├── ClerkCorrection.tsx  ← Handwritten-style annotation
│   ├── DocumentFrame.tsx    ← Main page wrapper (client — nav, system bar)
│   ├── EvidenceFrame.tsx    ← Exhibit container (open/restricted/suspended)
│   ├── FieldRow.tsx         ← Label + value form row
│   ├── L2SystemLayer.tsx    ← Fixed ambient codes overlay (client)
│   ├── MachineFooter.tsx    ← System footer with timestamp (client)
│   ├── OcrString.tsx        ← Share Tech Mono renderer, optional flicker
│   ├── RedactionBar.tsx     ← Black redaction bar
│   ├── RegistryTable.tsx    ← Sortable table (client)
│   ├── RestrictedNotice.tsx ← Restricted/access suspended warning block
│   └── Stamp.tsx            ← Rubber stamp with animation
│
├── content/
│   └── cases/
│       ├── stp-001-identity.json
│       ├── stp-002-poster.json
│       ├── stp-003-editorial.json
│       ├── stp-004-motion.json
│       ├── stp-005-apparel.json
│       └── stp-006-experimental.json
│
└── lib/
    └── cases.ts             ← getAllCases(), getCaseBySlug(), interfaces
```

---

## HOW TO ADD A NEW CASE FILE

1. Create a new file in `content/cases/` named `stp-00N-category.json`
2. Follow this schema exactly:

```json
{
  "case_number": "STP-007-XX",
  "slug": "stp-007-category",
  "title": "TITLE IN CAPS — FIELD REDACTED AS NEEDED",
  "classification": "CATEGORY / SUBCATEGORY",
  "status": "PENDING REVIEW",
  "year": 2024,
  "medium": "Medium Type, Format",
  "department": "DEPARTMENT NAME — SECTION N",
  "access_level": 2,
  "summary_redacted": "Procedural summary text. Cold, factual, no emotion.",
  "exhibits": [
    {
      "id": "EX-007A",
      "type": "image",
      "label": "EXHIBIT LABEL — ALL CAPS",
      "access": "open"
    }
  ],
  "routing_state": "ROUTED",
  "chain_of_custody": ["INTAKE", "CLASSIFICATION", "CURRENT STATE"],
  "related_cases": ["STP-001-ID"],
  "intake_date": "2024-01-01",
  "last_modified": "2024-06-01",
  "clerk_note": "Optional clerk annotation. Lowercase, procedural."
}
```

**Status values**: `PENDING REVIEW`, `ON HOLD`, `ACCESS SUSPENDED`, `MANUAL REVIEW REQUIRED`  
**Access levels**: 1 (open) → 4 (fully restricted — triggers RestrictedNotice)  
**Exhibit access**: `open`, `restricted`, `suspended`

3. The case will appear automatically in all pages (no code changes needed).

---

## WHAT NEEDS REAL CONTENT

| Area | Current State | What to Replace |
|------|--------------|----------------|
| Exhibit images | Gray placeholder boxes | Actual work images in `public/exhibits/` |
| Case summaries | Procedural placeholder text | Real project descriptions (keep tone cold) |
| Clerk notes | Placeholder annotations | Real routing notes or leave as-is |
| Activity log | Hardcoded in `app/page.tsx` | Update the `ACTIVITY_LOG` array as cases update |
| About system body | Placeholder procedural text | Real system description (keep cold, no bio) |

---

## DESIGN SYSTEM REFERENCE

**Colors** (defined in `globals.css` as CSS vars):
- `--paper` `#E2D9C8` — backgrounds
- `--ink` `#1C1914` — primary text, borders
- `--stamp` `#5B6B8A` — stamps, links, active states
- `--scan` `#B8B0A4` — secondary text, metadata
- `--void` `#F0EBE1` — card surfaces, form backgrounds

**Fonts** (Google Fonts, loaded in `globals.css`):
- Special Elite — admin/bureaucracy text, body, headers
- Share Tech Mono — OCR/machine output, codes, labels, system text
- Courier Prime — directives, warnings, stamps only

**Animations** (CSS classes):
- `stamp-animate` / `stamp-animate-right` — stamp reveal
- `ocr-flicker` — OCR flicker effect
- `doc-load` — document load fade-in
- `misreg` — color misregistration glitch
- `ink-bleed` — text-shadow ink bleed
- `toner-fade` — worn/faded appearance
- `redacted` — solid black bar

---

## TO ADD ACTUAL IMAGES

1. Place images in `public/exhibits/[case-slug]/` (e.g., `public/exhibits/stp-001-identity/EX-001A.jpg`)
2. In `EvidenceFrame.tsx`, replace the gray placeholder div with a `<Image>` component for `access === 'open'`

---

## TO DEPLOY

```bash
npm run build
npm run start
```

Or deploy to Vercel — the project is already configured as a standard Next.js App Router project. All pages are statically generated; no server-side runtime required.

---

DOCUMENT STATUS: FILED
SYSTEM: PARADISE LOBBY ARCHIVE v2.4
RECORD: HANDOFF-2024-001
