# PROJECT_LOG

## CURRENT STATE
- Homepage restored and build was previously clean.
- Codex applied intake ledger patch to app/page.tsx and app/globals.css.
- HeroPanel was preserved.
- JetBrains Mono only.

## LAST APPROVED / REVIEWED PASS
- Replaced the strip under HeroPanel with an intake ledger.
- Added WITHHELD INTAKE LOG.
- Added supporting CSS for ledger/friction.
- Old strip may still be suppressed in place with {false && (...)}.
- Ledger counts currently use homepage heuristics, not a dedicated schema.

## DO NOT TOUCH WITHOUT APPROVAL
- components/HeroPanel.tsx
- components/PageTransition.tsx
- components/TransitionWrapper.tsx
- components/NavBrackets.tsx

## NEXT STEP
- Run build after patch
- Check if old strip is still suppressed
- If build passes, remove suppressed old strip cleanly
- Then review visual result before any broader redesign

## BUILD FIX
- next.config.ts updated with explicit turbopack.root absolute path
- build re-tested after root fix

## BUILD STATUS UPDATE
- Turbopack root issue was resolved after installing dependencies in the v2 worktree.
- Current blocker is root tsconfig including sanity-studio during app typecheck.
- Next step: exclude sanity-studio from root tsconfig and rebuild.

## BUILD STATUS CORRECTION
- Build now passes successfully in paradise-lobby-v2.
- Turbopack root issue was resolved after installing dependencies in the v2 worktree.
- Root tsconfig was updated to exclude sanity-studio.
- Current remaining cleanup: remove the old suppressed strip in app/page.tsx.

## CLEANUP PASS
- Removed the dead suppressed strip from app/page.tsx manually.
- No live ledger code was changed.
- Build re-run after cleanup.

## FEATURED RECORD PASS
- Reclassified featured block toward evidence record language.
- Removed .featured-card:hover.
- Added thin evidence-status line in featured block.
- Reduced featured body padding slightly.
- Build re-run after patch.

---

## GOVERNANCE LAYER ESTABLISHED
Date: April 2026

- Created ACTIVE_MANIFEST.md in project root as single source of 
  truth for authority files
- Created knowledge/_archive/ folder with README
- Created knowledge/04_evals.md with 12-case eval set 
  (mode routing, canon compliance, technical accuracy, governance)
- Updated CLAUDE.md with governance layer and mode routing section
- Skills folder .claude/skills/ confirmed with 4 active skills: 
  canon-review, photoshop-technique, public-dosier, ui-ux-pro-max
- system-ops listed as PENDING in manifest (folder not yet created)
- Correction applied: public-dosier uses on-disk spelling (single s)

No existing skill files, canon files, or protected components were 
modified.

Next step: run the 12-eval set in a fresh chat on Project A 
(PL_CANON_OPS) to baseline the system. Fix any fails. Target 12/12 
before moving on to PL_COMMERCIAL_OPS setup.

---

## KNOWLEDGE FILES NORMALIZED
Date: April 2026

Created four normalized knowledge files in knowledge/:
- knowledge/00_canon_v3.md — world canon and doctrine (350 lines)
- knowledge/01_taxonomy.md — classification system (183 lines)
- knowledge/02_public_content_rules.md — public distribution + commercial translation (357 lines)
- knowledge/03_photoshop_hard_rules.md — execution firewall (320 lines)

Source docs used per file:
- 00: PL_CANON_RULES_v3.md (primary), GRAPHIC_DESIGN_EXTRA_CONTEXT_v2.md, PROJECT_HIERARCHY.md
- 01: GRAPHIC_DESIGN_EXTRA_CONTEXT_v2.md, PROJECT_HIERARCHY.md, PL_CANON_RULES_v3.md, PL_TRAINING_v3.html, PUBLIC_CONTENT_SYSTEM.md
- 02: PUBLIC_CONTENT_SYSTEM.md (primary), CLIENT_TRANSLATION.md (primary), PERSONAL_BRAND_POSITIONING.md
- 03: PL_TRAINING_v3.html (primary), PL_CANON_RULES_v3.md (friction/proof rules)

