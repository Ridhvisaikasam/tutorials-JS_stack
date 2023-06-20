// generics --> template class <T>

function getLength<T>(t:T)
{
    //need to try hasOwnProperty for t
        return t["length"];
    
    
}

const x: number[]=[6,7];
const y:number=8;
console.log(getLength<number[]>(x));
console.log(getLength<number>(y));



// optional chaining --> (?)

const adhar={firstname:"fn",lastname:""}
//now length part executes only if lastname is defined or else returns undefined
console.log(adhar?.lastname?.length);//--->undefined
//if (?) was not used then whenever lastname is undefined it would throw an error 
//same applies for adhar?.lastname

console.log(adhar.lastname?adhar.lastname:"lastname not exists");//--->0
//nullish coelishing --> (??) just a extended shortcut for ternary operator
console.log(adhar.lastname??"lastname not exists");//-->lastname not exists