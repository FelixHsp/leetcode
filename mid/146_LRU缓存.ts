/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/lru-cache/
 * @Date: 2022-05-18 21:20:12 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-19 22:37:28
 */

class LRUCache {
  private capacity: number;
  private map: Map<number, number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key: number): number {
    if(this.map.has(key)){
      let value = this.map.get(key) as number;
      this.map.delete(key);
      this.map.set(key, value);
      return value;
    } else {
      return -1;
    }
  }

  put(key: number, value: number): void {
    if(this.map.has(key)){
      this.map.delete(key);
    }
    this.map.set(key, value);
    if(this.map.size > this.capacity){
      this.map.delete(this.map.keys().next().value);
    }
  }
}

const obj = new LRUCache(2);
obj.put(2, 1);
obj.put(1, 1);
obj.put(2, 3);
obj.put(4, 1);
console.log(obj.get(1));
console.log(obj.get(2));

export default void 0;