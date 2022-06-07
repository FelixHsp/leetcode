/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/find-the-celebrity/
 * @Tags: 双指针
 * @Date: 2022-06-07 21:38:12 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-07 21:59:24
 */

const solution = (knows: (a: number, b: number) => boolean) => {
  return (n: number): number =>  {
    let l = 0;
    let r = n - 1;
    while (l < r) {
      if (knows(l, r)) {
        l++;
      }
      else {
        r--;
      }
    }

    for (let i = 0; i < n; i++) {
      if (i !== l && (!knows(i, l) || knows(l, i))) {
        return -1;
      }
    }
    return l;
  };
};

const knows = (a: number, b: number) => {
  const graph = [
    [1, 1, 0],
    [0, 1, 0],
    [1, 1, 1]
  ];
  return graph[a - 1][b - 1] === 1;
};

console.log(solution(knows)(3));