/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/reorder-data-in-log-files/
 * @Date: 2022-05-03 11:00:37 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-03 12:09:14
 */

const reorderLogFiles = (logs: string[]): string[] => {
  const stack: string[] = [];

  for (let i = 0; i < logs.length; i++) {
    const array = (logs[i].match(/(\b\w+\b)/g) as RegExpMatchArray);
    if (!isNaN(Number(array[1][0]))) {
      stack.push(logs[i]);
      continue;
    }
    
    let j = 0;
    while (j <= stack.length) {
      if (!stack[j]) {
        stack.splice(j, 0, logs[i]);
        break;
      }

      const currentArray = (stack[j].match(/(\b\w+\b)/g) as RegExpMatchArray);

      if (
        !isNaN(Number(currentArray[1][0]))
        || currentArray.slice(1).join('0') > array.slice(1).join('0')
        || (currentArray.slice(1).join('0') === array.slice(1).join('0') && currentArray[0] > array[0])
      ) {
        stack.splice(j, 0, logs[i]);
        break;
      }

      j++;
    }
  }

  return stack;
};


const logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo","a2 act car"];
// const logs = ["5 m w","j mo","t q h","g 07","o 2 0"];
console.log(reorderLogFiles(logs));

export default void 0;
