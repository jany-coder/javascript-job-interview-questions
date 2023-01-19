// Problem-01: How to remove falsy values from an array?

/*
    There are 6 falsy values in javascript:

    false
    0 (zero)
    "" (empty string)
    null
    undefined
    NaN (Not a Number)  

*/

// Boolean(expression) in JS returns true/false
Boolean(5 < 6); //  true
Boolean(100 > 200); // false
Boolean('JavaScript'); //true
Boolean(''); //false


// array example
let miscellaneous = ['apple', false, 'orange', NaN];
let fruits = miscellaneous.filter(Boolean);

console.log(fruits); // ['apple', 'orange']