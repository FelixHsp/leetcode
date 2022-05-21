/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/add-two-numbers/
 * @Date: 2022-05-21 16:06:34 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-21 18:14:37
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val)
      this.next = (next === undefined ? null : next)
  }
}

const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  let result = new ListNode();
  let head = result;
  let reset = 0;

  while (l1?.val !== undefined || l2?.val !== undefined || reset) {
    const cur = (l1?.val || 0) + (l2?.val || 0) + reset;
    reset = Math.floor(cur / 10);
    head.next = new ListNode(cur % 10);
    
    head = head.next;
    l1 = l1?.next || null;
    l2 = l2?.next || null;
  }
  return result.next;
};

const l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

export default void 0;