Missing source docs (not found on disk):
- STP_WORLD_RULES.txt — STP framing sourced from GRAPHIC_DESIGN_EXTRA_CONTEXT_v2.md instead
- PL_SYSTEMS_v1.html — System A/B/D formal definitions unavailable; noted in 01_taxonomy.md header
- PL_OPS_v3.html — anchor test full spec and daily protocol missing; noted in 03_photoshop_hard_rules.md
- PL_BUILD_GUIDE_v2.html — A3 print prep missing; noted in 03_photoshop_hard_rules.md

ACTIVE_MANIFEST.md references verified correct — no changes needed.
Build passes clean. No code modified.

Next step: locate or recover STP_WORLD_RULES.txt, PL_SYSTEMS_v1.html, PL_OPS_v3.html, 
PL_BUILD_GUIDE_v2.html and reconcile against the four normalized files.

---

## KNOWLEDGE FILES RECONCILED
Date: 2026-04-19

All four normalized knowledge files rebuilt against the now-complete 11-file source set in knowledge/_sources/.
Previous provisional versions replaced in full.

### Files rewritten

| File | Old lines | New lines |
|---|---|---|
| knowledge/00_canon_v3.md | 351 | 360 |
| knowledge/01_taxonomy.md | 184 | 250 |
| knowledge/02_public_content_rules.md | 358 | 355 |
| knowledge/03_photoshop_hard_rules.md | 321 | 464 |

### Bullet diff per file

**00_canon_v3.md**
- Added STP_WORLD_RULES.txt as primary source in provenance header; removed "not found on disk" warning
- Added world model framing from STP_WORLD_RULES.txt: "world container, not a brand / systems do not blend inside one piece"
- Added binding interpretation for A3 portrait as canonical document surface (STP_WORLD_RULES.txt); IG exports described as secondary
- Added "if trendy → dead / if clever → weak / if quiet/heavy/intentional → correct" to anti-drift rules (STP Universal Laws)
- Added "no silent system changes: propose change → reason → risk → test → version bump" to non-negotiable rules
- All other doctrine unchanged — sourced from PL_CANON_RULES_v3.md and already correct

**01_taxonomy.md**
- Major structural overhaul: previous version conflated three separate classification schemes
- Added STP World Systems A/B/C/D section (from STP_WORLD_RULES.txt): A=Raw Visual, B=Iconography/Myth, C=Paradise Lobby, D=Experiment
- Added PL Content Classification States section (from PL_SYSTEMS_v1.html): A=Event/BANNED, B=Record/BANNED, C=Residue/ALL OUTPUT — this is the primary authoritative definition
- Removed previous System A/B/D definitions (inferred from PUBLIC_CONTENT_SYSTEM.md layers) — superseded by PL_SYSTEMS_v1.html
- PUBLIC_CONTENT_SYSTEM.md Layer A/B/C/D renamed "public content layers" to prevent confusion with world Systems
- Added full status-vs-event table with all allowed and banned phrases (from PL_SYSTEMS_v1.html + PL_OPS_v3.html)
- Added three-check drift detection table from PL_SYSTEMS_v1.html
- Added R-SYS-01/02/03 rules verbatim from PL_SYSTEMS_v1.html
- Added note clarifying why System A/B/C names appear in both world systems and PL classification states
- Extended drift detection now covers System A, System B, decoration, and cosplay bureaucracy vectors
- Template types and CUSTODY/DIRECTIVE sections retained; source updated to include PL_OPS_v3.html

**02_public_content_rules.md**
- Provenance header updated: removed PROJECT_HIERARCHY.md (governance reference, not primary source for this file); confirmed PERSONAL_BRAND_POSITIONING.md listed correctly
- Added "Reconciled against complete source set on 2026-04-19" note
- Content unchanged — was already correctly sourced from PUBLIC_CONTENT_SYSTEM.md and CLIENT_TRANSLATION.md
- Minor: 3 lines shorter due to header tightening

