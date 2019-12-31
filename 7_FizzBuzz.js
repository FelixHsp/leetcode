/*
    写一个程序，输出从 1 到 n 数字的字符串表示。
    1. 如果 n 是3的倍数，输出“Fizz”；
    2. 如果 n 是5的倍数，输出“Buzz”；
    3.如果 n 同时是3和5的倍数，输出 “FizzBuzz”。
 */

var fizzBuzz = function(n) {
    var arr = [];
    for(var i = 1; i <= n; i++) {
        let val = '';
        i % 3 === 0 && (val += 'Fizz');
        i % 5 === 0 && (val += 'Buzz');
        !val && (val += i);
        arr.push(val);
    }
    console.log(arr);
};
fizzBuzz(15);