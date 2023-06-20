//just like obj with key value pairs but extra features
//keys must be unique so same key old value overridden
//similarities of normal objkeyvaluepair and map
var mm1 = { "even": 2, "odd": 1 };
mm1["even"] = 4;
console.log(mm1["even"]);
var mm = new Map();
mm.set("even", 2);
mm.set("odd", 1);
mm.set("even", 4); //overridden
console.log(mm.get("even"));
//differences of normal objkeyvaluepair and map i.e. extra features of map
console.log(mm.size); //size
console.log(mm.has("even")); //has
for (var _i = 0, mm_1 = mm; _i < mm_1.length; _i++) {
    var _a = mm_1[_i], key = _a[0], value = _a[1];
    console.log(key + value);
}
