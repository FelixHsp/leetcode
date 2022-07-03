/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/sort-list/
 * @Date: 2022-07-03 13:40:51 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-07-03 14:14:45
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }
}

const sortList = (head: ListNode | null): ListNode | null => {
  if (!head || !head.next) {
    return head;
  }

  const merge = (left: ListNode | null, right: ListNode | null) => {
    let result = new ListNode(0);
    let cur = result;

    while (left && right) {
      if (left.val < right.val) {
        cur.next = left;
        left = left.next;
      }
      else {
        cur.next = right;
        right = right.next;
      }
      cur = cur.next;
    }

    cur.next = left || right;
    return result.next;
  };

  const cut = (listNode: ListNode) => {
    if (!listNode?.next) {
      return listNode;
    }

    let slow: ListNode = listNode;
    let fast: ListNode | null = listNode;
    while (fast?.next) {
      fast = fast.next.next;
      slow = slow.next as ListNode;
    }

    let rightList = slow.next as ListNode;
    slow.next = null;
    let lefetList = listNode;

    return merge(lefetList, rightList);
  };

  return cut(head);
};

export default void 0;