export interface Theme { id: string; name: string; accent: string; strong: string; }

// Eight gemstone themes. Colors live in src/styles/themes.css; `strong` here is only for the picker dot.
export const themes: Theme[] = [
  { id: 'sunstone', name: 'Sunstone', accent: '#d4a017', strong: '#e8b74b' },
  { id: 'ruby', name: 'Ruby', accent: '#c83f52', strong: '#f05a6b' },
  { id: 'sapphire', name: 'Sapphire', accent: '#3a5cff', strong: '#6b84ff' },
  { id: 'emerald', name: 'Emerald', accent: '#1f9d68', strong: '#4ac58c' },
  { id: 'amethyst', name: 'Amethyst', accent: '#8f55d6', strong: '#b278f1' },
  { id: 'aquamarine', name: 'Aquamarine', accent: '#1fa7a0', strong: '#4fd1c5' },
  { id: 'garnet', name: 'Garnet', accent: '#a8362c', strong: '#d9584b' },
  { id: 'obsidian', name: 'Obsidian', accent: '#8e969f', strong: '#c4cad1' },
];
export const defaultTheme = 'sunstone';
