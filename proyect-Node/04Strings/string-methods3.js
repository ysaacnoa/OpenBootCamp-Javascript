//string-methods3
let str_large="I am a large string and I am going to be split into an array of strings. I am IA of github and I am a student of IIT Roorkee";

console.log(str_large.match(/I am/g));

//find a caracter in a string and return true or false
console.log(str_large.includes("I am"));

//Know if a strings start with a particular string
console.log(str_large.startsWith("I am"));

//Know if a strings end with a particular string
console.log(str_large.endsWith("I am"));