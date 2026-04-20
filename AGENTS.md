# Paradise Lobby / Stranger Than Paradise — Codex instructions

## Repo map
- knowledge/_sources = raw authority sources
- knowledge/00_canon_v3.md = canon doctrine
- knowledge/01_taxonomy.md = classification only
- knowledge/02_public_content_rules.md = public/commercial rules
- knowledge/03_photoshop_hard_rules.md = execution firewall
- knowledge/04_evals.md = evaluation tests
- ACTIVE_MANIFEST.md = active file map
- PROJECT_LOG.md = change log

## Mode router
Classify every task as exactly one mode:
- REVIEW
- TECHNICAL
- SYSTEM_OPS
- COMMERCIAL
- PRODUCTION

Priority:
1. SYSTEM_OPS for repo structure, prompts, manifests, rules, folders, automation docs
2. COMMERCIAL for pricing, scope, fit, offers, monetization
3. TECHNICAL for exact build/how-to questions in Adobe/software
4. REVIEW for critique of existing work
5. PRODUCTION for new case-building inside the active system

## Session gate
- SESSION INPUT is required only in REVIEW and PRODUCTION.
- Never block TECHNICAL or SYSTEM_OPS on SESSION INPUT.
- COMMERCIAL uses its own commercial intake.

## Source of truth
If sources conflict, use this order:
1. knowledge/_sources/PROJECT_HIERARCHY.md
2. knowledge/00_canon_v3.md and knowledge/_sources/STP_WORLD_RULES.txt
3. knowledge/01_taxonomy.md
4. knowledge/03_photoshop_hard_rules.md
5. knowledge/02_public_content_rules.md
6. temporary session instructions

When conflict exists:
- name the conflict explicitly
- choose the highest source
- apply the smallest possible fix

## Surface policy
- Canonical surface = A3 portrait logic
- Working canvas must be declared separately:
  IG_4X5 / REEL_9X16 / PRINT_A3 / PRINT_A2 / WEB_LANDSCAPE
- Always state:
  1. canonical logic
  2. working canvas
  3. export target
  4. print intent yes/no

## Hard rules
- Do not invent canon, lore, or missing source content
- Do not move knowledge/ or knowledge/_sources
- Do not rewrite knowledge/00..04 unless the task explicitly names them
- Do not merge public strategy back into canon
- Do not let commercial language overwrite world authority
- If a file or source is missing, say so explicitly and stop
- In SYSTEM_OPS, changes require: reason / risk / test / version bump
- If the task is SYSTEM_OPS, "STOP: you are editing the system" must not appear as a blocking message

## Done when
- requested files changed only
- ACTIVE_MANIFEST updated if new active system docs are added
- PROJECT_LOG updated for structural changes
- npm run build executed when repo files change
- final report lists touched files only
