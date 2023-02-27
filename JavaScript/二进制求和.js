/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * 
 * 此题的解题思路
 *  利用二进制取余算的每一位的值
 *  利用除以的值算出是否需要进位
 *  
 */
var addBinary = function(a, b) {
    let i = a.length-1
    let j = b.length-1
    let carry = 0  // 进位
    let result = ''
    while (j>=0 || i>=0) {
        let sum = 0
        sum += carry
        if (i>=0) {
            sum = sum + parseInt(a[i])
        }
        if (j>=0) {
            sum = sum + parseInt(b[j])
        }
        // 前面的sum 算出当前位 实际的值，一位一位的算，实际的sum结果只会是0，1，2，3
        // 然后对sum对二取余就能得到当前位的值，因为取余实际是十进制转二进制的基本操作，取余的结果只会是0和1
        result = sum%2 + result 
        // 然后对sum的值除以2来获得是否进位，这里是最巧妙的点，
        // 因为sum的值只能是0，1，2，3除以2的话。
        // 0和1除以2的结果是0，也可以是看做不需要进位
        // 2和3除以2的结果是1.自然呢是可以看做需要进位，实际逻辑也是需要进位
        // 所以用carry存起来，放入下一次的循环来加给sum，实际进位也是下一位要加一
        // 这逻辑就很巧妙了
        carry = parseInt(sum/2) 
        i--
        j--
    }
    if (carry!=0) {
        result = '1' + result
    }
    return result
};

let a = "11", b = "1"
let a1 = "1010", b1 = "1011"
console.log(addBinary(a1,b1));