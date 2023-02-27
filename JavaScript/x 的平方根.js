/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x<2) return x // 特殊处理
    let min = 0
    let max = x
    let ans = -1
    /**
     * 二分法
     */
    while (min<=max) {
        let mid = parseInt(min + (max-min)/2)
        if (mid<= parseInt(x/mid)) { // mid * mid正数很有可能就溢出了。所以用除法
            ans = mid
            min = mid + 1
        } else {
            max = mid - 1
        }
    };
    return parseInt(ans)

    /**
     * 菜狗牛顿收敛法看都看不懂
     */
};

console.log(mySqrt(3));