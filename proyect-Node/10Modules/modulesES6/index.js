import { factorial,sum,pow } from "./modules/math.js";
import getAutor,{book} from "./modules/literature.js";


const fact = factorial(10);
console.log(fact);

const suma = sum(10, 20);
console.log(suma);

const potencia = pow(10, 2);
console.log(potencia);

console.log(getAutor(),book);