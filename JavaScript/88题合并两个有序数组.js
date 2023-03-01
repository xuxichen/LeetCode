
// 人这种智商的差距，真的叫人绝望啊，总是做不出来，做过了有忘记，看得懂就是做不出来，真的好没自信心啊
// 我还是拣着难度为简单的啊。为什么就是做不出来啊
// 好痛苦啊


/**
 * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

 

示例 1：

输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
输出：[1,2,2,3,5,6]
解释：需要合并 [1,2,3] 和 [2,5,6] 。
合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
示例 2：

输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
解释：需要合并 [1] 和 [] 。
合并结果是 [1] 。
示例 3：

输入：nums1 = [0], m = 0, nums2 = [1], n = 1
输出：[1]
解释：需要合并的数组是 [] 和 [1] 。
合并结果是 [1] 。
注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。
 

提示：

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109
 

进阶：你可以设计实现一个时间复杂度为 O(m + n) 的算法解决此问题吗？

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/merge-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    /**
     * m 和 n为两个数组的长度，实际上nums1的长度是m+n
     * 所以 nums1 有元素的最后一个元素的下标是m-1,所以用m--
     * nums2的最后一个元素的下标是n-1，之所以用--n是要用m--+--n求出nnums1实际的最后一个元素的下标
     * 
     */
    let last = m-- + --n
    // 用n的长度来作为循化判断条件是因为
    // n = 0,则意味着所有的nums2 已经赋值给nums1了。
    // 因为nums1 本身就是有序的数组，
    // 如果n等于0了，m还不等于0，数组nums1也是有序的了
    while(n>=0) {
        /**
         * 这个思路巧的就是肯定知道nums1的长度为m+n
         * 从后往前一个一个赋值，nums1[last--] 后面的n个元素肯定是0
         * 那么就从后往前比较nums1[m] 和 nums2[n]
         * 因为本身就是有序的数组
         * nums1[m] 和 nums2[n]大的肯定就是两个数组都大的
         * 所以赋值给nums1[last--],last-- 后减减就是依次往前赋值，每次赋值了，就往前挪一位
         * 同时还要判断m是不是到了0了，如果m到0了，n还没到0。就依次把nums2的前n-m项依次放入nums1中
         */
        nums1[last--] = (m>=0 && nums1[m]>nums2[n]) ? nums1[m--]: nums2[n--]
    }
};

let nums1 = [0], m = 0, nums2 = [1], n = 1
console.log(merge(nums1, m, nums2, n));