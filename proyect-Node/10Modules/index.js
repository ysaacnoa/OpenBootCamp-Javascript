//forms to export/import modules
//1.CommonJS - require
//2.ES6 - import

//forma clasica
/* const moduloMath = require('./modules/maths/math.js');
const factorial = moduloMath.factorial(10); */

//forma mas legible
const { factorial, sum } = require("./modules/math.js");

const fact = factorial(10);
console.log(fact);

const suma = sum(10, 20);
console.log(suma);

/* console.log(moduloMath); */
