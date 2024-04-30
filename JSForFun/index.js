const obj = {
  a: {
    b: { c: "1" },
  },
  z: [],
};
// & operator
const c = obj && obj.a && obj.a.b && obj.a.b.c;
console.log(c, "Operator &&");
// | operator
const c1 = (obj && obj.a) || obj.a.b || obj.a.b.c;
console.log(c1, "Operator ||");
// Optional Chaining Operator (?)
const c2 = obj?.a?.b?.c;
console.log(c2, "Chaning Operator");
//Nullish Colalescing (??)
//Syntax : variable = valueifnotnull or undefined ?? valueif null or undefined
const c3 = undefined ?? "Kaioken"; // Kaioken
const c4 = null ?? "Kaioken"; // Kaioken
const c5 = false ?? "Kaioken"; // false
console.log(c3, c4, c5, "Nullish Colalescing");
//Nullish Coalescing Assignment ??=
//Syntax : variable ??= valueifnull;
let c6 = null;
c6 ??= "hello world"; // HelloWorld
let c7 = NaN;
c7 ??= "hello world"; // Nan
console.log(c6, c7, "Nullish Coalescing Assignment ");
