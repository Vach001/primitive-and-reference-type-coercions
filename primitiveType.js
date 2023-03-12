// primitives

Number('0x77') === 0x77// true
Number('077') === 077  // false
Number(' 12')          // 12 
isNaN(' ')             // false
0 === +0               // true
+0 === -0              // true
1 / '2'                // 0.5
1 / 0                  // Infinity
0 / 0                  // NaN
+true                  // 1
+false                 // 0 
+null                  // 0
+undefined             // NaN
