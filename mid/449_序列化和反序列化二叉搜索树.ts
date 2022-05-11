/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/serialize-and-deserialize-bst/
 * @Date: 2022-05-11 21:22:03 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-11 22:57:01
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

const serialize = (root: TreeNode | null): string => {
  if (!root) {
    return '';
  };
  const result: number[] = [];
  const dfs = (root: TreeNode | null) => {
    if (root) {
      result.push(root.val);
      dfs(root.left);
      dfs(root.right);
    }
  }
  dfs(root);
  
  return result.join(',');
};

const deserialize = (data: string): TreeNode | null => {
  if (!data) {
    return null;
  }

  const findSite = (root: TreeNode, n: number) => {
    if (n < root.val) {
      if (root.left) {
        findSite(root.left, n);
      } else {
        root.left = new TreeNode(n);
      }
    } else if (n > root.val) {
      if (root.right) {
        findSite(root.right, n);
      } else {
        root.right = new TreeNode(n);
      }
    }
  }

  const treeData = data.split(',');
  const tree = new TreeNode(Number(treeData.shift()))
  treeData.forEach(n => {
    findSite(tree, +n)
  })

  return tree;
};

// const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)));
// const root = new TreeNode(1, null, new TreeNode(2));
const root = new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4));
console.log(deserialize(serialize(root)));

export default void 0;