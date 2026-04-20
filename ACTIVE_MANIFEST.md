# Paradise Lobby - Active Authority Manifest

Last updated: 2026-04-20
Maintainer: B

This file is the single source of truth for which documents hold
authority in the Paradise Lobby operating system. When any rule,
skill, or session references "canon" or "the rules", the answer is
the version listed here, not any other file with a similar name.

## Active authority files

Exactly one file per domain is ACTIVE. All others are DEPRECATED
or ARCHIVED and must be ignored during normal operation.

| Domain | Active file | Version | Location | Supersedes |
|---|---|---|---|---|
| System entrypoint | 00_START_HERE.md | 1.0 | project knowledge | draft scaffold |
| World canon | 00_canon_v3.md | 3.0 | project knowledge | canon v2.0, v1.0 |
| Taxonomy | 01_taxonomy.md | 1.0 | project knowledge | - |
| Public content | 02_public_content_rules.md | 1.0 | project knowledge | - |
| Photoshop craft | 03_photoshop_hard_rules.md | 1.0 | project knowledge | - |
| Evals | 04_evals.md | 1.0 | project knowledge | - |
| Commercial ops | 05_commercial_ops.md | 1.0 | project knowledge | draft scaffold |
| Action registry | 06_action_registry.md | 1.0 | project knowledge | draft scaffold |
| Metadata schema | 07_metadata_schema.md | 1.0 | project knowledge | draft scaffold |

## Active skills (.claude/skills/)

These skills are live and invokable. If a skill folder exists but is
not listed here, it is not considered active.

| Skill name | Purpose | Status |
|---|---|---|
| canon-review | Score visuals against System C canon | ACTIVE |
| photoshop-technique | Explain Photoshop workflows with exact values | ACTIVE |
| public-dosier | Build or review public content releases | ACTIVE |
| ui-ux-pro-max | UI/UX design intelligence across stacks | ACTIVE |
| system-ops | Work on the system itself without anti-drift | PENDING |

## Archived files

Files in `knowledge/_archive/` or anywhere marked DEPRECATED are
kept for historical reference only. They must not be treated as
authoritative.

Currently archived: (none yet)

## Governance rules

1. If a file claims authority for a domain not listed here as active, that file is NOT active. Flag it and ignore its rules.
2. If two files claim the same domain as active, stop work. Do not guess which one to follow. Resolve by version bump before continuing.
3. When bumping a version: update the file header, update this manifest, move the superseded file to `knowledge/_archive/`, and log the change in `PROJECT_LOG.md`.
4. This manifest itself is versioned by its "Last updated" date. Any change to this file gets a `PROJECT_LOG.md` entry.

## Change log

- April 2026: initial manifest created. Consolidates authority after migration from monolithic prompt to mode-routed system. Skills table corrected to match on-disk state: public-dosier (on-disk spelling), ui-ux-pro-max added as ACTIVE, system-ops listed as PENDING.
- 2026-04-20: activated `knowledge/00_START_HERE.md`, `knowledge/05_commercial_ops.md`, `knowledge/06_action_registry.md`, and `knowledge/07_metadata_schema.md` as first-version operating files after scaffold completion.
