/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // for (let i = digits.length-1; i >= 0; i--) {
    //     if (digits[i] == 9) {
    //         if (i==0) {
    //             digits[i] = 0
    //             digits.unshift(1)
    //         } else {
    //             digits[0]
    //         }
    //     }else {
    //         digits[i] = digits[i] + 1
    //         return digits
    //     }
    // }
    // return digits

    for (let i = digits.length-1; i >= 0; i--) {
        if (digits[i] == 9) {
            digits[i] = 0
        }else {
            digits[i]++
            return digits
        }
    }
    //跳出for循环，说明数字全部是9 66666666这个思路清晰
    digits.unshift(1)
    return digits
};
let d1 = [1,2,9]
console.log(plusOne(d1));