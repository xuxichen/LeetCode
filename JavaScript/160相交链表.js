/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    /**
        定义两个指针, 第一轮让两个到达末尾的节点指向另一个链表的头部, 
        最后如果相遇则为交点(在第一轮移动中恰好抹除了长度差)
        两个指针等于移动了相同的距离, 有交点就返回, 无交点就是各走了两条指针的长度
        
        headA:[4,1,8,4,5]
        headB:[5,6,1,8,4,5]

           a实际走的路径 [4,1,8,4,5,5,6,1,8,4,5]
           b实际走的路径 [5,6,1,8,4,5,4,1,8,4,5]
           如果有相交 所以他们在第二轮的交换路径的时候，在同等的步数时必然是会相交。
           因为题目的相交就是在后面

        在这里第一轮体现在pA和pB第一次到达尾部会移向另一链表的表头, 
        而第二轮体现在如果pA或pB相交就返回交点, 不相交最后就是null==null
    **/
    // headA链表头结点
    let a = headA
    // headA链表头结点
    let b = headB
    while(a != b) {
        // 走到a链表末尾，转到b
        if (a) a = a.next
        else a = headB
        // 走到b链表末尾，转到a
        if (b) b = b.next
        else b = headA 
    }
    return a
};