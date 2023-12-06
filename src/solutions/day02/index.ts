import * as A from 'fp-ts/lib/Array';
import { pipe } from 'fp-ts/lib/function';
import { max, multiply } from 'ramda';

import { asLines } from '../../lib';

export const input = asLines(import.meta.dir);
export const COLOR = ['red', 'green', 'blue'];

export const part1 = (input: Array<string>) => {
  const getAmount = (str: string) => {
    const colorAmount = [0, 0, 0];
    const cubes = str.split(',');

    cubes.forEach((cube) => {
      const [amount, color] = cube.split(' ').filter(Boolean);
      const index = COLOR.indexOf(color);

      colorAmount[index] = Number.parseInt(amount, 10);
    });

    return colorAmount;
  };

  const getMax = (arr: Array<Array<number>>) => {
    const colorAmount = [0, 0, 0];

    arr.forEach(set => set.forEach((v, i) => colorAmount[i] = max(colorAmount[i], v)));

    return colorAmount;
  };

  const result = pipe(
    input,
    A.map(x => x.split(':')),
    A.map(([n, set]) => [n.split(' ')[1], ...set.split(';')]),
    A.map(([n, ...set]) => [n, ...set.map(getAmount)]),
    A.map(([n, ...set]) => [n, getMax(set as Array<Array<number>>)] as [string, Array<number>]),
    A.filter(([, set]) => set[0] <= 12 && set[1] <= 13 && set[2] <= 14),
    A.reduce(0, (acc, [cur]) => acc + Number(cur)),
  );

  console.log(`part1: ${result}`);
};

part1(input);

export const part2 = (input: Array<string>) => {
  const getAmount = (str: string) => {
    const colorAmount = [0, 0, 0];
    const cubes = str.split(',');

    cubes.forEach((cube) => {
      const [amount, color] = cube.split(' ').filter(Boolean);
      const index = COLOR.indexOf(color);

      colorAmount[index] = Number.parseInt(amount, 10);
    });

    return colorAmount;
  };

  const getMin = (arr: Array<Array<number>>) => {
    const colorAmount = [0, 0, 0];

    arr.forEach(set => set.forEach((v, i) => colorAmount[i] = max(colorAmount[i], v)));

    return colorAmount.reduce(multiply, 1);
  };

  const result = pipe(
    input,
    A.map(x => x.split(':')),
    A.map(([n, set]) => [n.split(' ')[1], ...set.split(';')]),
    A.map(([n, ...set]) => [n, ...set.map(getAmount)]),
    A.map(([n, ...set]) => [n, getMin(set as Array<Array<number>>)]),
    A.reduce(0, (acc, [,cur]) => acc + Number(cur)),
  );

  console.log(`part2: ${result}`);
};

part2(input);
