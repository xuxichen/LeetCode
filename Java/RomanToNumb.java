/**
 * 这种方法不具备可复用性
 * 在某些特定情况下，这种写法确实会更快
 */

class Solution {
    public int romanToInt(String s) {
        s = s.replace("IV","a");
        s = s.replace("IX","b");
        s = s.replace("XL","c");
        s = s.replace("XC","d");
        s = s.replace("CD","e");
        s = s.replace("CM","f");
        
        int res = 0;
        for (int i = 0; i < s.length(); i++) {
            res += getValue(s.charAt(i));
        }
        return res;
    }

    public int getValue(char c) {
        switch(c) {
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            case 'a': return 4;
            case 'b': return 9;
            case 'c': return 40;
            case 'd': return 90;
            case 'e': return 400;
            case 'f': return 900;
        }
        return 0;
    }
}

/**
 * 这种方法最好理解
 */
class Solution {
    public int romanToInt(String s) {

        // 建立映射map
        Map<Character,Integer> dictMap = new HashMap<>();
        dictMap.put('I',1);
        dictMap.put('V',5);
        dictMap.put('X',10);
        dictMap.put('L',50);
        dictMap.put('C',100);
        dictMap.put('D',500);
        dictMap.put('M',1000);
        
        int last = 0;
        int result = 0;
        for (int i=0;i<s.length();i++){
            // 当 上一个数大于当前数的时候
            // 就加上当前数
            if (last >= dictMap.get(s.charAt(i))){
                last =  dictMap.get(s.charAt(i));
                result += last;
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
                result = result + (dictMap.get(s.charAt(i))-last*2);
                last = dictMap.get(s.charAt(i));
            }
        }
        return result;
    }
}

public class RomanToNumb {
    public static void main(String[] args) {
        Solution s1 = new Solution();
        System.out.println(s1.romanToInt("MCMXCIV"));
    }
}