/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/find-if-path-exists-in-graph/
 * @Tags: dfs、bfs
 * @Date: 2022-05-09 21:20:44 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-09 22:21:41
 */

// timeout
// const validPath = (n: number, edges: number[][], source: number, destination: number): boolean => {
  // if (n === 1) {
  //   return true;
  // }
  
//   const stack = [];
//   const seenSet = new Set();
//   for (let i = 0; i < edges.length; i++) {
//     if (edges[i][0] === source) {
//       stack.push({ current: edges[i], target: destination });
//       seenSet.add(JSON.stringify({ current: edges[i], target: destination }));
//     }
//     if (edges[i][0] === destination) {
//       stack.push({ current: edges[i], target: source });
//       seenSet.add(JSON.stringify({ current: edges[i], target: source }));
//     }
//   }

//   while (stack?.length) {
//     const {current, target} = stack.shift() as { current: number[]; target: number };
//     if (current[1] === target || current[0] === target) {
//       return true;
//     }

//     for (let i = 0; i < edges.length; i++) {
//       const next = edges[i];
//       const nextObj = {current: next, target};
//       if ((next[0] === current[1] || next[1] === current[0] || next[0] === current[0] || next[1] === current[1]) && !seenSet.has(JSON.stringify(nextObj))) {
//         stack.unshift(nextObj);
//         seenSet.add(JSON.stringify(nextObj));
//       }
//     }

//   }

//   return false;
// };

const validPath = (n: number, edges: number[][], source: number, destination: number): boolean => {
  if (n === 1) {
    return true;
  }
  const arr = Array.from({ length: n }).map(() => []) as number[][];
  for (const [current, next] of edges) {
    arr[current].push(next);
    arr[next].push(current);
  }

  const stack = arr[source];
  const seenSet = new Set(stack);

  while (stack.length) {
    const current = stack.shift() as number;
    if (current === destination) {
      return true;
    }

    for (const next of arr[current]) {
      if (!seenSet.has(next)) {
        stack.unshift(next);
        seenSet.add(next)
      }
    }
  }

  return false;
}

const n = 4;
const edges = [[0, 1], [1, 2], [2, 3]];
const start = 0;
const end = 3;

console.log(validPath(n, edges, start, end));

export default void 0;