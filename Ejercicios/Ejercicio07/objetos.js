//object

const myDates = {
    name: 'Ysaac',
    lastname: 'Correa',
    age: 21,
    stature: 1.70,
    isDeveloper: true 
};

const myAge = 'age';
console.log(myDates[myAge]);

//list of contain my personal dates and a new object with dates of my two friends
const myFriends = [
    {name: 'Ysaac', lastname: 'Correa', age: 21, stature: 1.70, isDeveloper: true},
    {name: 'Mia', lastname: 'Flores', age: 18, stature: 1.54, isDeveloper: false},
    {name: 'Cassy', lastname: 'Langue', age: 25, stature: 1.81, isDeveloper: true},
];

const newMyFriends=[...myFriends];
newMyFriends.sort((a,b)=>b.age-a.age);
console.log(newMyFriends); 
