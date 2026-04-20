# 03_photoshop_hard_rules

Status: Active
Authority: Binding for all Photoshop production
Compiled from:
- PL_OPS_v3.html (primary — color, typography, grid, damage, stamps, carousel, anchor test, daily protocol)
- PL_BUILD_GUIDE_v2.html (primary — master PSD setup, layer stack, build steps, case scenarios)
- PL_TRAINING_v3.html (character style specs, font installation, phase sequence)
- STP_WORLD_RULES.txt (document surface format — A3 portrait as canonical surface)
Notes:
- Normalized for manifest compatibility
- Derived from existing project doctrine, not newly invented
- All anchor test, daily protocol, character style specs, and print prep values are now drawn from available sources
- No placeholders remain — all values are exact from sources
- Reconciled against complete source set on 2026-04-19

---

## Standing order

If the document looks designed at any point, identify the element making it look designed and remove it.

**This rule supersedes all other rules.**

---

## Document setup

| Setting | Value |
|---|---|
| Canonical document surface | A3 portrait logic (STP_WORLD_RULES.txt) |
| Primary production output | Instagram 4×5 — 1080×1350px |
| Resolution | 72dpi |
| Color mode | RGB throughout all sessions |
| Print export | CMYK conversion only at print output — never during production |
| Release unit | 1 CASE/DAY = 2 POSTS (CUSTODY + DIRECTIVE). No orphan posters. |
| Build time | 45 minutes per session following the daily execution protocol |

---

## Color materials

Five values only. These are allowed materials — not a palette. No additional colours permitted. Variation comes from process only: scan, damage, generation loss. Do not design with them. Use them.

| Name | Hex | Usage |
|---|---|---|
| PAPER | #E2D9C8 | Background fill. PAPER_BASE layer. Never adjusted. |
| INK | #1C1914 | All primary type, rules, exhibit borders, form structure. Not RGB black. |
| STAMP BLUE | #5B6B8A | Stamps, OCR text, field category labels. These locations only. |
| SCAN GREY | #B8B0A4 | Damage layers, GRID_VISIBLE lines, secondary footer text. |
| VOID WHITE | #F0EBE1 | Redaction bars and clerk correction bars over image or text content only. |

