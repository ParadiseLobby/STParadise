# 07_metadata_schema

Status: Active
Authority: Binding schema for asset metadata, filename structure, and relational tracing across canon, public, commercial, and system outputs
Version: 1.0
Last updated: 2026-04-20

## Purpose

This schema standardizes how assets are identified, related, filtered, and recovered.

Use it for:
- case assets
- public release assets
- client translation assets
- automation outputs
- derivative crops, exports, and motion variants

This file governs metadata structure.
It does not rewrite canon or production doctrine.

---

## Core rule

Every saved production asset must be traceable.

That means:
- one stable asset ID
- one case link where applicable
- one declared role
- one declared surface
- one version
- one owner

If an asset cannot be traced back to its case, role, and version, it is operationally weak.

---

## Required fields

These fields are mandatory unless a rule below marks them conditional.

| Field | Type | Rule |
|---|---|---|
| `asset_id` | string | Unique ID for this specific asset version |
| `case_id` | string | Required for case-linked work; use `NONE` only for non-case system assets |
| `system_world` | enum | One of the approved world systems |
| `content_mode` | enum | Operational mode of the asset |
| `source_class` | enum | `SUBJECT`, `SITE`, `OBJECT`, or `NONE` for non-source system files |
| `asset_role` | enum | Declares what the asset does in the workflow |
| `surface` | enum | Declares working canvas or document surface |
| `app` | enum | Primary production app |
| `status` | enum | Current workflow state |
| `owner` | string | Responsible operator |
| `version` | string | Version label for the specific asset |
| `client_or_internal` | enum | Commercial relationship context |
| `rights_source_origin` | enum | Where source rights came from |

Conditional fields:

| Field | Type | When required |
|---|---|---|
| `parent_asset` | string | Required for derivatives, crops, exports, motion variants, or adaptations |
| `release_link` | string | Required when asset belongs to a public release container or delivery set |
| `notes` | string | Optional; use only for operational notes, not lore |

---

## Enum values

### `system_world`

- `STP_A`
- `STP_B`
- `STP_C`
- `STP_D`
- `NONE`

Rule: Paradise Lobby canonical assets use `STP_C`.

### `content_mode`

- `CANON`
- `PUBLIC`
- `COMMERCIAL`
- `SYSTEM_OPS`
- `TECHNICAL`
- `REVIEW`
- `PRODUCTION`

Rule: choose the mode that governs the asset's function, not the chat that produced it.

### `source_class`

- `SUBJECT`
- `SITE`
- `OBJECT`
- `NONE`

### `asset_role`

- `CUSTODY`
- `DIRECTIVE`
- `SOURCE`
- `MOTION`
- `PRINT_STUDY`
- `ARTIFACT`
- `DOSSIER_FRAME`
- `EXPORT`
- `WORKING_FILE`
- `SYSTEM_DOC`
- `AUTOMATION`

### `surface`

- `A3_PORTRAIT_LOGIC`
- `IG_4X5`
- `REEL_9X16`
- `PRINT_A3`
- `PRINT_A2`
- `WEB_LANDSCAPE`
- `NONE`

Rule: canonical logic remains `A3_PORTRAIT_LOGIC` even when the working export is `IG_4X5`.

### `app`

- `PHOTOSHOP`
- `ILLUSTRATOR`
- `AFTER_EFFECTS`
- `FIGMA`
- `NEXTJS`
- `MARKDOWN`
- `NONE`

### `status`

- `DRAFT`
- `ACTIVE`
- `HOLD`
- `APPROVED`
- `EXPORTED`
- `DELIVERED`
- `ARCHIVED`
- `DEPRECATED`

### `client_or_internal`

- `INTERNAL`
- `SPEC`
- `CLIENT`

### `rights_source_origin`

- `SELF_CREATED`
- `CLIENT_SUPPLIED`
- `LICENSED`
- `UNKNOWN`
- `NOT_APPLICABLE`

---

## ID rules

### `case_id`

Use:
- `PL-YY-XXXX` for Paradise Lobby case-linked work
- `NONE` for system files with no case

Examples:
- `PL-26-0041`
- `NONE`

### `asset_id`

Format:
`[CASE_OR_NONE]_[ROLE]_[SURFACE]_[STATE]_[vNN]`

Examples:
- `PL-26-0041_CUSTODY_IG_4X5_ACTIVE_v01`
- `PL-26-0041_EXPORT_IG_4X5_EXPORTED_v03`
- `NONE_SYSTEM_DOC_NONE_ACTIVE_v01`

Rule: `asset_id` changes when version changes.

### `version`

Format:
- `v01`
- `v02`
- `v03`

Use two digits minimum.

---

## Parent-child rule

Use `parent_asset` whenever one asset is derived from another.

Examples:
- export JPG derived from PSD
- motion cutdown derived from master comp
- carousel crop derived from full document
- public dossier frame derived from canonical surface

If an asset is the original working root, set `parent_asset` to `NONE`.

---

## Release-link rule

`release_link` groups assets into one outward-facing container or delivery batch.

Examples:
- `DOSSIER_PL-26-0041`
- `CLIENT_DROP_ACME_Q3`
- `CASEPAIR_PL-26-0041`

Use `NONE` only when the asset is not part of a grouped release or delivery.

---

## Filename schema

Use this filename structure for exported or saved assets when practical:

`[PROJECT]_[CASE]_[ROLE]_[SYSTEM]_[SURFACE]_[STATE]_[vNN]`

Field meanings:
- `PROJECT`: `PL` or another approved project code
- `CASE`: case ID without extra punctuation where needed for app compatibility
- `ROLE`: role token
- `SYSTEM`: system token
- `SURFACE`: working surface token
- `STATE`: workflow state token
- `vNN`: version token

Example filenames:
- `PL_PL-26-0041_CUSTODY_STP_C_IG_4X5_ACTIVE_v01.psd`
- `PL_PL-26-0041_EXPORT_STP_C_IG_4X5_EXPORTED_v02.jpg`
- `PL_NONE_SYSTEM_DOC_NONE_NONE_ACTIVE_v01.md`

Rule: filenames should be machine-sortable and human-readable.

---

## Minimum metadata record

Use this record shape in logs, manifests, or embedded metadata stores.

```json
{
  "asset_id": "PL-26-0041_CUSTODY_IG_4X5_ACTIVE_v01",
  "case_id": "PL-26-0041",
  "system_world": "STP_C",
  "content_mode": "CANON",
  "source_class": "SITE",
  "asset_role": "CUSTODY",
  "surface": "IG_4X5",
  "app": "PHOTOSHOP",
  "status": "ACTIVE",
  "owner": "B",
  "parent_asset": "NONE",
  "version": "v01",
  "rights_source_origin": "SELF_CREATED",
  "client_or_internal": "INTERNAL",
  "release_link": "CASEPAIR_PL-26-0041"
}
```

Use the smallest complete record.
Do not add storytelling fields.
