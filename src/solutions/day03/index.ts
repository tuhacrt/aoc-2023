import { asLines } from '../../lib';

export const input = asLines(import.meta.dir, 'test');

export const regex = /[^[0-9]]*/g;

export const part1 = (input: Array<string>) => {
  console.log(input);
  for (const line of input) {
    // const hasSymbol = line.match(regex);
    console.log(line.replace(regex, 'N'));
    // if (hasSymbol)
    // console.log(line);
  }
};

part1(input);

export const part2 = (input: Array<string>) => {
  void input;
};

part2(input);
