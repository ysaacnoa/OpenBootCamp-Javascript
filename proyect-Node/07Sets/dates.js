//dates
//incialize a date
const date = new Date();
console.log(date);

//The secuence of the parameters is: year, month, day, hour, minutes, seconds, miliseconds
const date2=new Date(1987,10,23,12,30,12,0)
console.log(date2);

const date3=new Date(1000000000000);
console.log(date3);

const date4=new Date('October 23 1987 12:30:12');
console.log(date4);

console.log(date===date2);

//If you want to compare dates you have to use getTime()
console.log(date.getTime()===date2.getTime());

//Get day ,month and year of date 
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());

//convert date to string in local time
console.log(date.toLocaleDateString());









