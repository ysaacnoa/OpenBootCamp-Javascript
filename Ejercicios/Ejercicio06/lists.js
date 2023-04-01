//shop list
const shopList = ['atun','carne','huevo','leche','arroz']

//modify shopList with methods
shopList.push('Acite de Girasol');
console.log(shopList);

//delete last element with methods
shopList.pop();
console.log(shopList);

//list of movies
const movies =[
    {
        title: 'The Dark Knight',
        director: 'Christopher Nolan',
        date: (17,07,2008),
    },
    {
        title: 'The Godfather',
        director: 'Francis Ford Coppola',
        date: (15,03,1972),
    },
    {
        title: 'World War Z',
        director: 'Marc Forster',
        date: (21,06,2013),
    },
]

//filter
const moviesFilter=movies.filter(movie=>movie.date>=(01,01,2010));
console.log(moviesFilter);

//map directors
const directorMap=movies.map(movie=>movie.director);
console.log(directorMap);
 
//map titles
const tittleMap=movies.map(movie=>movie.title)
console.log(tittleMap);

//concat directors list and titles list
const directorTitle= directorMap.concat(tittleMap)
console.log(directorTitle);

//concat with spread operator
const directorTitle2=[...directorMap,...tittleMap]
console.log(directorTitle2);