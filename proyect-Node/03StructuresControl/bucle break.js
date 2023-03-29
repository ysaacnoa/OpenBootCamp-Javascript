//bucle break-continue
const list=[1,2,3,4,5,6,7,8,9,10];

for(let i=0;i<list.length;i++){
  if (list[i]===4) {
    continue;
  }
  
  if (list[i]>6) {
    break;
  }
  console.log(list[i]);
}

//cual es el ambito de los bucles
//solo las variabes que sean declaradas dentro del bucle
console.log();