//lists-2
const list1=['hola',2,false,null];
const list2=['adios',8,true,undefined];

console.log(list1);
console.log(list2);

const list3= list1.concat(list2);
console.log(list3);

//unit two list with spread operator
console.log(...list3);

const list4=[...list1,...list2];
console.log(list4);

//ERROR! concept to spread operator malformed
const list5=[list1,list2]
console.log(list5);
