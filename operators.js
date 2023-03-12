// Suppose that

const a = {
    valueOf() {
        return 224;   // 224
    },
};
const b = {
    valueOf () {
        return "hey"; // 'hey'
    },
};
const c = {
    valueOf () {
        return "some"; // 'some'
    },
};
const d = {
    toString () {
        return 22;     // 22
    },
};
const e = {};          // undefined
const f = {
    toString () {
        return 5;      // 5
    },
};


// binary + operator

null + undefined                  // NaN
null + true                       // 1
null + false                      // 0
undefined + true                  // NaN
undefined + false                 // NaN
undefined + 5                     // NaN
true + false                      // 1
true + 2                          // 3
false + 4                         // 4
false + NaN                       // NaN
5 + 3                             // 8
5 + NaN                           // NaN
'hello' + NaN                     // 'helloNaN'
'hello' + a + b + c + d + e + f   // 'hello224heysome22[object Object]5'

// unary - operator

null - undefined                  // NaN
null - true                       // -1
null - false                      // 0
undefined - true                  // NaN
undefined - false                 // NaN
undefined - 5                     // NaN
true - false                      // 1
true - 2                          // -1
false - 4                         // -4
false - NaN                       // NaN
5 - 3                             // 2
5 - NaN                           // NaN
'hello' - NaN                     // NaN
'hello' - a - b - c - d - e - f   // NaN



