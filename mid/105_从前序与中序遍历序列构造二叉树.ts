/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * @Date: 2022-06-06 22:10:47 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-06 22:36:17
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

const buildTree = (preorder: number[], inorder: number[]): TreeNode | null => {
  if (!preorder.length) {
    return null;
  }
  if (preorder.length === 1) {
    return new TreeNode(preorder[0]);
  }
  
  const currentNodeVal = preorder.shift() as number;
  const currentNode = new TreeNode(currentNodeVal);

  const currentNodeValIndex = inorder.findIndex(item => item === currentNodeVal);
  const leftInorder = inorder.splice(0, currentNodeValIndex);
  inorder.shift();

  const leftPreorder = preorder.splice(0, leftInorder.length + 1);

  currentNode.left = buildTree(leftPreorder, leftInorder);
  currentNode.right = buildTree(preorder, inorder);

  return currentNode;
};


export default void 0;