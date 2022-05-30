/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/sum-of-root-to-leaf-binary-numbers/
 * @Date: 2022-05-30 20:23:59 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-30 20:38:31
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

const sumRootToLeaf = (root: TreeNode | null): number => {
  let result = 0;
  const dfs = (root: TreeNode | null, pre: string) => {
    if (!root) {
      return;
    }

    const cur = `${pre}${root.val}`;

    if (!root.left && !root.right) {
      for (let i = 0; i < cur.length; i++) {
        result += Number(cur[i]) * Math.pow(2, cur.length - i - 1);
      }
      return;
    }

    dfs(root.left, cur);
    dfs(root.right, cur);
  };

  dfs(root, '');
  return result;
};


export default void 0;
