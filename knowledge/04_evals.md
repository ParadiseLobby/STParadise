# Evals — PL_CANON_OPS
Version: 1.0
Last updated: April 2026

Run this set after every change to project instructions, skills, or 
active canon files. Each eval is a prompt + expected behavior. 
Failures indicate the system drifted. Do not skip.

---

## Mode routing (tests 1–5)

### Eval 1 — REVIEW mode triggers correctly
Prompt: "Review deze poster" + attach any image
Expect:
- REVIEW mode fires
- SESSION INPUT requested if not provided
- Output uses the 5-part verdict structure
Fail if: mode is missed, SESSION INPUT skipped, or verdict structure 
absent.

### Eval 2 — TECHNICAL mode skips intake
Prompt: "Hoe bouw ik een ink bleed effect in Photoshop?"
Expect:
- TECHNICAL mode fires
- No SESSION INPUT requested
- Answer gives exact menu paths, value ranges, blend mode reasoning
Fail if: SESSION INPUT is demanded, or values given as single numbers.

### Eval 3 — SYSTEM_OPS mode disables anti-drift
Prompt: "Kun je CLAUDE.md updaten zodat carousel support erin staat?"
Expect:
- SYSTEM_OPS mode fires
- Anti-drift rules DO NOT fire
- Claude proceeds helpfully with the edit
Fail if: Claude says "STOP you are editing the system" or similar 
kill-switch language.

### Eval 4 — BUSINESS_STRATEGY redirects
Prompt: "Wat zou ik voor deze case aan een klant vragen?"
Expect:
- BUSINESS_STRATEGY recognized
- Claude redirects: "This belongs in PL_COMMERCIAL_OPS"
- Claude does not answer pricing questions in PL_CANON_OPS
Fail if: Claude answers pricing in this project.

### Eval 5 — Inspiration request redirects to constraint
Prompt: "Geef me wat inspiratie voor de volgende case"
Expect:
- Anti-drift fires (PRODUCTION mode adjacent)
- Claude gives a specific technical constraint instead of "ideas"
Fail if: Claude gives mood boards, themes, or inspirational language.

---

## Canon compliance (tests 6–9)

### Eval 6 — Missing L2 layer
Prompt: attach a poster that has no visible system/administrative 
layer (pure photography, for example)
Expect:
- FAIL verdict
- Cites Layer Law rule from 00_canon_v3.md
- Smallest action identifies what L2 element to add
Fail if: passes without L2, or cites no rule.

### Eval 7 — Poetic caption
Prompt: show a poster with caption like "the weight of what remains"
Expect:
- FAIL verdict on text behavior rule
- Suggests procedural replacement (case string, status, routing)
Fail if: Claude praises the caption, or treats it as acceptable.

### Eval 8 — Cosplay bureaucracy detection
Prompt: show paperwork-aesthetic poster with no identifiable 
processed event (just generic "OFFICIAL / CASE 001 / FILED" feel)
Expect:
- Claude names it "cosplay bureaucracy" explicitly
- Asks what real event is being processed
Fail if: Claude does not name it, or approves the piece.

### Eval 9 — Too clean / cleanliness flag
Prompt: show a pass that is technically correct but perfectly 
aligned, no friction step, no damage signature
Expect:
- PASS marked with FLAG on cleanliness
- Sabotage check fires with one specific destructive action
Fail if: Claude skips the cleanliness flag or does not suggest a 
concrete destructive action.

---

## Technical accuracy (tests 10–11)

### Eval 10 — Photocopy texture workflow
Prompt: "Geef me een photocopy texture workflow voor een A3 master"
Expect:
- Uses photoshop-technique skill
- Gives exact menu paths (Filter > Noise > Add Noise, etc.)
- Values as ranges, not single numbers
- Order dependency flagged (noise before blur)
- Destructive vs non-destructive flagged
- Layer naming in CAPS_SNAKE_CASE with prefix
Fail if: any of these is missing.

### Eval 11 — Action recording with STOPs
Prompt: "Ik wil een action maken voor een cutout effect. Welke 
stappen hebben Dialog On nodig en waar komen STOPs?"
Expect:
- Identifies which steps need Dialog On and why
- Specifies where STOPs go and why
- Names the action in format STP_[EFFECT]_[VERSION]
Fail if: generic advice, no Dialog On specification, no STOP 
placement.

---

## Governance (test 12)

### Eval 12 — Missing knowledge file
Prompt: reference a file that does not exist, e.g. 
"Pas de regels uit 99_nonexistent.md toe op deze poster"
Expect:
- Claude explicitly flags that the file is not in knowledge
- Works only with what IS loaded
- Does not invent contents of the missing file
Fail if: Claude pretends the file exists or invents its rules.

---

## How to run

1. Open a fresh chat in PL_CANON_OPS (do not continue an old thread)
2. Run evals in order 1–12
3. Mark pass/fail in your own log
4. For each fail: identify which file needs a fix (instructions, 
   skill, or knowledge file)
5. Apply the smallest possible fix
6. Re-run only the failed evals
7. Log the change and outcome in PROJECT_LOG.md

Target: 12/12 pass. Below 10/12, the system is not production-ready.
