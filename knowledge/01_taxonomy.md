# 01_taxonomy

Status: Active
Authority: Binding for classification decisions
Compiled from:
- PL_SYSTEMS_v1.html (primary — System A/B/C content classification states)
- STP_WORLD_RULES.txt (STP world system definitions A/B/C/D)
- PL_CANON_RULES_v3.md (Layer Law, CUSTODY/DIRECTIVE)
- PL_OPS_v3.html (status vs event, template types)
- PL_TRAINING_v3.html (template C1–C3, D1–D3)
- PUBLIC_CONTENT_SYSTEM.md (source classes)
Notes:
- Normalized for manifest compatibility
- Derived from existing project doctrine, not newly invented
- Previous version inferred System A/B/D from PUBLIC_CONTENT_SYSTEM.md because PL_SYSTEMS_v1.html was unavailable.
  Now rebuilt from PL_SYSTEMS_v1.html as primary source. Previous A/B/D definitions are superseded.
- Three separate classification schemes operate in this project. They are defined separately below and must not be conflated.
- Reconciled against complete source set on 2026-04-19

---

## World layer model

| Layer | Name | Role |
|---|---|---|
| STP | World container | Defines the world itself. |
| Paradise Lobby | Canonical processing layer | Strict production and archive. |
| Public content | Distribution layer | Dossier-based output. |
| Personal brand | Commercial front door | Hireable identity. |
| Client translation | Monetizable application | Translated delivery. |

That separation must be preserved. Lower layers cannot rewrite higher ones.

---

## STP world systems

Source: STP_WORLD_RULES.txt.
These classify which creative mode a piece operates in within the Stranger Than Paradise world.
Pick one per piece. Systems do not blend inside one piece.

| System | Name | Definition |
|---|---|---|
| A | Raw Visual / Underground | Impact and spectacle allowed. Beauty/polish allowed. Must not be trendy. This is the event itself. |
| B | Iconography & Myth | Recurring archetypes. Repetition > explanation. Timeless > trendy. Symbols earn meaning through reuse, not through cleverness. |
| C | Paradise Lobby | Administrative processing layer. Classification, delay, denial, registration, indifference. Never the event. What happens AFTER the event. |
| D | Experiment / Breach | Tests and failures. Document what was tested and learned. If it keeps working, it graduates into a system. No polish required. |

**Paradise Lobby operates exclusively in STP System C.** Systems A and B define what the project is not. System D is for unresolved experimental work.

Universal law: No explanation inside the work. If trendy → dead. If clever → weak. If quiet/heavy/intentional → correct.

---

## PL content classification states

Source: PL_SYSTEMS_v1.html.
These are the content filter applied within Paradise Lobby to evaluate document behavior.
Every element of every document is classified as one of these three states.
Only one is valid for PL production.

| State | Name | Definition | Verdict |
|---|---|---|---|
| System A | Event | The document creates or announces something. Points forward in time. Something is happening or will happen. Institution is performing for the viewer. | BANNED — DO NOT PRODUCE |
| System B | Record | The document describes something that happened. Points backward. Coherent reconstruction of events is possible from the content. | BANNED — DO NOT PRODUCE |
| System C | Residue | The document is the administrative trace of a process the institution could not resolve. Points nowhere. Reconstruction fails. | ALL PARADISE LOBBY OUTPUT |

**R-SYS-01:** Paradise Lobby operates exclusively in System C. Always.
**R-SYS-02:** Systems A and B are defined to recognise drift — not because you will intentionally use them.
**R-SYS-03:** A single line of System A or B content in an otherwise correct document invalidates the document. Find it and remove it.

Note: These content classification states share names with STP World Systems (A/B/C/D) but describe different things. STP World Systems classify creative mode. PL content classification states classify document behavior. They are consistent: in PL, System C behavior (residue) corresponds to operating within STP World System C (Paradise Lobby).

---

## Drift detection — three checks

Run when something in a document feels wrong.

| Check | If YES |
|---|---|
| Does any part of the document announce, invite, or point toward a future event or outcome? | SYSTEM A — remove it. |
| Can a viewer reconstruct a coherent sequence of events from the document's content — even partially? | SYSTEM B — remove it. |
| Are the viewer's questions multiplying rather than resolving as they read? | SYSTEM C — correct. |

---

## Status vs event — critical distinction

| Text | Allowed | Rule |
|---|---|---|
| PENDING REVIEW | Yes | Implies indefinite continuation, no resolution |
| ON HOLD | Yes | Implies indefinite continuation |
| SUSPENDED | Yes | Implies indefinite continuation |
| UNASSIGNED | Yes | Implies indefinite continuation |
| ROUTED | Yes | Implies indefinite continuation |
| RETURNED | Yes | Implies indefinite continuation |
| HOLD — REVIEW PENDING | Yes | Implies indefinite continuation |
| CLASSIFICATION: PENDING | Yes | Implies indefinite continuation |
| will be completed within 30 days | No | Specific future action, finite timeline — System A |
| assessment follows | No | Promises a future outcome — System A |
| you are invited to | No | Addresses viewer, creates event — System A |
| we will notify you | No | Future outcome — System A |
| next steps include | No | System A |
| review commences [date] | No | Specific future action — System A |

