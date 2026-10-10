export type Stage = 'live' | 'demo' | 'beta' | 'prelaunch' | 'concept' | 'early';

export interface Project {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  stage: Stage;
  /** Only public, confirmed URLs. Every one below comes from the project's public README. */
  liveUrl?: string;
  repoUrl: string;
  featured?: boolean;
}

export const stageLabel: Record<Stage, string> = {
  live: 'Live', demo: 'Demo', beta: 'Live app', prelaunch: 'Pre-launch', concept: 'Concept', early: 'Early',
};

// Alphabetical order is applied by the pages. Sources: each repo's public README (Oct 2026).
export const projects: Project[] = [
  {
    slug: 'ari', name: 'ARI', icon: '🧠',
    tagline: 'Open-source AI operating platform',
    description: 'One place for AI, work, files, communications and life: chat, workspaces and modules across web, desktop and phone. Architecture and planning stage.',
    stage: 'concept', repoUrl: 'https://github.com/Sukonik/ari',
  },
  {
    slug: 'clearsky', name: 'ClearSky Weather', icon: '⛅',
    tagline: 'Weather and environmental intelligence',
    description: 'Mobile-first weather with tides, wind, rain, air quality, UV and moon phases, built with plain HTML, CSS and JavaScript and no API keys.',
    stage: 'beta', liveUrl: 'https://sukonik.github.io/weather-app/', repoUrl: 'https://github.com/Sukonik/weather-app', featured: true,
  },
  {
    slug: 'goldensunai', name: 'GoldenSunAI', icon: '☀️',
    tagline: 'AI-native product studio',
    description: 'The company and product studio behind Team GoldenSun: focused software across AI, environment, legal technology, personal computing and planning.',
    stage: 'live', liveUrl: 'https://sukonik.github.io/goldensunai/', repoUrl: 'https://github.com/Sukonik/goldensunai', featured: true,
  },
  {
    slug: 'goldensunlaw', name: 'GoldenSunLaw', icon: '⚖️',
    tagline: 'Premium law-firm website template',
    description: 'A reusable reference design for an international law firm site, with a fictional firm, a theme picker and a responsive architectural look.',
    stage: 'demo', liveUrl: 'https://sukonik.github.io/GoldenSunLaw/', repoUrl: 'https://github.com/Sukonik/GoldenSunLaw', featured: true,
  },
  {
    slug: 'kikomix', name: 'KikoMix', icon: '🎵',
    tagline: 'One search box for all your music',
    description: 'A lightweight music aggregator: search once across services, play instantly and save tracks from different sources to one playlist.',
    stage: 'early', repoUrl: 'https://github.com/Sukonik/kikomix',
  },
  {
    slug: 'payout-lab', name: 'Payout Lab', icon: '🧪',
    tagline: 'Dividend income stress-tester',
    description: 'A free, privacy-first dividend calculator that shows what holdings pay, when, and how fragile that income is. Runs entirely in the browser.',
    stage: 'prelaunch', liveUrl: 'https://sukonik.github.io/payout-lab/', repoUrl: 'https://github.com/Sukonik/payout-lab', featured: true,
  },
  {
    slug: 'simcha-ai', name: 'Simcha AI', icon: '🕎',
    tagline: 'Persona chatbot',
    description: 'A Flask chatbot with three selectable personas (Rabbi, Student and Israeli) and a ChatGPT-style interface.',
    stage: 'early', repoUrl: 'https://github.com/Sukonik/simcha-ai',
  },
  {
    slug: 'uuub', name: 'UUUB Cocoa House', icon: '🍫',
    tagline: 'One ritual. A world of cocoa.',
    description: 'A text-first brand site for a cocoa-house concept: Impasto, origins, drinks and the morning ritual.',
    stage: 'live', liveUrl: 'https://sukonik.github.io/uuub/', repoUrl: 'https://github.com/Sukonik/uuub', featured: true,
  },
  {
    slug: 'windswordai', name: 'WindSwordAI', icon: '⚔️',
    tagline: 'Secure legal AI workspace',
    description: 'A local-first AI workspace for legal teams: chat, matters, grounded answers and citations. The public site is a synthetic-data demo.',
    stage: 'demo', liveUrl: 'https://sukonik.github.io/windswordai/', repoUrl: 'https://github.com/Sukonik/windswordai', featured: true,
  },
];
