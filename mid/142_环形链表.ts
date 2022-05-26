/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/linked-list-cycle-ii/
 * @Date: 2022-05-26 21:07:51 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-26 21:25:06
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

// const detectCycle = (head: ListNode | null): ListNode | null => {
//   const map: Map<ListNode, number> = new Map();

//   while (head?.next) {
//     if (map.has(head)) {
//       return head;
//     }
//     else {
//       map.set(head, 1);
//     }
//     head = head.next;
//   }

//   return null;
// };

const detectCycle = (head: ListNode | null): ListNode | null => {
  let fast = head; 
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = (slow as ListNode).next;

    if (fast === slow) {
      fast = head;
      while (1) {
        if (fast === slow) {
          return fast;
        }
        slow = (slow as ListNode).next;
        fast = (fast as ListNode).next;
      }
    }
  }
  
  return null;
};


export default void 0;
