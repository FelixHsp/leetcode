/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/merge-two-sorted-lists/
 * @Tags: 链表、递归
 * @Date: 2022-05-23 21:08:14 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-23 21:31:48
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val)
      this.next = (next === undefined ? null : next)
  }
}

const mergeTwoLists = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  }
  else {
    list2.next = mergeTwoLists(list2.next, list1);
    return list2
  }
};


export default void 0;