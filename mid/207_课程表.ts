/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/course-schedule/
 * @Date: 2022-07-24 10:45:05 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-07-24 11:04:41
 */

const canFinish = (numCourses: number, prerequisites: number[][]): boolean => {
  const courseArray = Array.from({ length: numCourses }).fill(0) as number[];
  const courseMap: Record<number, number[]> = {};

  for (const [cur, pre] of prerequisites) {
    courseArray[cur]++; 

    courseMap[pre]?.push(cur) || (courseMap[pre] = [cur]);
  }

  const canLearn = [];
  for (let i = 0; i < courseArray.length; i++) {
    if (!courseArray[i]) {
      canLearn.push(i);
    }
  }

  let count = 0;
  while (canLearn.length) {
    const courseIndex = canLearn.shift() as number;
    count++;

    const nextArray = courseMap[courseIndex] || [];
    for (const next of nextArray) {
      courseArray[next]--;
      if (courseArray[next] === 0) {
        canLearn.push(next);
      }
    }
  }

  return count === numCourses;
};

export default void 0;