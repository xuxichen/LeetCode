var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return "";
    if(strs.length == 1) return strs[0];
    /* 第一种
    let first = strs[0];
    let result = "";
    for (let i = 1; i <= first.length; i++) {
        const k = first.substring(0, i)
        for (let j = 1; j < strs.length; j++) {
            const el = strs[j].substring(0, i);
            if (el !== k) {
                break
            }
            if (j == strs.length -1) {
                result = k
            }
        } 
    }
    return result
    */
    // 第二种
    let end=0
    let first = strs[0];
    // while(strs.every(item=>(end<item.length)&&(strs[0][end]===item[end]))) end++
    // return strs[0].slice(0,end)
    for (let i = 0; i < first.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            const el = strs[j]
            if(end < el.length && first[end] == el[end]) {
                if (j==strs.length-1) {
                    end++
                }
            } else {
                break
            }
        }
    }
    return first.substring(0, end);
};

// let strs = ["flower","flow","flight"]
let strs =["aaa","aa","aaa"]
console.log(longestCommonPrefix(strs));