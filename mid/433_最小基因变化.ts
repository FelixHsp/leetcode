/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/minimum-genetic-mutation/
 * @Tags: 遍历、BFS
 * @Date: 2022-05-07 19:41:55 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-07 20:46:29
 */

const minMutation = (start: string, end: string, bank: string[]): number => {
  const bankSet = new Set(bank);

  if (!bankSet.has(end)) {
    return -1;
  };

  const seenSet: Set<string> = new Set();
  const nextMap = new Map([['A', 'CGT'], ['C', 'AGT'], ['G', 'ACT'], ['T', 'ACG']]);

  const queue: [string, number][] = [[start, 0]];

  while (queue.length) {
    const [current, step] = queue.shift() as [string, number];
    if (current === end) {
      return step;
    }
    seenSet.add(current);

    const array = Array.from(current);
    for (let i = 0; i < 8; i++) {
      const currentArray = [...array];
      const nextChar = nextMap.get(currentArray[i]) as string;
  
      for (let j = 0; j < 3; j++) {
        currentArray[i] = nextChar[j];
        const currentString = currentArray.join('');
        if (!seenSet.has(currentString) && bankSet.has(currentString)) {
          queue.push([currentString, step + 1]);
        }
      }
    }
  }

  return -1;
};

const start = 'AACCGGTT';
const end = 'AAACGGTA';
const bank = ['AACCGGTA', 'AACCGCTA', 'AAACGGTA'];

console.log(minMutation(start, end, bank));

export default void 0;