//numbers-values
let a = 10;
//Get numeric value of a literals
let b = new Number(5);
console.log(b.valueOf());

console.log(a);
console.log(b);
console.log(a+b);

console.log(a.valueOf()+b.valueOf());

//String
let str= new String("Hello World");
console.log(str);
console.log(str.valueOf());

//Nan - not a number || infinity(indeterminated)

let n =Number('adios');
console.log(n);
console.log(isNaN(n));

let numeric=19;
let divisor=0;
console.log(numeric/divisor);

let divisor_2=null;
console.log(numeric/divisor_2);

//convert string to number
let str_2="123.345";
let num=17.3;

console.log(str_2+num);
console.log(Number(str_2)+num);

//see the part interger(parseInt) and decimal(parseFloat)
console.log(parseInt(str_2));
console.log(parseFloat(str_2));

//numbers hexadecimals
let hex='0xff';
console.log(parseInt(hex,16));

//max and min values
let min_precision = Number.EPSILON;
let min = Number.MIN_VALUE;
let max = Number.MAX_VALUE;

console.log(min_precision);
console.log(min);
console.log(max);