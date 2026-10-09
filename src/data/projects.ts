export interface Project {
  name: string;
  category: string;
  description: string;
  /** Plain-language status. Use 'To be confirmed' until Nathan confirms. */
  status: string;
  /** Only set when the URL is confirmed. */
  liveUrl?: string;
  repoUrl?: string;
}

// Alphabetical by name is enforced in the page. Do not invent statuses or URLs.
export const projects: Project[] = [
  {
    name: 'GoldenSunAI',
    category: 'Company & products',
    description: 'The company and active product ecosystem. This site links out rather than duplicating it.',
    status: 'To be confirmed',
  },
  {
    name: 'GoldenSunLaw',
    category: 'Professional site',
    description: 'Professional legal-focused site in the GoldenSun portfolio.',
    status: 'To be confirmed',
  },
  {
    name: 'UUUB Cocoa House',
    category: 'Editorial / food',
    description: 'Story-first editorial project in the GoldenSun portfolio.',
    status: 'To be confirmed',
  },
];
