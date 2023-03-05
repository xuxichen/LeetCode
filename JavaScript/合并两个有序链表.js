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
    let head = new ListNode(-1) // 实际的节点的指针
    let preNode = head // 位移指针（头结点）
    while (list1&&list2) {
        /**
         * 链表的算法题一定要把我们眼中看到的变量也好，指针也好，任何叫法都想的所见
         * 都想像成指针，而不是实际的对象或者数据，
         * 把指针和实物的对象想象成两个东西，就像真实的房子和手写的地址一样，
         * 我们实际操作的是指针，就是我们想象的手写的地址，我们不能改动实际对象或者数据。
         * 我么所有的操作都只是在操作指针
         * 
         * 如果list1的值小于等于list2的值的时候。
         * 就把list1的节点赋值给 preNode位移指针的next
         * 同时list1的节点往后移动一位；list1 = list1.next
         * 
         * 否则
         * 就把list2的节点赋值给 preNode位移指针的next
         * 同时list2的节点往后移动一位；list2 = list2.next
         * 
         * preNode位移指针的next在第一次赋值完以后，head 通过preNode 也知道了preNode 的next是什么了
         * 但当preNode = preNode.next时，preNode 和head 就断开了联系
         * 就和list1还是list2的有关系了。
         * 然后就依次往后位移指针直到其中一个链表的尾节点
         * 
         * 最后判断时哪个链表已经位移到了尾节点，然后把另外一个链表剩下的接上
         * 
         * 最后通过head的next，定位到了新的排序后链表的首节点
         */ 

        if(list1.val <= list2.val) {
            preNode.next = list1
            list1 =list1.next
        } else {
            preNode.next = list2
            list2 = list2.next
        }
        preNode = preNode.next
    }
    preNode.next = list1 == undefined ? list2:list1
    return head.next
};
