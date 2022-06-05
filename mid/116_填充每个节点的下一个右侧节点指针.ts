/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/
 * @Date: 2022-06-05 15:35:53 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-05 16:04:34
 */

class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;

  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
    this.next = (next === undefined ? null : next);
  }
}

const connect = (root: Node | null): Node | null => {
  if (!root) {
    return null;
  }

  const stack: Node[] = [root];
  let currentLevel = 1;
  let i = 0;

  while (i < stack.length) {
    currentLevel--;
    const node = stack.shift() as Node;

    node.left && stack.push(node.left);
    node.right && stack.push(node.right);

    if (currentLevel) {
      node.next = stack[0]
    }
    else {
      node.next = null;
      currentLevel = stack.length;
    }
  }

  return root;
};

export default void 0;