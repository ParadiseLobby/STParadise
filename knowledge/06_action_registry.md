# 06_action_registry

Status: Active
Authority: Binding production gate for actions, presets, expressions, scripts, templates, and other automations
Version: 1.0
Last updated: 2026-04-20

## Core rule

No automation is production-ready without a registry entry.

Automation includes:
- Photoshop actions
- presets
- expressions
- scripts
- templates with automated assumptions
- export macros
- file renamers
- metadata injectors

If it changes output behavior repeatedly, it belongs in this registry.

---

## Purpose

The registry exists to prevent silent drift.

It records:
- what an automation does
- which inputs it expects
- where it can fail
- how it was tested
- who owns it
- when it was last verified

Rule: convenience is not validation.

---

## Entry requirement

Each automation must have exactly one registry entry.
Do not keep unnamed or undocumented production automations.

Required entry fields:
- `NAME`
- `VERSION`
- `TYPE`
- `STATUS`
- `PURPOSE`
- `INPUT`
- `OUTPUT`
- `REQUIRED_LAYER_STATE`
- `STOPS`
- `DIALOG_ON_STEPS`
- `FAILURE_CONDITIONS`
- `TEST_CASE`
- `OWNER`
- `LAST_VERIFIED`

Optional fields:
- `APP`
- `DEPENDENCIES`
- `KNOWN_LIMITS`
- `CHANGE_NOTES`

---

## Statuses

Use one status per entry.

| Status | Meaning |
|---|---|
| `DRAFT` | Exists, not yet verified |
| `TESTING` | Under active validation |
| `ACTIVE` | Safe for production use |
| `RESTRICTED` | Only for named cases or operators |
| `DEPRECATED` | Kept for reference, do not use |
| `BLOCKED` | Known failure or unresolved risk |

Only `ACTIVE` is production-ready.

---

## Naming rule

Names must be stable and descriptive.

Format:
`STP_[AREA]_[FUNCTION]_[VERSION]`

Examples:
- `STP_MASK_CUTOUT_V01`
- `STP_EXPORT_CAROUSEL_V02`
- `STP_DAMAGE_GENLOSS_V01`

Do not use:
- `test action`
- `final final`
- `new one`
- unnamed defaults

---

## Versioning

Version bump rules:
- patch bump for non-behavioral fixes or clearer stops
- minor bump for changed defaults, added branches, or expanded support
- major bump for changed output behavior or incompatible assumptions

If output changes materially, the version must change.
No silent replacement.

---

## Production gate

An automation may be marked `ACTIVE` only if all of the following are true:
- registry entry is complete
- input and output are explicit
- required layer state is explicit
- dialog-on steps are explicit where needed
- stop points are explicit where needed
- at least one test case was run and recorded
- at least one failure condition is named
- owner is named
- last verified date is present

If any field is missing, status cannot be `ACTIVE`.

---

## Registry entry template

Use this exact template.

```md
### NAME
STP_[AREA]_[FUNCTION]_[VERSION]

- VERSION:
- TYPE:
- STATUS:
- APP:
- PURPOSE:
- INPUT:
- OUTPUT:
- REQUIRED_LAYER_STATE:
- STOPS:
- DIALOG_ON_STEPS:
- DEPENDENCIES:
- FAILURE_CONDITIONS:
- TEST_CASE:
- KNOWN_LIMITS:
- OWNER:
- LAST_VERIFIED:
- CHANGE_NOTES:
```

---

## Required layer state rule

If an automation depends on specific layer names, selection state, color mode, document dimensions, smart object presence, or group order, those assumptions must be written exactly.

Examples:
- `Document must be RGB, 1080x1350, 72dpi`
- `02_CONTENT_GRID2 must be selected before run`
- `Active layer must be Smart Object`
- `Selection required before mask step`

If layer state assumptions are hidden, the automation is not production-safe.

---

## Stops and dialog-on steps

Record intervention points explicitly.

`STOPS` are required when:
- the operator must inspect output quality
- the next step depends on visual judgment
- a selection, crop, or mask cannot be trusted blindly

`DIALOG ON STEPS` are required when:
- values must vary per case
- the operator must set a radius, threshold, feather, or export path
- the step would otherwise lock in the wrong default silently

Rule: if the user needs to decide something, capture that fact in the entry.

---

## Failure conditions

Each entry must name concrete failure modes.
Do not write `may fail`.

Examples:
- layer not found
- barcode font missing
- smart object absent
- selection empty
- action assumes RGB but document is CMYK
- export naming mismatch
- dialog default causes destructive crop

Failure conditions should be specific enough to reproduce.

---

## Test case rule

Every entry needs at least one named test case.
The test case must describe:
- document state used
- expected result
- pass/fail observation

Minimum format:
- `TEST_CASE: IG_4X5_D1_RGB / pass / export names and layer offsets preserved`

No test case means no production approval.

---

## Review cadence

Re-verify an `ACTIVE` entry when:
- Photoshop or the host app updates materially
- a template structure changes
- a font, plugin, or dependency changes
- the automation output changes
- a failure is reported

If re-verification is overdue or uncertain, set status back to `TESTING` or `BLOCKED`.

---

## Ownership

Every production automation must have one owner.
The owner is responsible for:
- keeping the entry current
- re-verifying after changes
- marking deprecation or block state when needed

Unowned automations are not production-safe.
