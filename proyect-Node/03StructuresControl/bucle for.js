//bucle for


//bucle con arrays
let lista=[1,2,3,4,5,6,7,8,9,10];
for (let i = 0; i < lista.length; i++) {
  const element = lista[i];
  console.log(element);
}


//estructura for of
for(let valor of lista){
  console.log(valor);
}

//estructura for each
lista.forEach(valor=>{
  console.log(valor);
})

let person={
  username:"LilAtza",
  lastname:"Dev",
  age:21,
  isDeveloper:true
}
let prop = "age";
console.log(person[prop]);

for(let prop in person){
  console.log(prop);
  console.log(person[prop]);
}


