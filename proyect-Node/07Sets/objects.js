//objects
const obj = {
    id: 2,
    name: 'LilAtza',
    age: 21,
    isDeveloper: true,
    favoriteGames: ['Destiny 2', 'World of Warcraft', 'Overwatch'],
    '4-games': [1,2,3,4],
};

console.log(obj.name);
console.log(obj.favoriteGames.map(game => game.toUpperCase()));
console.log(obj["4-games"]);

const prop = 'isDeveloper';
console.log(obj[prop]);

//if you do this you copy the reference of the object
const obj2 = obj;
console.log(obj2);

obj2.name = 'LilAtza2';
console.log(obj2.name);
console.log(obj.name);

//if you duplicate the object you copy the values
const obj3 = {...obj};
console.log(obj3);
obj3.name = 'AtzaSenior';
console.log(obj3.name);
console.log(obj.name);

//order lists of objects by a property
const gamesMmorpg = [
    {name: 'Elder Scrolls Online', year: 2014},
    {name: 'Final Fantasy XIV', year: 2010},
    {name: 'World of Warcraft', year: 2004},
    {name: 'Guild Wars 2', year: 2012},
    {name: 'Black Desert Online', year: 2015},
    {name: 'Star Wars: The Old Republic', year: 2011},
    {name: 'Neverwinter', year: 2013},
    {name: 'Rift', year: 2011},
    {name: 'ArcheAge', year: 2013},
    {name: 'Tera', year: 2011},
    {name: 'Lineage 2', year: 2003},
    {name: 'Aion', year: 2009},
    {name: 'Destiny 2', year: 2017},
]
console.log(gamesMmorpg);
//.sort() changes the original array
gamesMmorpg.sort((a,b) => a.year - b.year);
console.log(gamesMmorpg);