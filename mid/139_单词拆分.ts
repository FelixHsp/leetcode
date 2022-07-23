/*
 * @Author: Felix 
 * @Date: 2022-07-23 10:15:34 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-07-23 10:44:42
 */

const wordBreak = (s: string, wordDict: string[], seenArray: string[] = []): boolean => {
  if (!s) {
    return true;
  }

  if (seenArray.includes(s)) {
    return false;
  }
  
  for (const word of wordDict) {
    const newStr = s.replace(new RegExp(`^${word}`), '');

    if (newStr !== s && wordBreak(newStr, wordDict, seenArray)) {
      return true;
    }
  }

  seenArray.push(s);
  return false;
};

console.log(wordBreak('aaaaaaaaaaaaaaaaaaaaaaaab', ['aa', 'aaaaaa', 'aaaaaaaaa']));

export default void 0;