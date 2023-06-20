const a=5;
console.log(typeof a);//number

const b="hie";
console.log(typeof b);//string

const c=false;
console.log(typeof c);//boolean

let d;
console.log(typeof d);//undefined

//similarity between any and unkown 

let x: any =5;
console.log(typeof x);//number
x= "ridhvi";
console.log(typeof x);//string

let y: unknown =5;
console.log(typeof y);//number
y= "ridhvi";
console.log(typeof y);//string

let t=x;// t is any
let u=y;//u is unkown

//difference between any and unkown

let p : string=x;
// let q : string=y; throws error "Type 'unknown' is not assignable to type 'string'."
if(typeof y === "string")
{let q: string=y;}

// all collection of mixed datatypes (obj1 and so on... const onj={key:value,key:value}) can be considered as key value pairs
//interfaces can be used to decide or define the keys and is considered as a datatype