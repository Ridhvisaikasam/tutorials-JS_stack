//just like obj with key value pairs but extra features
//keys must be unique so same key old value overridden

//similarities of normal objkeyvaluepair and map
const mm1={"even":2,"odd":1};
mm1["even"]=4;
console.log(mm1["even"]);

const mm=new Map();
mm.set("even",2);
mm.set("odd",1);
mm.set("even",4);//overridden
console.log(mm.get("even"));


//differences of normal objkeyvaluepair and map i.e. extra features of map

console.log(mm.size);//size
console.log(mm.has("even"));//has
for(let[key,value] of mm)//iterate
{
    console.log(key+value);
}
