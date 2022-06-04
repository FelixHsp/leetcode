/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/binary-tree-inorder-traversal/
 * @Date: 2022-06-04 16:17:27 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-04 16:27:46
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

const inorderTraversal = (root: TreeNode | null): number[] => {
  if (!root) {
    return [];
  }
  const result: number[] = [];
  const stack: TreeNode[] = [];
  let cur: TreeNode | null = root;

  while (stack.length || cur) {
    if (cur) {
      stack.unshift(cur);
      cur = cur.left;
    }
    else {
      const node = stack.shift() as TreeNode;
      result.push(node.val);
      cur = node.right;
    }
  }

  return result;
};


export default void 0;