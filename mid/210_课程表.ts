/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/course-schedule-ii/
 * @Date: 2022-07-24 11:06:19 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-07-24 11:12:14
 */

const findOrder = (numCourses: number, prerequisites: number[][]): number[] => {
  const courseArray = Array.from({ length: numCourses }).fill(0) as number[];
  const courseMap: Record<number, number[]> = {};
  const courseOrder: number[] = [];

  for (const [cur, pre] of prerequisites) {
    courseArray[cur]++;
    
    courseMap[pre]?.push(cur) || (courseMap[pre] = [cur]);
  }

  const canLearn: number[] = [];
  for (let i = 0; i < courseArray.length; i++) {
    if (!courseArray[i]) {
      canLearn.push(i);
    }
  }

  while (canLearn.length) {
    const course = canLearn.shift() as number;
    courseOrder.push(course);

    const nextArray = courseMap[course] || [];
    for (const next of nextArray) {
      courseArray[next]--;
      if (courseArray[next] === 0) {
        canLearn.push(next);
      }
    }
  }

  return courseOrder.length === numCourses ? courseOrder : [];
};

export default void 0;