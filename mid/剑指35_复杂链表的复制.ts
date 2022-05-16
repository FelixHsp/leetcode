/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/fu-za-lian-biao-de-fu-zhi-lcof/
 * @Tags: 链表
 * @Date: 2022-05-16 21:51:26 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-16 22:25:49
 */

class Node {
  val: number;
  random: Node | null;
  next: Node | null;

  constructor(val?: number, next?: Node | null, random?: Node | null) {
    this.val = (val === undefined ? 0 : val);
    this.random = (random === undefined ? null : random);
    this.next = (next === undefined ? null : next);
  }
}

// const copyRandomList = (head: Node | null): Node | null => {
//   if (!head) {
//     return head;
//   };

//   let node: Node | null = head;
//   let map = new Map();

//   while (node) {
//     map.set(node, new Node(node.val));
//     node = node.next;
//   }

//   node = head;

//   while (node) {
//     map.get(node).next = map.get(node.next) || null;
//     map.get(node).random = map.get(node.random) || null;
//     node = node.next;
//   }

//   return map.get(head);
// };

const copyRandomList = (head: Node | null): Node | null => {
  if (!head) {
    return head;
  };
  
  let current: Node | null = head;

  while (current) {
    current.next = new Node(current.val, current.next);
    current = current.next.next;
  }

  current = head;

  while(current){
    if(current.random !== null) {
      (current.next as Node).random = current.random.next;
    };
    current = (current.next as Node).next;
  }

  // 拆分链表
  let newNode = head.next as Node, result = newNode;
  current = head;
  while(current.next && newNode.next){
    current.next = current.next.next;
    newNode.next = newNode.next.next;
    current = current.next as Node;
    newNode = newNode.next as Node;
  }
  current.next= null;

  return result;
}

const node1 = new Node(7);
const node2 = new Node(13);
const node3 = new Node(11);
const node4 = new Node(10);
const node5 = new Node(1);

node1.next = node2;
node2.next = node3;
node2.random = node1;
node3.next = node4;
node3.random = node5;
node4.next = node5;
node4.random = node3;

console.log(copyRandomList(node1));

export default void 0;