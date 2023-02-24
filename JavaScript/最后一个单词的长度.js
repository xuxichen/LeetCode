/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let j=0,i= s.length -1
    while(i>=0) {
        if(s[i--] !== ' ') {
            j++
        } else if(j!=0) return j
    }
    return j
};