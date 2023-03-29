//strings methods in javascript

let str="hello, how are you doing today ?";
console.log(str.length); //length of string

let str_slice=str.slice(7,19); //slice method
console.log(str_slice); //slice method

let str_substring=str.substring(7,19); //substring method
console.log(str_substring); //substring method

//olsolete method
let str_substr=str.substr(7,12); //substr method
console.log(str_substr); //substr method

//replace method of content in string 
let str_presentation="Hi my name is LilAtza"
console.log(str_presentation);

console.log(str_presentation.replace("LilAtza", "AtzaDev")); //replace method

let str_large="Hello, how are you doing today ? I am doing great, and you ? nice to meet you !";
console.log(str_large.replace("how are", "how're")); //replace method

//a replace all instances of a string
console.log(str_large.replace(/you/g, "youth")); //replace method