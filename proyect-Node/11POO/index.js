//POO in javascript

const person = {
  name: "Atza",
  age: 21,
  isDeveloper: true,
  sayHi: function () {
    console.log("Hi");
  },
};
console.log(person);
person.sayHi();

const person2 = {
  name: "LilMia",
  age: 18,
  isDeveloper: false,
  sayHi: function () {
    console.log("Hello");
  },
};

person2.sayHi();

const createPerson = (username, age, isDeveloper) => {
  return {
    username: username,
    age: age,
    isDeveloper: isDeveloper,
    sayHi: () => {
      console.log(`Hi I'm ${username}`);
    },
  };
};


const person3 = createPerson("LilCat", 17, true);
console.log(person3);

const person4 = createPerson("LilDog", 18, false);
console.log(person4);