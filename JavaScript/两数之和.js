/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(nums.length<=1) return [];
    let map = {}
    for(let i=0; i<nums.length; i++) {
        // 判断target-nums【i】的值是否是map中的key
        // 如果是的话，可以根据key值取得map相对应的value，
        // 也就是两数之和的第一个下标i
        if (map[target-nums[i]] !== undefined) {
            return [map[target-nums[i]],i]
        }
        // 以数组第i个值为k， i为值存储一个map
        map[nums[i]] = i
    }
    return [];
}