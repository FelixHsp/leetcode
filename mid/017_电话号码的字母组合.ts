/*
 * @Author: Felix 
 * @Date: 2022-05-24 21:28:53 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-24 21:44:47
 */

const letterCombinations = (digits: string): string[] => {
  if (!digits) {
    return [];
  }
  const map: Record<string, string> = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  const result: string[] = [];

  const dfs = (cur: string, level: number) => {
    if (level > digits.length - 1) {
      result.push(cur);
      return;
    }

    const words = map[digits[level]];
    for (let i = 0; i < words.length; i++) {
      dfs(`${cur}${words[i]}`, level + 1);
    }
  };

  dfs('', 0);

  return result;
}

export default void 0;
