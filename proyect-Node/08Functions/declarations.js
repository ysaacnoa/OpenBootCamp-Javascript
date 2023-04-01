//Functions

const username = "AtzaDev";

say(username);

function say(name) {
  console.log(`hola ${name}`);
}

///

let username2 = "LilAtza";

sayBye(username2);

function sayBye(name) {
  name = "Ysaac";
  console.log(`Bye ${name}`);
}

//with objects

let person = { name: "Atza", lastname: "Dev", age: 20 };

sayHiPerson(person);

function sayHiPerson(obj) {
  console.log(`Hi ${obj.name} ${obj.lastname} you are ${obj.age} years old`);
}

say();

// /   /  /   /   /  /  /  /
function typeNumber(num = 7) {
  console.log(num);
}

typeNumber();

//  /   /  /   /   /  /  /  /
function type(...param) {
  console.log(param);
}

type(1, 2, 3, 4, 5, "ay ay ay ", 7, 8, 9, { id: 5 });

//  /   /  /   /   /  /  /  /
function sum(...nums) {
  return nums.reduce((a, b) => a + b);
}

const s = sum(1, 2, 3, 4);
console.log(s);

//  /   /  /   /   /  /  /  /
function multiply(a = 0, b = 0) {
  return a * b;
}

console.log(multiply(2, 3));
