/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/successor-lcci/
 * @Date: 2022-05-16 20:54:33 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-16 21:19:35
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

const inorderSuccessor = (root: TreeNode | null, p: TreeNode | null): TreeNode | null => {
  let tag = false;
  let val: TreeNode | null = null;

  const midSearch = (root: TreeNode | null) => {
    if (!root) {
      return;
    }
    midSearch(root.left);
    if (tag && val === null) {
      val = root;
    }
    if (root.val === p?.val) {
      tag = true;
    }
    midSearch(root.right);
  };

  midSearch(root);

  return val;
};

// const root = new TreeNode(5, new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)), new TreeNode(6));
const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(inorderSuccessor(root, new TreeNode(1)));

export default void 0;