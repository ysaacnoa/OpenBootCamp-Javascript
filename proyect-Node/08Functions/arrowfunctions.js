//javascript

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//arrow function
const numArray2 = numArray.map(num=>num*3);

console.log(numArray2);

//arrow function
const doubleValue = valor => valor*2;
console.log(doubleValue(5));

const numArray3=numArray.map(doubleValue);
console.log(numArray3);

//clasic form
const doubleValue2 = function(valor){
    return valor*2;
}

const aux=numArray.map(doubleValue2);
console.log(aux);