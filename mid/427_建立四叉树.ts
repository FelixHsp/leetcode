/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/construct-quad-tree/
 * @Date: 2022-04-30 19:24:44 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-30 20:24:54
 */

class Node {
  val: boolean
  isLeaf: boolean
  topLeft: Node | null
  topRight: Node | null
  bottomLeft: Node | null
  bottomRight: Node | null
  constructor(val?: boolean, isLeaf?: boolean, topLeft?: Node, topRight?: Node, bottomLeft?: Node, bottomRight?: Node) {
      this.val = (val===undefined ? false : val)
      this.isLeaf = (isLeaf===undefined ? false : isLeaf)
      this.topLeft = (topLeft===undefined ? null : topLeft)
      this.topRight = (topRight===undefined ? null : topRight)
      this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
      this.bottomRight = (bottomRight===undefined ? null : bottomRight)
  }
}


const construct = (
  grid: number[][],
  x: number = 0,
  y: number = 0,
  n: number = grid.length
): Node | null => {
  const isLeaf = (x: number, y: number, n: number): boolean => {
    const startPoint = grid[x][y];
    for (let i = x; i < x + n; i++) {
      for (let j = y; j < y + n; j++) {
        if (startPoint !== grid[i][j]) {
          return false;
        }
      }
    }
    return true;
  };

  const node = new Node(!!grid[x][y], isLeaf(x, y, n));

  if (!node.isLeaf) {
    node.topLeft = construct(grid, x, y, n>>1);
    node.topRight = construct(grid, x, y + (n>>1), n>>1);
    node.bottomLeft = construct(grid, x + (n>>1), y, n>>1);
    node.bottomRight = construct(grid, x + (n>>1), y + (n>>1), n>>1);
  }

  return node;
};

const grid = [
  [1,1,1,1,0,0,0,0],
  [1,1,1,1,0,0,0,0],
  [1,1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1,1],
  [1,1,1,1,0,0,0,0],
  [1,1,1,1,0,0,0,0],
  [1,1,1,1,0,0,0,0],
  [1,1,1,1,0,0,0,0]
];
console.log(construct(grid));

export default void 0;