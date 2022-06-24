/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/find-largest-value-in-each-tree-row/
 * @Date: 2022-06-24 22:27:45 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-24 22:29:40
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

const largestValues = (root: TreeNode | null): number[] => {
  if (!root) {
    return [];
  }
  const stack = [{ tree: root, level: 0 }];
  const array: number[] = [];

  while (stack.length) {
    const { tree, level } = stack.shift() as { tree: TreeNode, level: number };
    const current = array[level] === undefined ? -Infinity : array[level];
    array[level] = Math.max(current, tree.val);

    tree.left && stack.push({ tree: tree.left, level: level + 1 });
    tree.right && stack.push({ tree: tree.right, level: level + 1 });
  }

  return array;
};

export default void 0;