/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/remove-linked-list-elements/
 * @Tags: 链表
 * @Date: 2022-05-25 21:18:53 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-25 21:29:34
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val)
      this.next = (next === undefined ? null : next)
  }
}

const removeElements = (head: ListNode | null, val: number): ListNode | null => {
  let list: ListNode | null = new ListNode(-1, head);

  while (list?.next) {
    if (list.next.val === val) {
      list.next = list.next.next;
    }
    else {
      list = list.next;
    }
  }

  return head;
};

export default void 0;
