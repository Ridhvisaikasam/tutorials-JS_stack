// generics --> template class <T>
var _a, _b;
function getLength(t) {
    //need to try hasOwnProperty for t
    return t["length"];
}
const x = [6, 7];
const y = 8;
console.log(getLength(x));
console.log(getLength(y));
// optional chaining --> (?)
const adhar = { firstname: "fn", lastname: "" };
//now length part executes only if lastname is defined or else returns undefined
console.log((_a = adhar === null || adhar === void 0 ? void 0 : adhar.lastname) === null || _a === void 0 ? void 0 : _a.length); //--->undefined
//if (?) was not used then whenever lastname is undefined it would throw an error 
//same applies for adhar?.lastname
console.log(adhar.lastname ? adhar.lastname : "lastname not exists"); //--->0
//nullish coelishing --> (??) just a extended shortcut for ternary operator
console.log((_b = adhar.lastname) !== null && _b !== void 0 ? _b : "lastname not exists"); //-->lastname not exists
