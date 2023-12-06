import * as A from 'fp-ts/lib/Array';
import { pipe } from 'fp-ts/lib/function';
import { sum } from 'ramda';

import { asLines } from '../../lib';

export const input = asLines(import.meta.dir);

export const part1 = (input: Array<string>) => {
  const findDigits = (str: string) => pipe(
    str.match(/\d/g),
    digits => Number.parseInt(digits!.at(0)! + digits?.at(-1), 10),
  );

  const result = pipe(input, A.map(findDigits), sum);

  console.log(`part1: ${result}`);
};

part1(input);

export const part2 = (input: Array<string>) => {
  const Digits = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'] as const;

  const number = (str: string) => {
    if (str.charAt(0) > '0' && str.charAt(0) <= '9')
      return str.charAt(0);

    const i = Digits.findIndex(n => str.startsWith(n));

    return i < 0 ? null : `${i + 1}`;
  };

  const match = (str: string) => {
    let first: string;
    let last: string;

    for (let i = 0; i < str.length; i++) {
      const n = number(str.substring(i));

      if (n) {
        first = first! || n;
        last = n;
      }
    }

    return [first!, last!];
  };

  const findDigits = (str: string) => Number.parseInt(match(str).join(''));
  const result = pipe(input, A.map(findDigits), sum);

  console.log(`part2: ${result}`);
};

part2(input);
