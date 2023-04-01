//list-6
//order lists
//disorder array
const array = [45,24,566,7727,2,123,4,143];
console.log(array);

array.sort((a,b)=>{
    if(a<b){
        return -1;
    }else if(a>b){
        return +1;
    }else{
        return 0;
    }
})

console.log(array);

//Order numeric arrays
const arrayNumber = [45,24,566,7727,2,123,4,143];
console.log(arrayNumber);

//significa que al restar a-b si b es mayor a entonces a se queda donde está
arrayNumber.sort((a,b)=>a-b)
console.log(arrayNumber);

//Object arrays
const arrayObject = [
    {name: 'Pedro', age: 30},
    {name: 'Juan', age: 78},
    {name: 'Pablo', age: 15},
    {name: 'Luis', age: 17},
    {name: 'Jose', age: 75},
    {name: 'Ricardo', age: 43},
    {name: 'Carlos', age: 34},
    {name: 'Jorge', age: 10},
];

console.log(arrayObject);
/* arrayObject.sort((a,b)=>{
    si a es menor que b
    if(a.age<b.age){
        es decir que a tenga un indice menor
        return -1;
    }else if(a.age>b.age){
        caso contrario quiero que su indice sea mayor
        return +1;
    }else{
        return 0;
    }
}) */
arrayObject.sort((a,b)=>a.age-b.age)

console.log(arrayObject);