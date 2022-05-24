/*
 * @Author: Felix 
 * @File https://leetcode.cn/problemset/all/
 * @Date: 2022-05-24 20:51:31 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-24 20:54:35
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

const isUnivalTree = (root: TreeNode | null, val?: number): boolean => {
  if (!root) {
    return true;
  }

  if (val !== undefined && val !== root.val) {
    return false;
  }

  return isUnivalTree(root.left, root.val) && isUnivalTree(root.right, root.val);
};

export default void 0;
