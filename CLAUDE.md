# CLAUDE PROJECT RULES

- Read `PROJECT_LOG.md` before any work.
- After every approved pass, update `PROJECT_LOG.md` with:
  - files changed
  - what changed
  - what remains for later
- If `PROJECT_LOG.md` and the repo conflict, stop and report instead of guessing.

## Governance layer

This project operates under the Paradise Lobby operating system architecture.

Key files:
- `ACTIVE_MANIFEST.md` - single source of truth for active authority files
- `knowledge/00_START_HERE.md` - routing entrypoint for system use
- `knowledge/04_evals.md` - evaluation set for testing the system after changes
- `.claude/skills/` - modular Claude Code playbooks, loaded on demand
- `knowledge/_archive/` - deprecated files, not active authority

## Mode routing

Before executing any task, classify it as exactly one mode:
- REVIEW
- TECHNICAL
- SYSTEM_OPS
- COMMERCIAL
- PRODUCTION

Rules:
- REVIEW and PRODUCTION require session-specific intake when the task needs it
- TECHNICAL and SYSTEM_OPS do not require session intake
- COMMERCIAL does not rewrite canon and should stay inside commercial/public boundaries
- Anti-drift enforcement applies in REVIEW and PRODUCTION
- SYSTEM_OPS may change structure, manifests, routing, schemas, and process docs without triggering anti-drift blocking language

## Authority rule

Use `ACTIVE_MANIFEST.md` first to determine which files are active.
If sources conflict, follow the active authority order defined by the repo system.
Do not guess. Do not invent missing source content.