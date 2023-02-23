/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 算法导论老头的第一题二分查找法，我是个大傻逼，竟然忘记了
var searchInsert = function(nums, target) {
    let start = 0
    let end = nums.length-1
    while(start<=end) {
        let i = start + parseInt((end-start)/2)
        if(nums[i]<target) {
            start = i + 1
        } else  {
            end = i-1
        }
        
    }
    return start
};

let nums = [1,3,5,6], target = 7

console.log(searchInsert(nums, target));