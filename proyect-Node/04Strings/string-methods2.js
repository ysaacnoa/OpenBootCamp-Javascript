//string-methods2
let input = "JavaScript";
let output = "javascript";

//tolowercase()-toUpercase()
console.log(input.toLowerCase());
console.log(input.toUpperCase());
console.log(input.toLowerCase()===output.toLowerCase());

let str_1="Hello im studing React but "
let str_2="i want to learn React Native"

console.log(str_1.concat(str_2));
console.log(str_1+str_2);//recomended use concat

//eliminate white spaces
let str_3="   Hello im studing React and paralelly i'm lerning Next.js 13    "
console.log(str_3.length);
console.log(str_3.trim().length);
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd().length);

//Get caracter by index
let str_4="Hello im studing React and paralelly i'm lerning Next.js 13"
console.log(str_4.charAt(6));
console.log(str_4[6]);

//Get a word by index
let str_5="Hello im studing React and paralelly i'm lerning Next.js 13 but React its priority"
console.log(str_5.indexOf("React"));
console.log(str_5.charAt(17));
console.log(str_5.lastIndexOf("React"));