/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/most-frequent-subtree-sum/
 * @Date: 2022-06-19 10:11:54 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-19 10:26:26
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

const findFrequentTreeSum = (root: TreeNode | null): number[] => {
  const map: Record<string, number> = {};
  let max = 0;

  const find = (root: TreeNode | null): number => {
    if (!root) {
      return 0;
    }
    const val = root.val + find(root.left) + find(root.right);
    const currentNum = (map[val] || 0) + 1;
    max = Math.max(currentNum, max);
    map[val] = currentNum;
    return val;
  };
  find(root);
  
  return Object.keys(map).filter((num: string) => {
    return map[num] === max;
  }).map((item) => {
    return Number(item);
  });
};

const root = new TreeNode(5, new TreeNode(2), new TreeNode(-5));
console.log(findFrequentTreeSum(root));

export default void 0;