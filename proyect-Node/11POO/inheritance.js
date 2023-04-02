//inheritance
class Person {
    _username
    _age
  constructor(username, age) {
    this._username = username;
    this._age = age;
  }
  getDetails() {
    return `${this._username} is ${this._age} years old`;
  }
}

class Dev extends Person {
    constructor(username,age,skills) {
        super(username, age);
        this.skills = skills
    }
    getDetails() {
        console.log(super.getDetails());
        console.log(`and knows ${this.skills.join(", ")}`); 
    }
}

const new_dev = new Dev("Ysaac", 25, ["Javascript","NextJS","ReactJS"]);
console.log(new_dev);
new_dev.getDetails();
//polymorphism
