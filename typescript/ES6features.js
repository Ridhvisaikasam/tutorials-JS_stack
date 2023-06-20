//var -->function scope
//let -->block scope
//const --> block scope
//entire code comes under windows onject
//spread operator --> merge objects and arrays
const obj1 = { a: 5 };
const obj2 = { b: 5 };
const obj3 = Object.assign(Object.assign({}, obj1), obj2);
console.log(obj3);
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [...arr1, ...arr2];
console.log(arr3);
//destructing objects and arrays --> to create shoetcuts for easier access
const obj4 = { att1: "dest" };
console.log(obj4['att1']);
const { att1 } = obj4;
console.log(att1);
const arr = ["tata", "apple", "microsoft"];
const [rt, , bg] = arr;
console.log(rt);
console.log(bg);
//rest operator ---> can send any number of arguments
function sum(...rest) {
    let sum = 0;
    for (let index = 0; index < rest.length; index++) {
        sum = sum + rest[index];
    }
    return sum;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7));
