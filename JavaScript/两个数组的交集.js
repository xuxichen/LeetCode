/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let map = {}
    let map2 = {}
    let result = []
    for (let i=0;i<nums1.length; i++) {
        if(map[nums1[i]] == undefined) {
            map[nums1[i]] = i
        }
    }
    for (let i=0;i<nums2.length; i++) {
        if(map[nums2[i]] != undefined && map2[nums2[i]] == undefined) {
            map2[nums2[i]] = i
            result.push(nums2[i])
        }
    }
    return result
}