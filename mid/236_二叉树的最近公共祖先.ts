/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/
 * @Tags: 树
 * @Date: 2022-05-30 21:34:28 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-30 21:41:02
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

const lowestCommonAncestor = (root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null => {
  const map = new Map([[p, ''], [q, '']]);
  if (!p) {
    return q;
  }
  if (!q) {
    return p;
  }

  const dfs = (root: TreeNode | null, pre: string) => {
    if (!root) {
      return;
    }

    if (map.get(root)) {
      map.set(root, pre);
    }

    dfs(root.left, `${pre}l`);
    dfs(root.right, `${pre}r`);
  };

  dfs(root, '');

  return null;
};

export default void 0;