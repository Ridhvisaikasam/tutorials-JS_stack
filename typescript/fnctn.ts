//function declaration is a datatype in typescript

let square : (a:number)=>number ; // declaration
square = function (a)  //definition or initialisation
{
   return a*a;
}
console.log(square(5));

let square1 : ((a:number)=>number) | ((a:string)=>number) ;// declaration
square1 = function (a:string) // definition or initialisation
{
   return a.length;
}
console.log(square1("ridhvi"));

//type casting

let square2 : (a:number|string)=>number ; // declaration
square2 = function (a)  //definition or initialisation
{
    const b=a as number;//typecasting if given input was string so important
   return b*b;
}
console.log(square2("678"));