**03_photoshop_hard_rules.md**
- Provenance header updated: now lists PL_OPS_v3.html, PL_BUILD_GUIDE_v2.html, PL_TRAINING_v3.html, STP_WORLD_RULES.txt as sources; removed all "file missing" warnings
- Added complete character style table with exact values for all 6 styles (DIN_INCIDENT through OCR_MICRO) with font, size, tracking, case, color from PL_OPS_v3.html
- Added size scale table: SCALE_A=144px, SCALE_B=20px, SCALE_C=16px, SCALE_D=12px
- Added full stamp system: primary/secondary stamp lists, color/blend/rotation/count specs from PL_OPS_v3.html
- Added 12-word lexicon (GATEWAY/THRESHOLD/ENTRY/EXIT/LEAK/BREACH/SIGNAL/STATIC/PRESSURE/WITNESS/EVIDENCE/HOLD) from PL_OPS_v3.html
- Added full 4-anchor test spec (ANCHOR 1–4 with exact descriptions and pass/fail criteria) from PL_OPS_v3.html
- Added full 45-minute daily execution protocol (MIN 00–05 through MIN 38–45) from PL_OPS_v3.html
- Layer stack updated to PL_BUILD_GUIDE_v2.html naming: 01_FORM_GRID1 (never moves) / 02_CONTENT_GRID2 (moves) — replaces previous 01_IMAGE / 02_TYPE_ADMIN from PL_TRAINING
- Added master PSD setup steps S.01–S.09 with exact grid construction method from PL_BUILD_GUIDE_v2.html
- Added C1 build steps C1.01–C1.10 with exact values from PL_BUILD_GUIDE_v2.html
- Added D1 build steps from PL_BUILD_GUIDE_v2.html
- Added Grid 2 nine-combination table with exact values from PL_OPS_v3.html + PL_BUILD_GUIDE_v2.html
- Added A3 document surface logic from STP_WORLD_RULES.txt; noted IG as secondary output
- Added pairing check section from PL_BUILD_GUIDE_v2.html
- Added OCR rules R-TYP-01 through R-TYP-04 from PL_OPS_v3.html
- Removed all "per PL_OPS" placeholders — no placeholders remain
- Removed all "file not on disk" and "must be reconciled" warnings

### Unresolved source conflicts

One minor conflict: STP_WORLD_RULES.txt (Layer 1) states A3 portrait is the canonical document surface; PL_OPS_v3.html (Layer 2) states "Digital-first. No printer required" with IG as primary output. Resolved per authority order: A3 surface logic is canonical doctrine (00_canon_v3.md), IG 1080×1350px is the current primary production output (03_photoshop_hard_rules.md). Both recorded. No contradiction in practice.

### Build status

ACTIVE_MANIFEST.md — no changes required, all four filenames already correct.
npm run build — clean. Zero errors. Zero warnings. All routes rendered.

---

## KNOWLEDGE FILES RECONCILED — PATCH
Date: 2026-04-20

Surgical patch following full rebuild. No files rewritten — targeted edits only.

### Files patched

**knowledge/01_taxonomy.md** (250 → 233 lines)
- Removed entire `## Public content layers` section (16 lines): Layer A/B/C/D table with purpose descriptions and Recommended ratio line (50%/20%/15%/15%)
- Updated provenance header: `PUBLIC_CONTENT_SYSTEM.md (public content layers, source classes)` → `PUBLIC_CONTENT_SYSTEM.md (source classes)` — source classes section retained as classification data
- All classification content preserved: STP world systems, PL content classification states, drift detection, status vs event, Layer Law, template types, source classes, CUSTODY/DIRECTIVE, event/record/residue, canon/public/client boundary

**knowledge/02_public_content_rules.md** — no changes
- Provenance header inspected: PROJECT_HIERARCHY.md not present. Sources correctly limited to PUBLIC_CONTENT_SYSTEM.md, CLIENT_TRANSLATION.md, PERSONAL_BRAND_POSITIONING.md.

**knowledge/03_photoshop_hard_rules.md** — no changes
- A3 print prep audit: PL_BUILD_GUIDE_v2.html contains zero A3-specific values — that file is entirely IG-production-focused. STP_WORLD_RULES.txt provides "A3 portrait as canonical document surface." PL_OPS_v3.html provides "CMYK conversion only at print output." No further exact values exist in any source. Current Document setup table already captures the complete set of available source values. No invented values added.

### Unresolved source conflicts

None.

### Build status

ACTIVE_MANIFEST.md — no changes required, all four filenames correct.
npm run build — clean. Zero errors. Zero warnings. All routes rendered.

