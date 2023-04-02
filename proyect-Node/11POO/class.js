class Person {
  username;
  age;
  isDeveloper;
  constructor(username,age,isDeveloper){
    this.username = username;
    this.age = age;
    this.isDeveloper = isDeveloper;
  }
  sayHi() {
    console.log(`Hi, my name is ${this.username} and I'm ${this.age} years old`);
  }
}

const new_person=new Person("Atza",21,true);
console.log(new_person);
new_person.sayHi();

let num = 60 ;//initialization
console.log(typeof num);
let person2=new Person("LilMia",18,false); //instance of the class
console.log(person2 instanceof Person);
//instanceof -> similar to typeof but for classes