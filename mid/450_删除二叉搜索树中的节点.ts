/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/delete-node-in-a-bst/
 * @Tags: 搜索树
 * @Date: 2022-06-02 18:28:52 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-02 20:10:53
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

const deleteNode = (root: TreeNode | null, key: number): TreeNode | null => {
  if (!root) {
    return null;
  }

  if (root.val === key) {
    if (!root.left) {
      return root.right;
    }
    if (!root.right) {
      return root.left;
    }
    
    let cur = root.right;
    while (cur.left) {
      cur = cur.left;
    }
    root.right = deleteNode(root.right, cur.val);
    cur.right = root.right;
    cur.left = root.left;
    return cur;
  }
  else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  }
  else {
    root.left = deleteNode(root.left, key);
  }
  
  return root;
};

console.log(deleteNode(new TreeNode(0), 0));

export default void 0;
