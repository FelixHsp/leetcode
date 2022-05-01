/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/all-elements-in-two-binary-search-trees/
 * @Tags: 树、遍历、归并排序
 * @Date: 2022-05-01 08:49:55 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-01 09:43:43
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
   
// const getAllElements = (root1: TreeNode | null, root2: TreeNode | null): number[] => {
//   const stack = [];
//   const node = [root1, root2];

//   while (node.length) {
//     const currentNode = node.shift();

//     if (currentNode) {
//       currentNode?.left && node.push(currentNode.left);
//       currentNode?.right && node.push(currentNode.right);
      
//       stack.push(currentNode.val);
//     }
//   };

//   return stack.sort((a, b) => {
//     return a - b;
//   });
// };

const getAllElements = (root1: TreeNode | null, root2: TreeNode | null): number[] => {
  const num1: number[] = [];
  const num2: number[] = [];

  const find = (num: number[], root: TreeNode | null) => {
    if (root) {
      find(num, root.left);
      num.push(root.val);
      find(num, root.right);
    }
  };

  find(num1, root1);
  find(num2, root2);

  let i = 0;
  while (num2.length) {
    if (typeof num1[i] === 'undefined') {
      num1.push(num2.shift() as number);
    }
    else if (num1[i] >= num2[0]) {
      num1.splice(i, 0, num2.shift() as number);
    }
    i++;
  }

  return num1;
};

const root1 = new TreeNode(1, new TreeNode(0));
const root2 = new TreeNode(1, new TreeNode(0), new TreeNode(3));

console.log(getAllElements(root1, root2));

export default void 0;