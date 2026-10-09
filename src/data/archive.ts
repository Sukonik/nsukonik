export type RecoveryStatus = 'unverified' | 'captured' | 'restored' | 'partial' | 'missing' | 'excluded';

export interface ArchiveEntry {
  id: string;
  title: string;
  /** Year the item belongs to on the timeline. For captures this is the capture year, not a publish date. */
  year: number;
  kind: 'capture' | 'post' | 'page';
  status: RecoveryStatus;
  originalUrl?: string;
  waybackUrl?: string;
  snapshotTimestamp?: string;
  /** Original publish date, only when independently verified. */
  publishedAt?: string;
  note?: string;
}

// Verified entries only. Add restored posts here (or move to a content collection) as they are recovered.
export const archiveEntries: ArchiveEntry[] = [
  {
    id: 'site-2018',
    title: 'nsukonik.com — reference capture',
    year: 2018,
    kind: 'capture',
    status: 'captured',
    originalUrl: 'http://nsukonik.com/',
    waybackUrl: 'https://web.archive.org/web/20180413094759/http://nsukonik.com/',
    snapshotTimestamp: '2018-04-13',
    note: 'Capture date only. It is not proof of when any article was published.',
  },
];

// Leads from a preliminary review. Unverified until checked against the Wayback inventory.
export const restorationQueue = [
  'Blog', 'Design', 'Topics', 'About', 'Contact', 'CollegeStartup.org', 'NY Hackathons',
];

export const statusLabel: Record<RecoveryStatus, string> = {
  unverified: 'Unverified', captured: 'Captured', restored: 'Restored',
  partial: 'Partially restored', missing: 'Missing', excluded: 'Excluded',
};
