/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // let map = {}
    // for(let i=0; i< nums.length; i++) {
    //     if (map[nums[i]] != undefined) {
    //         map[nums[i]] = 2
    //     } else {
    //         map[nums[i]] = 1
    //     }
    // }
    // for (let key in map) {
    //     if (map[key] == 1) {
    //         return key
    //     }
    // }
    // if (nums.length == 1) return nums[0]
    // for(let i=0; i< nums.length-1; i++) {
    //     for(let j=i+1;j<nums.length; j++) {
    //         if(nums[i] == nums[j]) {
    //             nums.splice(i,1)
    //             nums.splice(j-1,1)
    //             i--
    //         }
    //     }
    // }
    // return nums[0]

    /**
     * 每天都在学啊，就不能自己做一个两个题目么
     * 交换律：a ^ b ^ c <=> a ^ c ^ b

        任何数于0异或为任何数 0 ^ n => n

        相同的数异或为0: n ^ n => 0

        var a = [2,3,2,4,4]

        2 ^ 3 ^ 2 ^ 4 ^ 4等价于 2 ^ 2 ^ 4 ^ 4 ^ 3 => 0 ^ 0 ^3 => 3
     */
    let ans = 0
    for (const num of nums) {
        ans ^=num
    }
    return ans
};

let arr = [1,3,1,-1,3]
console.log(singleNumber(arr));