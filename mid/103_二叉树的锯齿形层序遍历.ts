/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/
 * @Date: 2022-05-24 21:00:16 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-24 21:18:33
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

const zigzagLevelOrder = (root: TreeNode | null): number[][] => {
  let isForward = true;
  const stack = root ? [[root]] : [];
  const result: number[][] = [];

  while (stack.length) {
    const cur = stack.pop() as TreeNode[];
    const curResult = [];
    const next: TreeNode[] = [];

    while (cur.length) {
      if (isForward) {
        const node = cur.shift();
        (node?.val !== undefined) && curResult.push(node.val);
        node?.left && next.push(node.left);
        node?.right && next.push(node.right);
      }
      else {
        const node = cur.pop();
        (node?.val !== undefined) && curResult.push(node.val);
        node?.right && next.unshift(node.right);
        node?.left && next.unshift(node.left);
      }
    }

    isForward = !isForward;
    result.push(curResult);
    next.length && stack.push(next);
  }

  return result;
};

const root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));
console.log(zigzagLevelOrder(root));


export default void 0;
