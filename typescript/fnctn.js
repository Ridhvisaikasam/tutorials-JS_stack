//function declaration is a datatype in typescript
let square; // declaration
square = function (a) {
    return a * a;
};
console.log(square(5));
let square1; // declaration
square1 = function (a) {
    return a.length;
};
console.log(square1("ridhvi"));
//type casting
let square2; // declaration
square2 = function (a) {
    const b = a; //typecasting if given input was string so important
    return b * b;
};
console.log(square2("678"));
