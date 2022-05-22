/*
 * @Author: Felix 
 * @Date: 2022-05-22 20:34:23 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-22 20:56:13
 */

const romanToInt = (s: string): number => {
  let result = 0;
  let pre = -1;

  const map: Record<string, number> = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  for (let i = 0; i < s.length; i++) {
    const cur = map[i];
    if (pre >= 0 && pre < cur) {
      result = result + cur - pre;
    }
    else {
      result += cur;
    }
    pre = cur;
  }

  return result;
};

console.log(romanToInt('III'));

export default void 0;