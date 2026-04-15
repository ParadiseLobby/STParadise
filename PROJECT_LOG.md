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
