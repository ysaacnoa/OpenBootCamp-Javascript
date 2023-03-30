//numbers-operations

let a = 3.9;
let b = 4.4;

//sum
console.log(a + b);
//rest
console.log(a - b);
//multiplication
console.log(a * b);
//division
console.log(a / b);
//module
console.log(a % b);
//exponent
console.log(a ** b);

console.log(typeof a);
let a_str = a.toString();
console.log(typeof a_str);
console.log(a_str);

let c=3.3;
let d=c*3;

console.log(d);
//tofixed - limit the number of decimals to valor of x
console.log(d.toFixed(2));
console.log(typeof d.toFixed(2));

let e=1283.312938718492124;
let f=123712738912;
console.log(e.toFixed(2));

//toPrecision - limit the number of digits to valor of x
console.log(e.toPrecision(8));
console.log(f.toPrecision(8));

console.log(typeof e.toPrecision(8));