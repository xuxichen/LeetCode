/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
 * 输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]
输入：head = [7,7,7,7], val = 7
输出：[]
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let result = new ListNode()
    let prehead = result
    while(head) {
        if(head.val == val) {
            head = head.next
            prehead.next = head
        } else {
            prehead.next = head
            prehead = prehead.next
            head = head.next
        }
    }
    return result.next
};