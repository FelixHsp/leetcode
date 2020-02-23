/**
 * @file 剑指offer https://www.nowcoder.com/practice/d0267f7f55b3412ba93bd35cfa8e8035?tpId=13&tqId=11156&tPage=1&rp=1&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking
 * @author Felix
 */

function printListFromTailToHead(head) {
    let ArrayList = [];
    let node = head;
    while (node) {
        ArrayList.push(node.val);
        node = node.next;
    }
    // 倒序返回
    return ArrayList.reverse();
}