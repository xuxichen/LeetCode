var isPalindrome = function(x) {
    if(x===0) return true;
    if (x < 0 || x % 10 == 0) return false;
    let reversed = 0;
    //  这种解法是两边同时往中间截取
    /**
        xxx98765678
        rrr9

        xxx9876567
        rrr98

        xxx987656
        rrr987

        xxx98765
        rrr9876
        
        xxx9876
        rrr98765
     */

    while (x > reversed) {
        reversed = reversed * 10 + x % 10;
        x = parseInt(x/10);
        console.log('xxx' +x);
        console.log('rrr' +reversed);
    }

    /**
     * 1、当需要判断的数的位数为偶数时，
     * x刚好截取到一半的时候，reversed也截取了一半
     * 如果是回文数的话，这个时候他们那就应该相等了
     * 2、当需要判断的数的位数为奇数
     * 中间的那个数位中轴点，是不需要反转的
     * 因为循环条件是x>reversed
     * 所以会多循环一次
     * 导致x只剩下除去中轴数的左侧，
     * reversed则截取从右到了中轴数（包含了中轴数）
     * 此时需要用 再往回撤一位，去掉中轴数，来和x比较
     * 所有x == parseInt(reversed / 10)
     */  
    return x == reversed || x == parseInt(reversed / 10);
};
console.log(isPalindrome(987656789));