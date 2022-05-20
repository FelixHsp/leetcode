/*
 * @Author: Felix 
 * @Date: 2022-05-20 21:35:28 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-20 21:50:54
 */

const spiralOrder = (matrix: number[][]): number[] => {
  const result: number[] = [];
  // 当前指针走动方向
  let direction: 'right' | 'down' | 'left' | 'up' = 'right';

  // 起点指针
  let i = 0;
  let j = 0;

  // 需要走动总步数
  let count = matrix.length * matrix[0].length;

  while (count > 0) {
    result.push(matrix[i][j]);
    // 将该点置为边界
    matrix[i][j] = 0;
    // 总步数 -1
    count--;
    
    // 方向控制
    switch (direction) {
      case 'right':
        if (!matrix?.[i]?.[j + 1]) {
          // 遇到有边界，向下转向
          direction = 'down';
          i++;
        }
        else {
          j++;
        }
        break;
      case 'down':
        if (!matrix?.[i + 1]?.[j]) {
          // 遇到下边界向左转向
          direction = 'left';
          j--;
        }
        else {
          i++;
        }
        break;
      case 'left':
        if (!matrix?.[i]?.[j - 1]) {
          // 遇到左边界向上转向
          direction = 'up';
          i--;
        }
        else {
          j--;
        }
        break;
      case 'up':
        if (!matrix?.[i - 1]?.[j]) {
          // 遇到上边界向右转向
          direction = 'right';
          j++;
        }
        else {
          i--;
        }
        break;
    }
  }

  return result;
};

export default void 0;