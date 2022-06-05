/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/add-two-numbers-ii/
 * @Date: 2022-06-05 19:46:26 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-06-05 20:29:02
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
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  let differ = 0;
  let result: ListNode;
  let mainHead: ListNode | null = l1;
  let secondHead: ListNode | null = l2;

  while (mainHead || secondHead) {
    if (!mainHead && secondHead) {
      differ++;
    }
    if (mainHead && !secondHead) {
      differ--;
    }
    
    mainHead = mainHead?.next || null;
    secondHead = secondHead?.next || null;
  }
  
  if (differ > 0) {
    mainHead = new ListNode(0, l1);
    secondHead = new ListNode(0, l2);
  }
  else {
    mainHead = new ListNode(0, l2);
    secondHead = new ListNode(0, l1);
  }
  result = mainHead;

  const compute = (level: number): number => {
    if (!mainHead || !secondHead) {
      return 0;
    }

    if (level < Math.abs(differ)) {
      const currentMainHead = mainHead;
      mainHead = mainHead.next;
      const result = currentMainHead.val + 0 + compute(level + 1);
      currentMainHead.val = result % 10;
      return Math.floor(result / 10);
    }
    else {
      const currentMainHead = mainHead;
      mainHead = mainHead.next;
      const currentSecondHead = secondHead;
      secondHead = secondHead.next;
      const result = currentMainHead.val + currentSecondHead.val + compute(level + 1);
      currentMainHead.val = result % 10;
      return Math.floor(result / 10);
    }
  };

  compute(0);
  while (!result.val && result.next) {
    result = result.next;
  }
  return result;
};

export default void 0;