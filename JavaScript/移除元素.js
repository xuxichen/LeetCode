/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    /**
     * 这个题的思路和删除有序数组中的重复项的思路是一样的
     */
    let j=0
    for (let i=0;i<nums.length;i++){
		if (val!=nums[i]){
            nums[j++]=nums[i]
        }
	}
    return j
};