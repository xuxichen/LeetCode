/**
 * @param {number} n
 * @return {number}
 * 这个数据很巧合的是斐波拉契数列， 当前项 = 上一项 + 上上一项
 */
var climbStairs = function(n) {
    if (n<4)  return n

    // return climbStairs(n-1) + climbStairs(n-2)
    let preValue = 2
    let prePreValue = 3
    let result = 0
    for (let i = 4; i <= n; i++) {
        result = preValue + prePreValue
        preValue = prePreValue
        prePreValue = result

    }
    return result
};

console.log(climbStairs(5));