/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/validate-binary-search-tree/
 * @Date: 2022-05-23 20:43:19 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-23 21:05:18
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

const isValidBST = (root: TreeNode | null, min = -Infinity, max = Infinity): boolean => {
  if (!root?.val && !root?.left && !root?.right) {
    return true;
  }
  
  if (root.val >= max || root.val <= min) {
    return false;
  }

  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
};

export default void 0;