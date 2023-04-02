class Person {
  //private -> #
  //only for the class
  #username;
  #age;
  //protected -> _
  //only for the class and the children
  _siDev=true;
  constructor(username, age) {
    this.#username = username;
    this.#age = age;
  }
  sayHi() {
    console.log(
      `Hi, my name is ${this.username} and I'm ${this.age} years old`
    );
  }
  getName() {
    return this.#username;
  }
  getAge(){
    return this.#age;
  }
  setAge(new_age){
    this.#age = new_age;
  }
}

const person = new Person("Atza", 21);
//console.log(person);
//console.log(person.username);
person.sayHi();

console.log(person.getName());
//console.log(person.#getAge());
//console.log(person._siDev);

//Getter -> method that returns a value protected or private
const age = person.getAge();
console.log(age);

//Setter -> method that sets a value protected or private
person.setAge(17);
console.log(person.getAge());