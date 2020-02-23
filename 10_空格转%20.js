/**
 * @file 剑指offer https://www.nowcoder.com/practice/4060ac7e3e404ad1a894ef3e17650423?tpId=13&tqId=11155&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking
 * @author Felix
 */
function replaceSpace(str) {
    return str.replace(/ /g, '%20');
}

let string = "We Are Happy";
console.log(replaceSpace(string));