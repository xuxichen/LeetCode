/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (list1 == null) return list2
    else if (list2 == null) return list1
    var res = list1.val > list2.val ? list2 : list1
    res.next = mergeTwoLists(res.next, list1.val > list2.val ?  list1 : list2)
    return res
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var a = new ListNode(1,2)
var list1 = [{
    val: 1,
    next: 2,
},{
    val:2,
    next:4
}, {
    val: 4,
    next: null
}]
var list2 = [{
    val: 1,
    next: 2,
},{
    val:3,
    next:4
}, {
    val: 4,
    next: null
}]
console.log(mergeTwoLists(list1,list2));
