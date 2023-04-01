//Dates
//Today 
const date = new Date();
console.log(date);

//birthday
const birthday = new Date(2001,3,23,22,30,0);
console.log(birthday);

//conditional
const isToLate = date.getTime()>birthday.getTime();
console.log(isToLate);

//get a day of my birthday
const day = birthday.getDate();
console.log(day);

//get a month of my birthday
const month = birthday.getMonth();
console.log(month);

//get a year of my birthday
const year = birthday.getFullYear();
console.log(year);
