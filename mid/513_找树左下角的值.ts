/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/find-bottom-left-tree-value/
 * @Date: 2022-06-22 21:16:10 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-22 21:30:53
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
}

const findBottomLeftValue = (root: TreeNode | null): number => {
  const stack = [{ tree: root, level: 0 }];
  const array: number[] = [];

  while (stack.length) {
    const { tree, level } = stack.shift() as { tree: TreeNode, level: number };
    if (!array[level]) {
      array[level] = tree.val;
    }

    tree.left && stack.push({ tree: tree.left, level: level + 1 });
    tree.right && stack.push({ tree: tree.right, level: level + 1 });
  }

  return array[array.length - 1];
};
