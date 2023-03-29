let factorial=1;
let cont=0;

while (true) {
  factorial=factorial*(cont+1);
  cont++;
  if (cont===10) {
    break;
  }
  console.log(factorial);
}