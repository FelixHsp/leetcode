/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/longest-absolute-file-path/
 * @Date: 2022-04-20 21:01:46 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-04-20 22:03:51
 */

const lengthLongestPath = (input: string): number => {
  const fileFragment = input.split('\n');

  let currentFileFragment: string[] = [];
  let maxNumber = 0;
  let currentLevel = 0;

  for (let i = 0; i < fileFragment.length; i ++) {
    const levelList = fileFragment[i].match(/(\t+)(.+)/);

    if (!levelList) {
      currentFileFragment[0] = fileFragment[i];
      if (/\.\w+/.test(currentFileFragment[0])) {
        maxNumber = Math.max(maxNumber, currentFileFragment[0].length);
      }
      continue;
    }

    const newLevel = levelList[1].length;
    if (newLevel > currentLevel) {
      currentFileFragment.push(levelList[2]);
    }
    else {
      currentFileFragment = currentFileFragment.slice(0, newLevel);
      currentFileFragment.push(levelList[2]);
    }
    
    currentLevel = newLevel;

    if (/\.\w+/.test(currentFileFragment.join('/'))) {
      maxNumber = Math.max(maxNumber, currentFileFragment.join('/').length);
    }
  }

  return maxNumber;
};

// const input = 'dir\n\tsubdir2\n\t\tfile.ext';
// const input = 'file1.txt\nfile2.txt\nlongfile.txt';
// const input = 'dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext';
const input = 'dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext';
// const input = 'a';
console.log(lengthLongestPath(input));
export default void 0;