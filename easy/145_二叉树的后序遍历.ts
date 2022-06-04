/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/binary-tree-postorder-traversal/
 * @Date: 2022-06-04 16:33:15 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-04 16:42:05
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

const postorderTraversal = (root: TreeNode | null): number[] => {
  if (!root) {
    return [];
  }
  const result: number[] = [];
  const stack: TreeNode[] = [];
  let cur: TreeNode | null = root;

  while (stack.length || cur) {
    if (cur) {
      stack.unshift(cur);
      cur = cur.left || cur.right;
    }
    else {
      const node = stack.shift() as TreeNode;
      result.push(node.val);
      cur = stack[0]?.right || null;
    }
  }
  
  return result;
};


export default void 0;