const caseFields = `
  case_number,
  "slug": slug.current,
  title,
  classification,
  status,
  year,
  medium,
  department,
  access_level,
  summary_redacted,
  exhibits[] { id, type, label, access, "mediaImage": media.image },
  routing_state,
  "chain_of_custody": coalesce(chain_of_custody, []),
  "related_cases": coalesce(related_cases, []),
  intake_date,
  "last_modified": coalesce(last_modified, ""),
  "clerk_note": coalesce(clerk_note, "")
`

export const ALL_CASES_QUERY = `*[_type == "case"] | order(case_number asc) { ${caseFields} }`

export const CASE_BY_SLUG_QUERY = `*[_type == "case" && slug.current == $slug][0] { ${caseFields} }`

export const SETTINGS_QUERY = `*[_type == "settings"][0] {
  siteName,
  logo { asset->{ _id, url, metadata { dimensions } } },
  backgroundMode,
  primaryColor,
  accentColor,
  footerNote
}`
