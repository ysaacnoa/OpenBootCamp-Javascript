//List-Objetcs-Arrows

//List
const array = [1, "hola", true, undefined, null];
const array2 = new Array(2, "hola", true, undefined, null);
const array3 = new Array(10);
array3[0] = "primer elemento";
const array4 = [array, array2, array3];

console.log(array);
console.log(array2);
console.log(array3);
console.log(array4);

//objects
const dev = {
  name: "LilAtza",
  age: 20,
  profesion: "developer",
  hobbies: ["programar", "jugar", "dormir"],
  isSenior: false,
  card: {
    lenguage: "typescript",
    framework: "react",
    metaframework: "nextjs",
  },
};
dev.type = "junior";
dev.card.metaframework = "Astro";

console.log(dev.card.metaframework);

//Fechas
//librerias de apoyo
const now = new Date();
console.log(now);

const date_milis = new Date();
console.log(date_milis);

const date_string = new Date("march 27 2023");
console.log(date_string);

const date_values= new Date(2022,0,15);
console.log(date_values);

const day = now.getDate();
const month = now.getMonth();
const year = now.getFullYear();

console.log(day,month,year);