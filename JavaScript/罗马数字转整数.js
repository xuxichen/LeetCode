/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map = {
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }
    let result=0;
    let lastNunm=0;

    for (let i = 0; i < s.length; i++) {
        // 当 上一个数大于当前数的时候
        // 就加上当前数
        if (lastNunm>=map[s[i]]) {
            result += map[s[i]]
            lastNunm = map[s[i]];
        } else {
            // 当 上一个数小于当前数的时候
            // 就加上当前数， 并减去两倍上一个数
            //例如上一个数是X（10），而当前数是C(100) 两个数实际是XC(90)
            // 循环加的时候+10+100相当于加了110，实际的值是90，
            // 相当于多加了两次X，所以要减去2*X(last)
            // 这里有个特别的判断点是last = 0；表示的是第一次的运算
            // last 运算后是不会等于0的情况出现，所以直接-last就行了
            // 但第一的时候本质上是不需要去减last的，但我减了2*0实际依然没减
            // 所有比判断last == 0 的时候情况要少一个判断
            result = result + map[s[i]] - 2*lastNunm;
            lastNunm = map[s[i]];
        }
    }
    return result;
};

console.log(romanToInt("MCMXCIV"));