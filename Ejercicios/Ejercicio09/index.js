const logger = require("./logger");

//funcion para multiplicar por 2 un numero
function myValue(val) {
  if (typeof val === "number") {
    return val * 2;
  }
  throw new Error(myError());
}
//funcion para mostrar un error
function myError() {
  logger.error("this is an error");
}

const num = '5';

try {
  console.log(myValue(num));
} catch (error) {
  console.error(error);
}
