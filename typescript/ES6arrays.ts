//=== checks for both datatype and value so 1===true is wrong
//== checks for value so 1==true is right

const ar=[1,2,3,4,5,6];

function checkeven(x:number):boolean
{
   return x%2===0;
}

//find --> first occurence acc to criteria
//console.log(ar.find(checkeven));

//filter --> all occurences according to criteria
console.log(ar.filter(checkeven));

//some --> check atleast one satisfies criteria
console.log(ar.some(checkeven)); 

//every --> check if all satisfy the criteria
console.log(ar.every(checkeven)); 

//map --> converts all the elements of array to something else
console.log(ar.map(x=>x%2===0?"even":"odd"));  //inline funtion
 
//reduce --> converts all the elements of array to onething eg:- sum,product of elements of array
//parameters are a function with result(ans) current(arr[i]) AND  initial value of result(ans)
console.log(ar.reduce((result,current)=>result+current,0));