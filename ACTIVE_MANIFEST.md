# Paradise Lobby — Active Authority Manifest

Last updated: April 2026
Maintainer: B

This file is the single source of truth for which documents hold 
authority in the Paradise Lobby operating system. When any rule, 
skill, or Claude session references "canon" or "the rules", the 
answer is the version listed here — not any other file with a 
similar name.

## Active authority files

Exactly one file per domain is ACTIVE. All others are DEPRECATED 
or ARCHIVED and must be ignored by Claude during normal operation.

| Domain               | Active file                        | Version | Location           | Supersedes              |
|----------------------|------------------------------------|---------|--------------------|-------------------------|
| World canon          | 00_canon_v3.md                     | 3.0     | project knowledge  | canon v2.0, v1.0        |
| Taxonomy             | 01_taxonomy.md                     | 1.0     | project knowledge  | —                       |
| Public content       | 02_public_content_rules.md         | 1.0     | project knowledge  | —                       |
| Photoshop craft      | 03_photoshop_hard_rules.md         | 1.0     | project knowledge  | —                       |
| Evals                | 04_evals.md                        | 1.0     | project knowledge  | —                       |
| Core constitution    | (Project A instructions on Claude) | 1.0     | claude.ai Project  | previous prompt version |

## Active skills (.claude/skills/)

These skills are live and invokable. If a skill folder exists but is 
not listed here, it is not considered active.

| Skill name            | Purpose                                          | Status  |
|-----------------------|--------------------------------------------------|---------|
| canon-review          | Score visuals against System C canon             | ACTIVE  |
| photoshop-technique   | Explain Photoshop workflows with exact values    | ACTIVE  |
| public-dosier         | Build or review public content releases          | ACTIVE  |
| ui-ux-pro-max         | UI/UX design intelligence across stacks          | ACTIVE  |
| system-ops            | Work on the system itself without anti-drift     | PENDING |

## Archived files

Files in `knowledge/_archive/` or anywhere marked DEPRECATED are 
kept for historical reference only. Claude must not treat them as 
authoritative.

Currently archived: (none yet)

## Governance rules

1. If a file claims authority for a domain not listed here as 
   active, that file is NOT active. Flag it and ignore its rules.
2. If two files claim the same domain as active, stop work. Do not 
   guess which one to follow. Ask which is current and resolve by 
   version bump before continuing.
3. When bumping a version: update the file's header, update this 
   manifest, move the superseded file to `knowledge/_archive/`, 
   log the change in PROJECT_LOG.md.
4. This manifest itself is versioned by its "Last updated" date. 
   Any change to this file gets a PROJECT_LOG entry.

## Change log

- April 2026: initial manifest created. Consolidates authority after 
  migration from monolithic prompt to mode-routed system. Skills table 
  corrected to match on-disk state: public-dosier (on-disk spelling), 
  ui-ux-pro-max added as ACTIVE, system-ops listed as PENDING.
