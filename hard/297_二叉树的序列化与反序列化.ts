/*
 * @Author: Felix 
 * @File: https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/
 * @Date: 2022-05-14 17:07:12 
 * @Last Modified by: Felix
 * @Last Modified time: 2022-05-14 18:40:49
 */

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
}

// const serialize = (root: TreeNode | null): string => {
//   const firstArray: number[] = [];
//   const midArray: number[] = [];

//   const searchFirst = (root: TreeNode | null) => {
//     if (!root) {
//       return;
//     }

//     firstArray.push(root.val);
//     searchFirst(root.left);
//     searchFirst(root.right);
//   };

//   const searchMid = (root: TreeNode | null) => {
//     if (!root) {
//       return;
//     }

//     searchMid(root.left);
//     midArray.push(root.val);
//     searchMid(root.right);
//   };

//   searchFirst(root);
//   searchMid(root);
  
//   return `${firstArray.join(',')} ${midArray.join(',')}`;
// };

// const deserialize = (data: string): TreeNode | null => {
//   const [firstArray, midArray] = data.split(' ').map(item => item.split(','));
//   if (data === ' ') {
//     return null;
//   }

//   const creatNode = (firstArray: string[], midArray: string[]): TreeNode | null => {
//     if (!firstArray.length) {
//       return null;
//     }


//     const currentVal = firstArray.shift();


//     const midArrayIndex = midArray.findIndex((item) => item === currentVal);
//     const leftMidArray = midArray.slice(0, midArrayIndex);
//     const rightMidArray = midArray.slice(midArrayIndex + 1);
//     const leftFirstArray = firstArray.filter((item) => leftMidArray.includes(item));
//     const rightFirstArray = firstArray.filter((item) => rightMidArray.includes(item));
    
    
//     return new TreeNode(Number(currentVal), creatNode(leftFirstArray, leftMidArray), creatNode(rightFirstArray, rightMidArray));
//   };


//   return creatNode(firstArray, midArray);
// };

const serialize = (root: TreeNode | null): string => {
  if (!root) {
    return 'None';
  }
  const left = serialize(root.left);
  const right = serialize(root.right);
  return `${root.val},${left},${right}`;
}

const deserialize = (data: string): TreeNode | null => {
  const array = data.split(',');

  const createTree = (array: string[]): TreeNode | null => {
    const node = array.shift();
    if (node === 'None') {
      return null;
    }

    return new TreeNode(Number(node), createTree(array), createTree(array));
  };
  
  return createTree(array);
}

const root = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)));

console.log(deserialize(serialize(root)));
export default 0;