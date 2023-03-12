let a = {
    valueOf() {
        return 224;   // 224
    },
};
let b = {
    valueOf () {
        return "hey"; // 'hey'
    },
};
let c = {
    valueOf () {
        return "some"; // 'some'
    },
};
let d = {
    toString () {
        return 22;     // 22
    },
};
let e = {};          // [object Object]
let f = {
    toString () {
        return 5;      // 5
    },
};

// prefix -- operator a, b, c, d, e and f

// --(a)                // 223
// --(b)                // NaN 
// --(c)                // NaN
// --(d)                // 21 
// --(e)                // NaN
// --(f)                // 4

// postfix -- operator a, b, c, d, e and f

// (a)--                // 224
// (b)--                // NaN 
// (c)--                // NaN
// (d)--                // 22 
// (e)--                // NaN
// (f)--                // 5

// // postfix ++ operator a, b, c, d, e and f

// (a)++                // 224
// (b)++                // NaN 
// (c)++                // NaN
// (d)++                // 22 
// (e)++                // NaN
// (f)++                // 5

// prefix ++ operator a, b, c, d, e and f

// (++(a)                // 225
// (++(b)                // NaN 
// (++(c)                // NaN
// (++(d)                // 23 
// (++(e)                // NaN
// (++(f)                // 6

// before and after prefix ++ operator
                        // Before   //At that time   // After
// ++(a)                // 224      // 225           // 225 
// ++(b)                // NaN      // NaN           // NaN
// ++(c)                // NaN      // NaN           // NaN
// ++(d)                // 22       // 23            // 23
// ++(e)                // NaN      // NaN           // NaN
// ++(f)                // 5        // 6             // 6
