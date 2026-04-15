# PARADISE LOBBY — BUILD PLAN
## CLASSIFIED INTERNAL DOCUMENT. DO NOT DISTRIBUTE.

---

## STACK
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS (custom palette only)
- Local JSON content (no CMS)
- Google Fonts: Special Elite (admin), Share Tech Mono (OCR), Courier Prime (directive)

---

## COLOR TOKENS
| Token | Hex | Use |
|-------|-----|-----|
| PAPER | #E2D9C8 | Background, base |
| INK | #1C1914 | Primary text, borders |
| STAMP BLUE | #5B6B8A | Stamps, classification tags, links |
| SCAN GREY | #B8B0A4 | Secondary text, metadata, separators |
| VOID WHITE | #F0EBE1 | Card backgrounds, elevated surfaces |

---

## TYPOGRAPHY
- `font-admin` — Special Elite (bureaucratic forms, labels, headers)
- `font-ocr` — Share Tech Mono (machine output, case numbers, codes)
- `font-directive` — Courier Prime (warnings, restricted notices only)

---

## ROUTES
| Route | Purpose |
|-------|---------|
| `/` | Registry intake index — system boot screen |
| `/cases` | Case archive — filtered grid of case files |
| `/cases/[slug]` | Case detail — full document view with exhibits |
| `/registry` | Sortable classification index — table view |
| `/access` | Clearance request form |
| `/about-system` | System note — not a bio |

---

## CONTENT MODEL (content/cases/*.json)
```json
{
  "case_number": "STP-001-ID",
  "title": "[FIELD REDACTED]",
  "classification": "IDENTITY / VISUAL SYSTEMS",
  "status": "PENDING REVIEW",
  "year": 2023,
  "medium": "Brand Identity, Print",
  "department": "CLASSIFICATION UNIT",
  "access_level": 2,
  "summary_redacted": "Subject matter involves...",
  "exhibits": [],
  "routing_state": "ROUTED",
  "related_cases": []
}
```

---

## COMPONENTS
| Component | Description |
|-----------|------------|
| `DocumentFrame` | Outer shell for all pages — scan lines, grain, margin codes |
| `CaseCard` | Case file card with stamp, status, redaction |
| `RegistryTable` | Sortable table of all cases |
| `Stamp` | Rotated text stamp (PENDING, APPROVED, RESTRICTED, etc.) |
| `OcrString` | Flickering OCR text with machine-type rendering |
| `RedactionBar` | Black/grey bar over censored content |
| `FieldRow` | Label + value form row |
| `EvidenceFrame` | Container for exhibits/images |
| `ArchiveSidebar` | Left panel with routing info, serial numbers |
| `RestrictedNotice` | Full-bleed warning for restricted access |
| `ClerkCorrection` | Handwritten-style override annotation |
| `MachineFooter` | Bottom bar with system codes and timestamp |
| `L2SystemLayer` | Ambient layer: corner codes, status tickers |
| `StampReveal` | CSS animation for stamp appearance |

---

## BUILD PHASES
1. Config: Tailwind tokens, fonts, global CSS, texture
2. L2 System layer + shared components
3. Layout (DocumentFrame, MachineFooter, nav)
4. Content: 6 case JSON files
5. Pages: /, /cases, /cases/[slug], /registry, /access, /about-system
6. Friction: grain overlay, scan lines, misregistration effects
7. Responsiveness pass
8. Build + error fix
9. HANDOFF.md

---

## CASE FILES
| ID | Category | Working Title |
|----|---------|--------------|
| STP-001 | Identity | Visual identity system — [REDACTED] |
| STP-002 | Poster | Print campaign — unauthorized distribution |
| STP-003 | Editorial | Publication layout — pending clearance |
| STP-004 | Motion | Sequence documentation — access restricted |
| STP-005 | Apparel | Material evidence — garment series |
| STP-006 | Experimental | Unclassified — manual review required |

---

STATUS: ACTIVE — BUILD COMMENCED
