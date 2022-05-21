/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/count-good-nodes-in-binary-tree/
 * @Date: 2022-05-21 10:02:25 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-21 10:14:10
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

const goodNodes = (root: TreeNode | null): number => {
  const searchNode = (root: TreeNode | null, max: number): number => {
    let count = 0;
    if (root?.val === undefined) {
      return count;
    }
    const currentMax = Math.max(root.val, max);
    if (currentMax === root.val) {
      count ++;
    }

    return count + searchNode(root.left, currentMax) + searchNode(root.right, currentMax);
  };

  return searchNode(root, -Infinity);
};



export default void 0;