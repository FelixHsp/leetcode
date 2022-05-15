/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/largest-triangle-area/
 * @Date: 2022-05-15 09:35:31 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-15 10:26:46
 */

const largestTriangleArea = (points: number[][]): number => {
  let max = 0;
  const outerTrees = getOuterTrees(points);
  const n = outerTrees.length;

  for (let i = 0; i < n; i++) {
      for (let j = i + 1, k = i + 2; j + 1 < n; j++) {
          while (k + 1 < n) {
              const curArea = getArea(outerTrees[i], outerTrees[j], outerTrees[k]);
              const nextArea = getArea(outerTrees[i], outerTrees[j], outerTrees[k + 1]);
              if (curArea >= nextArea) {
                  break;
              }
              k++;
          }
          const area = getArea(outerTrees[i], outerTrees[j], outerTrees[k]);
          max = Math.max(max, area);
      }
    }


  return max;
};

const getOuterTrees = (trees: number[][]): number[][] => {
  const len = trees.length;
  if (len < 4) {
    return trees;
  }

  const cross = (p: number[], q: number[], r: number[]) => {
    return (q[0] - p[0]) * (r[1] - q[1]) - (q[1] - p[1]) * (r[0] - q[0]);
  }

  trees.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });

  const array: number[] = [0];
  const used = Array.from({ length: len }).fill(false);
  for (let i = 1; i < len; i++) {
    while (array.length > 1 && cross(trees[array[array.length - 2]], trees[array[array.length - 1]], trees[i]) < 0) {
      used[array[array.length - 1]] = false;
      array.pop();
    }
    used[i] = true;
    array.push(i);
  }

  const arrayLen = array.length;
  for (let i = len - 2; i >= 0; i--) {
    if (used[i]) {
      continue;
    }
    while (array.length > arrayLen && cross(trees[array[array.length - 2]], trees[array[array.length - 1]], trees[i]) < 0) {
      used[array[array.length - 1]] = false;
      array.pop();
    }
    used[i] = true;
    array.push(i);
  }

  array.pop();

  const finalArray = array.map((i) => {
    return trees[i];
  });
  return finalArray;
};

const getArea = (a: number[], b: number[], c: number[]) => {
  const [x1, y1] = a;
  const [x2, y2] = b;
  const [x3, y3] = c;

  return Math.abs((x1 * y2 - x2 * y1 + x2 * y3 - x3 * y2 + x3 * y1 - x1 * y3)) / 2;
};

const points = [[1, 0], [0, 0], [0, 1]];

console.log(largestTriangleArea(points));
export default void 0;