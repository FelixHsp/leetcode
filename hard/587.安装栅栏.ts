/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/erect-the-fence/
 * @Tags: 凸包算法、几何
 * @Date: 2022-04-23 21:09:54 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-23 22:07:52
 */

const outerTrees = (trees: number[][]): number[][] => {
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

const trees = [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]];
console.log(outerTrees(trees));

export default void 0;