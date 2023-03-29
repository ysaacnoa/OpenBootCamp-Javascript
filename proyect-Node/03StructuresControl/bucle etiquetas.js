//bucle etiquetas

let units = 0;
let decens = 0;

bucleDecenas: while (true) {
  bucleUnidades:while (true) {
    console.log(`El numero actual es ${decens}${units}`);
    units++;
    if (units === 10) {
      units = 0;
      break bucleUnidades;
    }
    if (decens === 2) {
      console.log(`El numero actual es ${decens}${units}`);
      break bucleDecenas;
    }
  }
  decens++;
}

console.log('terminamos');
