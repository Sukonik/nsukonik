export interface Theme { id: string; name: string; swatch: string; }

// Eight gemstone themes. CSS for each lives in src/styles/themes.css (keyed by data-theme).
export const themes: Theme[] = [
  { id: 'sunstone', name: 'Sunstone', swatch: '#e8b04a' },
  { id: 'ruby', name: 'Ruby', swatch: '#e0526a' },
  { id: 'sapphire', name: 'Sapphire', swatch: '#5b8def' },
  { id: 'emerald', name: 'Emerald', swatch: '#3fbf86' },
  { id: 'amethyst', name: 'Amethyst', swatch: '#a779e9' },
  { id: 'aquamarine', name: 'Aquamarine', swatch: '#4fd1c5' },
  { id: 'garnet', name: 'Garnet', swatch: '#c2453b' },
  { id: 'obsidian', name: 'Obsidian', swatch: '#b9c0c8' },
];
export const defaultTheme = 'sunstone';
