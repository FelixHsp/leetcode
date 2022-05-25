/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/design-linked-list/
 * @Tags: 链表
 * @Date: 2022-05-25 21:34:53 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-25 22:03:02
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val)
      this.next = (next === undefined ? null : next)
  }
}

class MyLinkedList {
  list: ListNode | null;

  constructor() {
    this.list = null;
  }

  get(index: number): number {
    let curList = this.list;
    if (!curList) {
      return -1;
    }
    
    while (index) {
      if (!curList.next) {
        return -1;
      }
      else {
        curList = curList.next;
        index--;
      }
    }

    return curList.val;
  }

  addAtHead(val: number): void {
    this.list = new ListNode(val, this.list);
  }

  addAtTail(val: number): void {
    let curList = this.list;
    if (!curList) {
      this.list = new ListNode(val);
      return;
    }

    while (curList.next) {
      curList = curList.next;
    }
    curList.next = new ListNode(val);
  }

  addAtIndex(index: number, val: number): void {
    if (index <= 0) {
      this.addAtHead(val);
    }
    else {
      let curHead = new ListNode(0, this.list)
      let curList = curHead;

      while (index) {
        if (!curList.next) {
          return;
        }
        else {
          curList = curList.next;
          index--;
        }
      }

      const addNode = new ListNode(val, curList.next);
      curList.next = addNode;
      this.list = curHead.next;
    }
  }

  deleteAtIndex(index: number): void {
    if (index < 0) {
      return;
    }
    else {
      let curHead = new ListNode(0, this.list)
      let curList = curHead;

      while (index > 0) {
        if (!curList.next) {
          return;
        }
        else {
          curList = curList.next;
          index--;
        }
      }

      curList.next = curList.next?.next || null;
      this.list = curHead.next;
    }
  }
}

// const linkedList = new MyLinkedList();
// linkedList.addAtHead(1);
// linkedList.addAtTail(3);
// linkedList.addAtIndex(1, 2);
// console.log(linkedList.list);
// console.log(linkedList.get(1));
// linkedList.deleteAtIndex(1);
// console.log(linkedList.list);
// console.log(linkedList.get(1));
const linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1, 2);
linkedList.get(1);
console.log(linkedList.list);
linkedList.deleteAtIndex(0);
console.log(linkedList.list);
linkedList.get(0);

export default void 0;