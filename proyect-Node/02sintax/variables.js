//Variables

const constante='Hello im a const variable';
console.log(constante);

var a =1;
console.log(a);

a=4
console.log(a);

let b=3;
console.log(b);

b=5;
console.log(b);


let variableName = "soy una variable let";
for (let i = 0; i < 3; i++) {
  let variableName="soy una variable let dentro del for";
}
console.log(variableName);


var variableName2 = "soy una variable var";
for (var i = 0; i < 3; i++) {
  var variableName2="soy una variable let dentro del for";
}
console.log(variableName2);

console.log(typeof false);