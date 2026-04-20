# 00_START_HERE

Status: Active
Authority: Binding entrypoint for repository routing and document read order
Version: 1.0
Last updated: 2026-04-20

## Purpose

This file is the operator entrypoint for Paradise Lobby / Stranger Than Paradise.
Use it to determine:
- what to read first
- which file governs which decision
- when to stop because a source is missing
- which system documents extend operations without rewriting canon

This file does not replace higher-authority doctrine.
It routes the operator to the correct authority file.

---

## Core rule

Do not start from convenience.
Start from authority.

If documents appear to conflict:
1. name the conflict explicitly
2. check `knowledge/_sources/PROJECT_HIERARCHY.md`
3. follow the higher source
4. apply the smallest possible fix

If a required source is missing, say so explicitly and stop.

---

## Binding read order

Read only as far as the task requires.
Do not load extra doctrine out of habit.

1. `AGENTS.md`
2. `ACTIVE_MANIFEST.md`
3. `knowledge/_sources/PROJECT_HIERARCHY.md`
4. `knowledge/00_canon_v3.md`
5. `knowledge/01_taxonomy.md`
6. `knowledge/03_photoshop_hard_rules.md`
7. `knowledge/02_public_content_rules.md`
8. `knowledge/04_evals.md`
9. `knowledge/05_commercial_ops.md`
10. `knowledge/06_action_registry.md`
11. `knowledge/07_metadata_schema.md`

Rule: `knowledge/_sources/PROJECT_HIERARCHY.md` is an authority source under `knowledge/_sources/`.
Do not assume a root-level `PROJECT_HIERARCHY.md`.

---

## Mode router

Classify every task as exactly one mode.

| Mode | Use when | Primary files |
|---|---|---|
| REVIEW | Critique of existing work | `00_canon_v3.md`, `01_taxonomy.md`, `04_evals.md` |
| TECHNICAL | Exact how-to in Photoshop, Adobe, or software execution | `03_photoshop_hard_rules.md` |
| SYSTEM_OPS | Repo structure, manifests, prompts, governance docs, registries, schemas | this file, `ACTIVE_MANIFEST.md`, `06_action_registry.md`, `07_metadata_schema.md` |
| COMMERCIAL | Intake, fit, package logic, quoting, licensing, revisions | `05_commercial_ops.md`, `02_public_content_rules.md` |
| PRODUCTION | Building a new case inside the active Paradise Lobby system | `00_canon_v3.md`, `01_taxonomy.md`, `03_photoshop_hard_rules.md` |

Priority:
1. SYSTEM_OPS
2. COMMERCIAL
3. TECHNICAL
4. REVIEW
5. PRODUCTION

If a task mixes modes, choose the highest-priority mode that materially governs the change.

---

## Session gate

SESSION INPUT is required only in:
- REVIEW
- PRODUCTION

SESSION INPUT is not required in:
- SYSTEM_OPS
- TECHNICAL
- COMMERCIAL

Commercial intake uses the intake structure in `knowledge/05_commercial_ops.md`.

---

## Authority map

Use one governing file per decision type.

| Decision type | Governing file |
|---|---|
| World doctrine and canon boundaries | `knowledge/00_canon_v3.md` |
| Classification and drift detection | `knowledge/01_taxonomy.md` |
| Public distribution and client translation | `knowledge/02_public_content_rules.md` |
| Photoshop production and execution values | `knowledge/03_photoshop_hard_rules.md` |
| Evaluation and regression checks | `knowledge/04_evals.md` |
| Commercial intake and offer operations | `knowledge/05_commercial_ops.md` |
| Automation registration and production gating | `knowledge/06_action_registry.md` |
| Asset metadata and naming rules | `knowledge/07_metadata_schema.md` |

Rule: lower-layer operational files may extend workflow, but they may not rewrite canon.

---

## Surface declaration rule

When a task touches outputs, always state:
1. canonical logic
2. working canvas
3. export target
4. print intent yes/no

Canonical surface:
- A3 portrait logic

Allowed working canvases:
- `IG_4X5`
- `REEL_9X16`
- `PRINT_A3`
- `PRINT_A2`
- `WEB_LANDSCAPE`

---

## SYSTEM_OPS operating rule

When changing system files:
- state the reason
- state the risk
- state the test
- state the version bump

Do not introduce duplicate doctrine files.
Do not silently reinterpret an existing rule.
Do not modify `knowledge/00` through `04` unless a direct contradiction forces a minimal fix.

---

## Required outputs

For any system change, report:
- exact files touched
- build status when repo files change
- unresolved conflicts only

For any conflict:
- name the conflicting files
- choose the higher source
- describe the smallest fix

---

## Stop conditions

Stop and report before editing if:
- a required source file is missing
- two active files claim the same domain
- a lower-layer rule tries to overwrite canon
- a contradiction cannot be resolved by hierarchy without rewriting a protected file

If none of the above applies, proceed with the smallest valid fix.
