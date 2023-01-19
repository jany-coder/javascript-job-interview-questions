// Problem-07: How to log variable with values properly?

const library1 = "jQuery";
const library2 = "React";

// Instead of doing this
console.log(`library1 - ${library1}`); // library1 - jQuery
console.log(`library2 - ${library2}`); // library2 - React

// We can do this
console.log({ library1 }); // {library1: 'jQuery'}
console.log({ library2 }); // {library2: 'React'}
