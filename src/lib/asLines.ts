import { readFileSync } from 'node:fs';

export const asLines = (dir: string, file = 'input') =>
  readFileSync(`${dir}/${file}.txt`, 'utf8')
    .split('\n')
    .filter(Boolean);
