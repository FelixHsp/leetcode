/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/odd-even-linked-list/
 * @Date: 2022-07-02 11:11:35 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-07-02 11:34:19
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val)
      this.next = (next === undefined ? null : next)
  }
}

const oddEvenList = (head: ListNode | null): ListNode | null => {
  if (!head || !head.next || !head.next.next) {
    return head;
  }

  let head1: ListNode | null = head;
  let len = 0;
  let final = head;
  
  while (head1) {
    len++;
    final = head1;
    head1 = head1.next;
  }

  let cur = 0;
  let head2: ListNode | null = head;
  while (cur < len - 1) {
    cur++;

    if (cur % 2 === 1) {
      // @ts-ignore
      const temp = head2.next;
      // @ts-ignore
      head2.next = temp?.next;
      // @ts-ignore
      temp.next = null;
      final.next = temp;
      // @ts-ignore
      final = final.next;
      cur++;
    }

    // @ts-ignore
    head2 = head2.next;
  }

  return head;
};

export default void 0;