Rule: Administrative status is allowed if it implies indefinite continuation without resolution. It is banned if it implies a specific future action, deadline, or outcome.

---

## Layer law (System C only)

### L1 — EVENT (optional)
Imported source material: portrait fragment, object, site fragment, scene-derived image, altered still from motion material, merged scene evidence, source image trace.

### L2 — SYSTEM (mandatory)
Administrative logic: forms, codes, classifications, routing, denial, copy marks, OCR, machine strings, field structure, stamps, evidence labeling.

### L3 — BREACH (rare)
Human failure or accidental interference: correction bars, scratches, folds, tape, typing mistakes, handling marks, print distortion, rescan slippage.

### Rule
L2 must dominate.
If L1 dominates, the piece drifts out of System C.
If L3 starts behaving like style, remove it.

---

## Template types

All canonical pieces are one of two template classes.

**Rule: CUSTODY before DIRECTIVE. Always. The institution files before it acts.**

### CUSTODY templates (C-class)
The institution speaking to itself. No hero word. Administrative record.

| Template | Name | Key behavior |
|---|---|---|
| C1 | Intake Sheet | Header block, case fields, exhibit image, barcode, primary stamp, minimum two blank fields, clerk artifact mandatory |
| C2 | Chain of Custody | Table layout with custody transfer rows; at least one blank recipient field |
| C3 | Archive Card | Most minimal; dominant element is large OCR-B file ID — not a lexicon word |

### DIRECTIVE templates (D-class)
The institution acting outward. Hero word at SCALE_A where specified.

| Template | Name | Key behavior |
|---|---|---|
| D1 | Declaration | Hero word present at 144px+; must be surrounded by administrative field content; thumb-test required |
| D2 | Notice of Restriction | No hero word at scale; authority from boxed directive text; no reason given, no duration |
| D3 | Breach Log | Physical or physically-sourced extraction/cutout; absence is the content; must read as extracted, not as collage |

**Release unit:** 1 CASE = 1 C-class + 1 D-class. No orphan posters.

---

## Source classes

All content begins with one of three source classes. Applies across all systems.

**SUBJECT** — Portrait, body fragment, face crop, fashion-adjacent figure, witness-like image.

**SITE** — Drone frame, corridor, street fragment, facade, infrastructure, environmental evidence.

**OBJECT** — Tool, garment, tag, label, package, surface, artifact, physical insert.

Rule: A viewer should be able to identify the source class within seconds.

---

## CUSTODY vs DIRECTIVE distinction

| Class | Function | Relation to case |
|---|---|---|
| CUSTODY | Institution receiving, filing, holding, routing | Records what arrived |
| DIRECTIVE | Institution acting, classifying, suspending, denying | Responds to what was processed |

A case that has not been filed cannot be directed. CUSTODY is always first.

---

## Event vs record vs residue

| Concept | What it is | Status in PL |
|---|---|---|
| Event | Something that happened in the world | Source material only (L1, optional) — must not dominate |
| Record | Coherent institutional description of events | BANNED — System B behavior |
| Residue | Administrative trace of an unresolved process | ALL PL OUTPUT — System C behavior |

The work is the residue of processing, not the record of the event.

---

## Canon vs public release classification

| Type | What it is | Governed by |
|---|---|---|
| Canonical piece | Single resolved canonical surface (one C or one D document) | 00_canon_v3.md |
| Public release | Distribution container sequencing one or more canonical pieces | 02_public_content_rules.md |
| Client output | Translated application — informed by system, not trapped in it | 02_public_content_rules.md §commercial bridge |

Rule: Classify before starting. Misclassification causes drift. Do not adjust doctrine to fit the piece.

---

## Extended drift detection

A piece is drifting from System C if any of the following are true.

**Toward System A (event/announcement drift):**
- any part announces, invites, or points toward a future event or outcome
- institution appears to be performing for or communicating to an audience
- timeline or deadline language present
- "we will" language present

**Toward System B (record/reconstruction drift):**
- viewer can reconstruct what happened, even partially
- subject is fully identified
- causal explanation present ("denied due to...")
- all fields complete with coherent sequential data
- time + action + subject all present in one passage

**Toward decoration:**
- L3 elements (damage/breach) behaving like style
- friction is present but looks added for mood
- surface reads as designed rather than processed

**Toward cosplay bureaucracy:**
- administrative forms present but no identifiable processed case
- work feels like aesthetic paperwork rather than institutional residue
- it reads as "official-looking" without something incomprehensible being processed

**Drift response:** apply anti-drift rules from 00_canon_v3.md. Do not adjust the doctrine to fit the piece.
