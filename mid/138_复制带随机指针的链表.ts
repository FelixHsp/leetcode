/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/copy-list-with-random-pointer/
 * @Tags: 链表
 * @Date: 2022-05-18 20:45:53 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-18 21:10:24
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
//   const map = new Map();
//   let current = head;

//   while (current) {
//     map.set(current, new Node(current.val));
//     current = current.next;
//   }

//   current = head;

//   while (current) {
//     map.get(current).next = map.get(current.next) || null;
//     map.get(current).random = map.get(current.random);
//     current = current.next;
//   }

//   return map.get(head);
// };

const copyRandomList = (head: Node | null): Node | null => {
  if (!head) {
    return head;
  }
  
  let current: Node | null = head;
  while (current) {
    const temp: Node = new Node(current.val);
    temp.next = current.next;
    current.next = temp;
    current = current.next.next;
  }

  current = head;

  while (current) {
    if (current.random) {
      (current.next as Node).random = current.random.next;
    }
    current = (current.next as Node).next;
  }

  current = head;
  let newCurrent = current.next as Node;
  let result = newCurrent;
  while (current?.next && newCurrent?.next) {
    current.next = current.next.next;
    newCurrent.next = newCurrent.next.next;

    current = current.next as Node;
    newCurrent = newCurrent.next as Node;
  }
  console.log(result);
  // current.next = null;

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