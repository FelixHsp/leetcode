/*
 * @Author: Felix 
 * @File: https://leetcode-cn.com/problems/flood-fill/
 * @Date: 2022-05-04 16:29:23 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-04 16:53:51
 */

const floodFill = (image: number[][], sr: number, sc: number, newColor: number): number[][] => {
  const startColor = image[sr][sc];
  const m = image.length;
  const n = image[0].length;

  const dfs = (i: number, j: number) => {
    console.log(i, j);
    if (i < 0 || i >= m || j < 0 || j >= n || image[i][j] !== startColor) {
      return;
    }
    
    image[i][j] = newColor;

    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  };

  if (newColor !== startColor) {
    dfs(sr, sc);
  }

  return image;
};

const image = [[0,0,0],[0,1,1]];
const sr = 1;
const sc = 1;
const newColor = 1;
console.log(floodFill(image, sr, sc, newColor));

export default void 0;