**R-COL-01:** No red. No orange. No pure RGB black (#000000). No colours outside the five above. No exceptions.

**Session setup:** Create swatch group PL_MATERIALS with all five hex values. Delete default swatches on first load. Save as PL_SWATCHES.aco. Load at the start of every session.

---

## Font installation

Install all before any production work. Verify each.

| Font | Variants required | Verification |
|---|---|---|
| DIN 1451 LT Pro | Engschrift + Mittelschrift | Type a word in each at 72px — confirm distinct rendering |
| D-DIN | Regular + Bold | Standard width alternative to DIN 1451 LT Pro Mittelschrift |
| OCR-B | — | Set at 12px — individual characters must be distinct and legible |
| Libre Barcode 128 | — | Type `PL250001D` — must render as barcode, no letterforms visible; if letterforms show, reinstall |

Note: D-DIN and DIN 1451 LT Pro Mittelschrift function as the same institutional voice. Mixing them is permitted — real institutions use whatever was installed on the processing computer.

---

## Size scale

Three sizes only. No other sizes permitted without explicit reason.

| Scale | Size | Use |
|---|---|---|
| SCALE_A | 144px minimum | Hero classification word. One per DIRECTIVE document only. |
| SCALE_B | 20px | Headers, field category labels, directive frame text. |
| SCALE_C | 16px | Form body text, field values. |
| SCALE_D | 12px | OCR-B only. If unreadable at export, increase to 14px maximum. |

---

## Character styles

Build and name one text layer per style in every master template. These are the only six styles in use.

| Style | Font | Size | Tracking | Case | Color | Use |
|---|---|---|---|---|---|---|
| DIN_INCIDENT | DIN 1451 LT Pro Engschrift | SCALE_A (144px+) | +5 | ALL CAPS | INK | Hero word. DIRECTIVE only. One per document. |
| DIN_HEADER | D-DIN Bold | SCALE_B (20px) | +40 | ALL CAPS | INK | Headers and directive frame text. |
| DIN_LABEL | D-DIN Regular | SCALE_C (16px) | +20 | ALL CAPS | STAMP BLUE | Field category labels. |
| DIN_BODY | D-DIN Regular | SCALE_C (16px) | +10 | Sentence case | INK | Field values. |
| OCR_LINE | OCR-B | SCALE_D (12px) | +80 | — | STAMP BLUE or INK | Footer and exhibit tags. |
| OCR_MICRO | OCR-B | SCALE_D (12px) | +120 | — | STAMP BLUE only | Barcode zone, document edges. |

**DIN_INCIDENT test:** Type BREACH at 144px, left-aligned to 72px margin. At 100% zoom: must read as administrative classification label, not poster headline. If it reads as poster — reduce tracking toward 0. Do not reduce the size.

**OCR_LINE test:** Type `PLB-IN/25/0001 // ATT-01 // HASH:[REDACTED]` in OCR-B at 12px, tracking +80, STAMP BLUE, placed 30px from bottom edge. Export JPG 85%. Check on phone — small but visible if you look for it. If it disappears completely, increase to 14px maximum.

**Lexicon test (DIRECTIVE only):** Cover the hero word with your thumb. Does the document still function? If it collapses — add more administrative field content around the word until it stands on its own. Only then does the word earn its size.

---

## OCR rules

**R-TYP-01:** OCR never larger than DIN_LABEL in the same layout.
**R-TYP-02:** OCR lives at document edges only — footer strip, side margin, directly below exhibit image.
**R-TYP-03:** OCR content encodes real data — case number, scan ID, copy count. Not placeholder decoration.
**R-TYP-04:** Standard OCR_LINE format: `PLB-IN/25/0001 // ATT-01 // HASH:[REDACTED]`

---

## Lexicon — 12 locked words

Hero word names a classification state. It does not announce one. If it reads as a statement rather than a label, add more form content around it.

GATEWAY / THRESHOLD / ENTRY / EXIT / LEAK / BREACH / SIGNAL / STATIC / PRESSURE / WITNESS / EVIDENCE / HOLD

CUSTODY documents have no hero word.

---

## Master PSD setup — do once, never repeat

File: `PL_GUIDES_MASTER_IG_v1.psd`

**S.01** — New file: 1080×1350px, RGB, 72dpi, Transparent background.

**S.02** — Create layer PAPER_BASE at absolute bottom. Fill #E2D9C8. This layer never moves, never changes, is never placed inside any group.

**S.03** — Grid 1: View → New Guide Layout. Margins: 72px all sides. Columns: 6, Gutter: 16px. Rows: 12, Gutter: 16px. Confirm.

**S.04** — Grid 1 visible layer (clean line method): View → New Guide Layout again, same margins, Columns: 6 Gutter: 0, Rows: 12 Gutter: 0. Uncheck "Clear Existing Guides" — Grid 1 must stay. This creates boundary-only guides for clean line drawing.

**S.05** — Create group 00_GUIDES. Inside it, create layer GRID1_VISIBLE at 50% opacity.

**S.06** — Line Tool (U), Shape mode, 1px stroke, #B8B0A4, Snap to Guides ON. Draw exactly 7 vertical lines and 13 horizontal lines along boundary-only guides. 20 lines total. No doubles at gutters.

**S.07** — View → Clear Guides. View → New Guide Layout to recreate Grid 1 (margins 72, columns 6 gutter 16, rows 12 gutter 16). GRID1_VISIBLE survives. Boundary-only guides are gone. This is permanent — never repeat.

**S.08** — Create all groups in order top to bottom:

```
05_EXPORT_GUIDES    — carousel crop rectangles, toggle OFF at export
04_COLOR_GRADE      — fixed Curves adjustment, set once, never alter
03_DAMAGE           — one damage signature only, never combined
02_CONTENT_GRID2    — MOVES with Grid 2 offset as one unit
01_FORM_GRID1       — NEVER MOVES — form skeleton locked to Grid 1
00_GUIDES           — GRID1_VISIBLE layer, toggle OFF at export
PAPER_BASE          — absolute bottom, never inside any group
```

**02_CONTENT_GRID2 contains:** all type, stamps, barcodes, OCR strings, exhibit IMAGE_SO, exhibit border, exhibit tag, redaction bar, clerk artifact.

**01_FORM_GRID1 contains:** rule lines, field separators, table borders, structural boxes only.

The form lines (01_FORM_GRID1) simulate the printed template — always in the same position. The content (02_CONTENT_GRID2) simulates the human who filled it in — they never aligned perfectly. The offset between them is institutional realism, not design choice.

**S.09** — Save as `PL_GUIDES_MASTER_IG_v1.psd`. This file is never worked in directly. Every session: Image → Duplicate → save with case name → work in duplicate. Master stays clean indefinitely.

---

## Grid 2 offset rule

Apply a Grid 2 offset to 02_CONTENT_GRID2 each session to simulate misaligned form-filling.

| Axis | Allowed values |
|---|---|
| Horizontal (→ key) | +6px / +8px / +10px |
| Vertical (↓ key) | +6px / +8px / +10px |

Nine valid combinations: 6/6, 6/8, 6/10, 8/6, 8/8, 8/10, 10/6, 10/8, 10/10. Cycle through them in sequence. Never repeat the same pair consecutively. Log values every session. Apply the same offset pair to both C and D within one case.

**How to apply:** Click 02_CONTENT_GRID2 in the layers panel. Move Tool (V), Auto-Select OFF. Press → key X times (logged X value). Press ↓ key Y times (logged Y value). Confirm 01_FORM_GRID1 did not move.

---

## Image treatment baseline

Select and treat the image before opening any template file. Five minutes maximum — never during building.

**IMG.01** — Open source image. Image → Adjustments → Desaturate.

**IMG.02** — Curves (Cmd+M). Top-right anchor: drag down 5–8px (pulls highlights toward paper tone). Bottom-left anchor: drag up 3–5px (lifts shadows off pure black). Small moves. The image should feel processed and flattened — not dramatically filtered.

**IMG.03** — Export as TIFF: `PL_25_0001_IMG_01.tif`. Place Embed into both C and D templates as Smart Object. One treated source image per case.

**Image test:** Does this image function as evidence of something? Or because it looks good? If only the second — find a different image.

**What works:** Institutional corridors, technical infrastructure, building facades (frontally shot, overcast light, no signage), objects on surfaces photographed like evidence.

**What does not work:** Landscapes, golden hour, portraits, dramatic angles, anything where the composition was a deliberate aesthetic choice.

**Image bank:** Maintain folder `PL_REFS/IMAGES` with at least ten pre-selected images. When no image passes the test in five minutes — pull from here. Build the bank outside of session time.

---

## CUSTODY before DIRECTIVE

Always. The institution files before it acts.
Build all C templates before opening a D template.
C templates have no hero word — they are the institution speaking to itself.

---

## CUSTODY build sequence — C1 (Intake Sheet)

Duplicate master. Save as `STP_C1_PL250001.psd`. Confirm all groups present. Log Grid 2 offset before starting.

**C1.01** — 01_FORM_GRID1 first. Draw 2px top rule line. Draw field separator lines (1px #1C1914 primary, 0.5px #B8B0A4 secondary). Draw structural boxes and table outlines. Snap everything to Grid 1 guides. Lock this group — do not touch again this session.

**C1.02** — 02_CONTENT_GRID2. Header text: D-DIN Bold, 20px, tracking +40, ALL CAPS, #1C1914. Text: `INTAKE DOCUMENT — CLASSIFICATION PENDING`. Left-aligned to 72px margin.

**C1.03** — Three primary fields: CASE NO. / DATE / CLASSIFICATION. Labels in DIN_LABEL. Leave all three values completely blank — no dash, no dot, nothing.

**C1.04** — Six field labels in right column or lower zone. Fill two maximum with values in DIN_BODY. At least two must have absolutely no value. Example field states: STATUS → PENDING REVIEW / HANDLER → blank / RECEIVED BY → blank / PRIORITY → UNASSIGNED / ORIGIN → blank / REVIEWED BY → blank.

**C1.05** — Place Embedded TIFF as IMAGE_SO. Scale to exhibit zone. Add 1px #1C1914 rectangle outline as exhibit border, 4px inset, no fill. Below image: `EXHIBIT 01 // REF: PL-25-0001-C` in OCR_LINE (OCR-B, 12px, tracking +80, #5B6B8A). Draw #F0EBE1 rectangle over top 25–30% of image as redaction bar.

**C1.06** — Clerk artifact: mis-type one field label (example: CLASSIFCATION). Place narrow #F0EBE1 bar over it. Retype correctly beside or below. Correction must be visible. Log which artifact was used.

**C1.07** — Barcode: type `PL250001C` in Libre Barcode 128 font, #1C1914, approximately half-canvas width. Place in lower third.

**C1.08** — Stamp: `RECEIVED — UNCLASSIFIED` in DIN_HEADER, #5B6B8A. Rectangle border same colour 1.5px stroke no fill. Group text + border. Rotate –3°. Blend mode Multiply, opacity 90%.

**C1.09** — OCR footer: 30px from bottom edge, left margin. OCR-B, 12px, tracking +80, #5B6B8A. Text: `PLB-IN/25/0001 // ATT-01 // HASH:[REDACTED]`

**C1.10** — Grid 2 offset: click 02_CONTENT_GRID2 group. Move Tool, Auto-Select OFF. Right arrow X times, down arrow Y times per logged values. Confirm 01_FORM_GRID1 did not move.

**C2 (Chain of Custody):** Table layout with custody transfer rows. At least one row with blank recipient field. Smaller image, less prominent. Clerk artifact mandatory. Kill-switch. Anchor test. Log.

**C3 (Archive Card):** Most minimal. Dominant element is large OCR-B case file ID — not a lexicon word. Small polaroid-proportion image. Maximum two redaction bars. Maximum two stamps. Clerk artifact. Kill-switch. Anchor test. Log.

---

## DIRECTIVE build sequence — D1 (Declaration)

Duplicate master. Save as `STP_D1_PL250001.psd`. Same full layer stack. Apply same Grid 2 offset as C1 for this case.

**D1.01** — 01_FORM_GRID1: structural rule lines and form boxes. Lock it.

**D1.02** — 02_CONTENT_GRID2: header (`CLASSIFICATION DIRECTIVE — PL-25-0001-D`), admin fields (REF filled with PL-25-0001, DATE and ISSUED BY blank), hero word at 144px+ in DIN_INCIDENT (one word from the 12-word lexicon), same treated image with tighter crop and more aggressive redaction (top 40–50%), exhibit border and tag, stamp (`HOLD — REVIEW PENDING`), barcode (`PL250001D`), OCR footer.

**D1.03** — Apply same Grid 2 offset to 02_CONTENT_GRID2.

**D1.04** — Same damage signature as C1. Kill-switch. Anchor test. Log removals. Export all four slides named D_S1 through D_S4.

**D2 (Notice of Restriction):** No hero word at SCALE_A. Authority from boxed directive — 1px INK hard rectangle, DIN_HEADER text inside: `ACCESS TO THIS RECORD HAS BEEN SUSPENDED` or equivalent. No reason given. No duration. Image more degraded than C templates. Kill-switch. Anchor test. Log.

**D3 (Breach Log):** One physical or physically-sourced cutout or extraction. Find a high-res scan of a torn paper edge or cut mark. Apply as layer mask on IMAGE_SO, removing an irregular section. The absence is the content. Must read as something extracted — not as collage. Kill-switch. Anchor test. Log.

**Thumb test (all D templates):** Cover the hero word. Does the document still function? If no — add administrative form content until it does. Then uncover.

---

## Case numbering

| Usage | Format | Example |
|---|---|---|
| Document references and OCR strings | `PL-YY-XXXX-C` or `PL-YY-XXXX-D` | `PL-25-0001-C` |
| Barcode rendering (Libre Barcode 128) | `PLYYXXXXC` or `PLYYXXXXD` | `PL250001C` |
| OCR footer string | `PLB-IN/YY/XXXX // ATT-01 // HASH:[REDACTED]` | `PLB-IN/25/0001 // ATT-01 // HASH:[REDACTED]` |
| File string only | `PLB-IN/25/0001` | Never as readable hero text, never as a stamp |

PARADISE never appears as a readable word. Embedded in file strings only.

**Posting order:** Decide C-first or D-first before opening Photoshop. Log it. Minimum 4 hours between the two posts in a case pair. Alternate the order each case.

---

## Stamp system

| Property | Value |
|---|---|
| Primary color | STAMP BLUE (#5B6B8A) |
| Secondary color | INK (#1C1914) |
| Blend mode | Multiply only |
| Opacity | 85–95% |
| Rotation | ±4° maximum |
| Per document | One primary maximum. Two secondary maximum. |

**Primary stamps (one only per document):**
- HOLD — REVIEW PENDING
- DENIED — INSUFFICIENT DISCLOSURE
- NO FURTHER ACTION
- RECEIVED — UNCLASSIFIED
- SEIZURE ORDER ACTIVE

**Secondary stamps (max two per document):**
- COPY [N] OF [N]
- INTAKE ACCEPTED
- MANUAL REVIEW REQUIRED
- DATE REDACTED
- FIELD INCOMPLETE

---

## Damage signatures

Apply one damage signature per document. Apply the same signature to both C and D of the same case pair — same institutional chain position. Vary across consecutive cases. Never repeat the same signature three sessions in a row.

**SIG_A — THERMAL FADE**
Gradient map layer, Soft Light blend, irregular brush mask (not a linear gradient), 40–60% opacity. Highlights toward #E2D9C8. Implies: receipt printer, disposable. The institution did not expect this document to last.

**SIG_B — GENERATION LOSS**
New blank layer in 03_DAMAGE. Filter → Noise → Add Noise. Gaussian, Monochromatic, 2–4%. Set to Soft Light blend, 20% opacity. Alternative: High-pass → Threshold → Multiply layer at 15–30%. Implies: copied and recopied, original is elsewhere.

**SIG_C — PHYSICAL SINGLE**
High-res scan of fold crease or torn edge. Import as Smart Object, Multiply blend, mask to document boundary. Must read as something that happened to the document, not something added to it. When SIG_C is active, nothing else runs in 03_DAMAGE.

**Damage test:** Toggle on/off comparison. Difference must be perceptible but not dramatic. If dramatic — reduce opacity. If invisible — increase until just perceptible.

---

## Clerk artifact

Mandatory on every CUSTODY document. Not in DIRECTIVE.
One clerk artifact per document. Log which artifact was used. Do not repeat consecutively.

| Type | Method |
|---|---|
| Mis-typed field | Type label with typo (CLASSIFCATION). Cover with narrow VOID_WHITE bar. Retype correctly beside or below. |
| Crossed-out value | Strike through a field value with thin INK line. Write replacement below: HANDLER: [strikethrough] P. VAAN → J. MARSH. |
| Wrong reference | Footer says ATT-02 but document is clearly ATT-01. Nobody corrected it. |
| Double entry | One field with two values stacked — first partially obscured by VOID_WHITE, second written below. |

Rule: One good clerk artifact is stronger than five stylish damage gestures.

---

## Kill-switch

Run on every document before export. No exceptions.

Read every text element. If any line explains what happened or why: delete it.
Replace with `[REDACTED]`, `PENDING`, `[BLANK]`, a blank field, or a routing/status substitute.

**This rule overrides all aesthetic decisions.**

One explanatory sentence collapses System C into System B. Log what was removed.

---

## Anchor test

Run on every document before export. All four anchors required.

**ANCHOR 1 — SYSTEM WEIGHT**
Does it feel like one page of many, or a complete piece?
Correct: one page of many. An empty field, an unresolved stamp, a file number implying more files.

**ANCHOR 2 — TEMPERATURE**
Administratively cold — not stylishly cold. The temperature of a filing cabinet nobody has opened in three years.
Any element suggesting expression or design warmth — identify and remove it.

**ANCHOR 3 — SYSTEM LEGIBLE**
Can a viewer seeing two consecutive case pairs begin to understand they are looking at an institution — without explanation?
If no: case number visibility or pairing logic is failing.

**ANCHOR 4 — NO AESTHETICS**
Is there anything existing for aesthetic reasons only? If yes — remove it. Not reduce. Remove.
Then run the kill-switch: is there any line that explains what happened? Replace with [REDACTED] or PENDING.

Log: element removed and why.

---

## Carousel export logic

One canvas per document. No artboards. Carousel crops are labelled rectangle shapes inside 05_EXPORT_GUIDES — built once per template, reused every session.

**CAR.01** — Toggle ON 05_EXPORT_GUIDES. Draw three labelled rectangle outlines (bright stroke, no fill): CROP_S2_HEADER (header + stamp zone), CROP_S3_EXHIBIT (tight around image + exhibit tag), CROP_S4_MACHINE (barcode + OCR footer zone). Build once, reuse every session.

**SLIDE 1** — Full document. Toggle OFF 05_EXPORT_GUIDES and 00_GUIDES. File → Export As. JPG quality 85%. Name: `PL_25_0001_C_S1.jpg`. Feed view — what the viewer decides to swipe from.

**SLIDE 2** — Header crop. Square output. CROP_S2_HEADER zone. Field labels and stamp readable for the first time. Name: `PL_25_0001_C_S2.jpg`.

**SLIDE 3** — Exhibit crop. CROP_S3_EXHIBIT zone. Exhibit border visible. Tag visible. Redaction bar in frame. Name: `PL_25_0001_C_S3.jpg`.

**SLIDE 4** — Machine layer. CROP_S4_MACHINE zone. Barcode, OCR string, any secondary stamps. Name: `PL_25_0001_C_S4.jpg`.

**Slide 5 (optional)** — Preview crop of the partner document — not full. Creates connection between posts.

**Crop test:** Do the carousel crops reveal something worth seeing in the detail? If Slide 4 has nothing worth seeing — machine layer is too thin. Add more OCR content or barcode detail before next session.

Export spec: JPG quality 85%.

---

## Daily execution — 45-minute protocol

Follow this sequence exactly. Log before opening Photoshop.

| Time | Action |
|---|---|
| MIN 00–05 | Log: case number, date, template pair, posting order, damage signature, Grid 2 offset pair. Open CUSTODY template. |
| MIN 05–10 | Replace IMAGE_SO. Baseline treatment (desaturate + curves). Image test: evidence or atmosphere? If atmosphere — find another. 5 minutes maximum. |
| MIN 10–15 | Set all OCR strings to current case number. Complete field content. Apply Grid 2 offset. Leave minimum two fields blank. Add clerk artifact. |
| MIN 15–20 | Open DIRECTIVE. Replace IMAGE_SO. Set hero word. Set stamp. Set OCR strings. Apply same Grid 2 offset values. |
| MIN 20–28 | Toggle damage signature on both. Same signature per case pair. Assess: institutional information or just texture? If texture — reduce opacity. Add one reality artifact to each document. |
| MIN 28–38 | Run kill-switch on both. Find any line that explains. Replace with [REDACTED] or PENDING. Run full anchor test (all 4 anchors). ANCHOR 4: remove the element that exists for aesthetic reasons. Export all carousel slides. Toggle off 05_EXPORT_GUIDES and 00_GUIDES. |
| MIN 38–45 | Log completion: element cut and why, session time. Post in decided order. Minimum 4 hours between posts. |

---

## Production log — mandatory, one entry per session

| Field | Value |
|---|---|
| Case number | PL-YY-____ |
| Date | |
| Templates used | C__ + D__ |
| Grid 2 offset | X: __px / Y: __px |
| Lexicon word | |
| Stamp used | |
| Damage signature | SIG_A / SIG_B / SIG_C |
| Reality artifact | |
| Clerk artifact | |
| Posting order | C first / D first |
| Kill-switch | Line removed and replaced with: |
| Anchor 4 | Element removed: |
| Session time | Over / under 45 min by: |

Log every session before opening Photoshop. The log is not optional.

---

## Pairing check

Before posting, view C and D Slide 1 side by side.

- Same institution, different departments — related but not identical
- Case number PL-YY-XXXX visible in OCR footer of both
- Same image world, different document behavior
- Neither document explains the other
- Together they raise more questions, not fewer

Post in logged order. Minimum 4 hours gap between posts. No explanatory caption — case string only or nothing at all. Carousel order always S1 first, then S2, S3, S4. Never a detail crop first.

---

## Standing rules — all sessions

| Rule | Constraint |
|---|---|
| R.01 | If the document looks designed, remove one element. Absolute. Supersedes everything. |
| R.02 | Build CUSTODY before DIRECTIVE. Every session. |
| R.03 | One damage signature per document. Never combined. |
| R.04 | One primary stamp per document. Two secondary maximum. |
| R.05 | PARADISE never appears as a readable word. File strings only. |
| R.06 | Minimum two blank fields per CUSTODY document. |
| R.07 | OCR never larger than DIN_LABEL in the same layout. |
| R.08 | Five colours only. No red. No orange. No pure RGB black (#000000). |
| R.09 | Image must function as evidence. If only atmosphere — find another. |
| R.10 | Log every session before opening Photoshop. |
| R.11 | One clerk artifact per CUSTODY document. Logged every session. |
| R.12 | Kill-switch before every export. One explanatory line = System B. Remove it. |
| R.13 | 02_CONTENT_GRID2 is the only group that moves. 01_FORM_GRID1 never moves. |
| R.14 | No artboards. One canvas. Carousel crops as layer rectangles in 05_EXPORT_GUIDES only. |
| R.15 | Minimum two fields incomplete on every CUSTODY document. |
