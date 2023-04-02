const person={
    name:'Ysaac',
    age: 21,
}

console.log(person);

function getDoubleAge(person){
    return person.age*2;
}

const doubleAge=getDoubleAge(person);

console.log(doubleAge);

function getArray(person){
    let arrayNums=[];
    for (let i = 0; i < 10; i++) {
        const element = person.age+i;
        console.log(element);
        arrayNums = [...arrayNums,element]
    }
    return arrayNums;
}

const array = getArray(person);
console.log(array);