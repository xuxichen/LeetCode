/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {


    // let tmp = nums[0];
    // for (let i=1; i<nums.length; i++) {
    //     if (tmp == nums[i]) {
    //         nums.splice(i--,1)
    //     } else {
    //         tmp = nums[i]
    //     }
    // }
    // return nums.length


    /**
     * 错位指针
     * j和i初始相差1，相当于第一个前后指针
     * 如果nums【j】 和 nums【i】 相等
     * j就站在原地不动，i继续往后走
     * 当一但nums【j】和nums【j】不相等的时候
     * 把nums【i】的值赋给j的后一个位置。所以
     * num【j+1】 = nums【i】
     * 赋值完之后，j也要往后指一位。因为之前的两个数已经拍好序了
     *  nums[++j] = nums[i] 的前++j更简洁的让j往后移了一位
     * 最后返回需要的是nums的长度
     * j只是排好序之后的最后一个下标 所以返回的时候要+1
     */
    if (nums.length <2) return nums.length
    let j = 0;
    for (let i=1; i<nums.length; i++) {
        if(nums[j] != nums[i])  
            nums[++j] = nums[i]
    }
    
    return j+1
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));