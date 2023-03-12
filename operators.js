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

// multiplication * operator

null * undefined                  // NaN
null * true                       // 0
null * false                      // 0
undefined * true                  // NaN
undefined * false                 // NaN
undefined * 5                     // NaN
true * false                      // 0
true * 2                          // 2
false * 4                         // 0
false * NaN                       // 0 my answer, but console is NaN
5 * 3                             // 15
5 * NaN                           // NaN
'hello' * NaN                     // NaN
'hello' * a * b * c * d * e * f   // NaN

// division / operator

null / undefined                  // NaN
null / true                       // 0
null / false                      // NaN
undefined / true                  // NaN
undefined / false                 // NaN
undefined / 5                     // NaN
true / false                      // Infinity
true / 2                          // 0.5
false / 4                         // 0
false / NaN                       // NaN
5 / 3                             // 1.6666666666666667
5 / NaN                           // NaN
'hello' / NaN                     // NaN
'hello' / a / b / c / d / e / f   // NaN

// modulo % operator

null % undefined                  // NaN
null % true                       // 0
null % false                      // NaN
undefined % true                  // NaN
undefined % false                 // NaN
undefined % 5                     // NaN
true % false                      // NaN
true % 2                          // 1
false % 4                         // 0
false % NaN                       // NaN
5 % 3                             // 2
5 % NaN                           // NaN
'hello' % NaN                     // NaN
'hello' % a % b % c % d % e % f   // NaN

// double equality comparison == operator

null == undefined                       // true
null == true                            // false
null == false                           // false
undefined == true                       // false
undefined == false                      // false
undefined == 5                          // false
true == false                           // false
true == 2                               // false
false == 4                              // false
false == NaN                            // false
5 == 3                                  // false
5 == NaN                                // false
'hello' == NaN                          // false
'hello' == a == b == c == d == e == f   // false

// three equality comparison === operator

null === undefined                              // false
null === true                                   // false
null === false                                  // false
undefined === true                              // false
undefined === false                             // false
undefined === 5                                 // false
true === false                                  // false
true === 2                                      // false
false === 4                                     // false
false === NaN                                   // false
5 === 3                                         // false
5 === NaN                                       // false
'hello' === NaN                                 // false
'hello' === a === b === c === d === e === f     // false

// less than comparison < operator

null < undefined                              // false
null < true                                   // true
null < false                                  // false
undefined < true                              // false
undefined < false                             // false
undefined < 5                                 // false
true < false                                  // false
true < 2                                      // true
false < 4                                     // true
false < NaN                                   // false
5 < 3                                         // false
5 < NaN                                       // false
'hello' < NaN                                 // false
'hello' < a < b < c < d < e < f               // false


