//lists

let varl = {id: false};
let array =[1,'hola',false ,{id:false},null, undefined, varl];


//access to values of array
console.log(array);
console.log(array[1]);
console.log(array[3]);
console.log(array[5]);

//methos of arrays for add values

//push() al final
array.push("final");
console.log(array[7]);

//unshift() al inicio
array.unshift("inicio");
console.log(array[0]);

//methods of arrays for delete values
const array2=[1,3,'hola',false];
//values at the end pop()
array2.pop();
console.log(array2);

//values at the begining shift()
array2.shift();
console.log(array2);

//methods for eliminate, modify and add values
//splice()
const array3=[1,'Atza',3,'React',true];
array3.splice(2,1,'hola');
//.splice(index, number of elements to delete, elements to add)
console.log(array3);
