/**
 * @file 剑指offer https://www.nowcoder.com/practice/abc3fe2ce8e146608e868a70efebf62e?tpId=13&tqId=11154&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking
 * @author Felix
 */

function Find(target, array) {
    const width = array[0].length;
    const height = array.length;
    for (let i = 0; i < height; i++) {
        if (array[i][height-1] === target) {
            return true;
        }
        if (array[i][height-1] > target) {
            for (let j = 0; j < width; j++) {
                if (target === array[i][j]) {
                    return true;
                }
            }
        }
    }
}

var array = [
    [1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]
];

var target = 7;

console.log(Find(target, array));