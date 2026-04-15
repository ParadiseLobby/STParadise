import { sanityClient } from './sanity'
import { ALL_CASES_QUERY, CASE_BY_SLUG_QUERY } from './sanity-queries'

export interface Exhibit {
  id: string;
  type: string;
  label: string;
  access: 'open' | 'restricted' | 'suspended';
  mediaImage?: { asset: { _ref: string }; [key: string]: unknown };
}

export interface CaseFile {
  case_number: string;
  slug: string;
  title: string;
  classification: string;
  status: string;
  year: number;
  medium: string;
  department: string;
  access_level: number;
  summary_redacted: string;
  exhibits: Exhibit[];
  routing_state: string;
  chain_of_custody: string[];
  related_cases: string[];
  intake_date: string;
  last_modified: string;
  clerk_note: string;
}

export async function getAllCases(): Promise<CaseFile[]> {
  return sanityClient.fetch<CaseFile[]>(ALL_CASES_QUERY)
}

export async function getCaseBySlug(slug: string): Promise<CaseFile | undefined> {
  const result = await sanityClient.fetch<CaseFile | null>(CASE_BY_SLUG_QUERY, { slug })
  return result ?? undefined
}
