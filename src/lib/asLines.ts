import { readFileSync } from 'node:fs';

export const asLines = (dir: string) =>
  readFileSync(`${dir}/input.txt`, 'utf8')
    .split('\n')
    .filter(Boolean);
