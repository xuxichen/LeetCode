/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    // 第一种思路最神奇，但运算确实比较慢
    // while(s.includes('{}') || s.includes('()') || s.includes('[]')) {
    //     s = s.replace('{}', '')
    //     s = s.replace('()', '')
    //     s = s.replace('[]', '')
    // }
    // return s.length == 0
   
    // 第二种 思路最清晰，内存战的也少，逻辑路径最短
    if (s.length%2 != 0) return false
    const stack = [] // 定义一个数组用来存根据左侧括号而判定的右侧括号
    for(let c of s) {
        if (c == '{')
            stack.push('}')
        else if (c == '(') 
            stack.push(')')
        else if (c == '[')
            stack.push(']')
            /**
                精髓在下面这个判断里
                因为是从左往右循环，那么在上面的三个判断里，
                必须要满足一个，才可能是正确，不然肯定是false
                如果上面有满足了，就会一个一个的往stack中增加

                当一旦不满足了，必须要判断数组长度了，如果数组长度为了0
                要么就是上一次pop后数组里已经没有左括号，这时候来一个不满足做括号的，
                那肯定是false
                要么就是第一次就不是左括号了，那肯定也是fasle
                如果数组也不是空，那么取出数组的最后一个元素。
                和当前的c做比较，为什么是把当前c和stack的最后一个元素做比较呢
                因为是从左往右遍历，如果要满足正确的括号，最近右括号就是要等于最后一个元素
                因为最好一个元素实际的含义是离当前c最近的左括号
             */ 
        else if (stack.length == 0 || c != stack.pop())
            return false
    }
    // 最后的判断stack的长度为0的时候，那么左右两边的括号刚好一一对应，
    // 否则就对应了，所以要取非
    return !stack.length
};

console.log(isValid('()'));