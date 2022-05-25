/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/swap-nodes-in-pairs/
 * @Tags: 链表
 * @Date: 2022-05-25 22:25:20 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-25 22:50:29
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

const swapPairs = (head: ListNode | null): ListNode | null => {
  const list: ListNode | null = new ListNode(0, head);
  let cur: ListNode | null = list;

  while (cur?.next && cur.next.next) {
    const next: ListNode = cur.next;
    const nextNext = cur.next.next;
    cur.next = nextNext;
    next.next = nextNext.next;
    nextNext.next = next;
    cur = next;
  }

  return list.next;
};

export default void 0;