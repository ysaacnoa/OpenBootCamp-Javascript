//variables
let username="Ysaac";
let lastname="Correa";
//concatenation
let student= username.concat(" ",lastname);
console.log(student);
//uppercase
let studentMayus=student.toUpperCase();
console.log(studentMayus);
//lowercase
let studentMinus=student.toLowerCase();
console.log(studentMinus);
//length
let student_length=student.length;
console.log(student_length);
//first letter of name
let studentFirst=username.charAt(0);
console.log(studentFirst);
//last letter of lastname
let studentLast=lastname.charAt(lastname.length-1);
console.log(studentLast);
//variable to eliminate all spaces inside in string
let studentTrim=student.trim();
console.log(studentTrim);
//variable to eliminate all spaces inside in string
let student_replace=student.replace(/\s/g,"");
console.log(student_replace);

//bool to check if the string is inside in another string
let student_includes=student.includes(username);
console.log(student_includes);
