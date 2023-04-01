//list8

//.some() method
//generate aleatory numbers array
const array = [23, 10, -3, 4, 235, -16, -7, 0, 12];

const res=array.some(value=>value<0);
console.log(res);

const exists= array.some(value=>value===10);
console.log(exists);

const listObjects=[
    {name:'Lima',population:1000000},
    {name:'San Miguel',population:2000000},
    {name:'Callao',population:3000000},
    {name:'Breña',population:4000000},
    {name:'Chorrillos',population:5000000},
    {name:'Lurigancho',population:6000000},
    {name:'Lince',population:7000000},
    {name:'San Borja',population:8000000},
    {name:'San Isidro',population:9000000},
    {name:'Surco',population:10000000},
    {name:'Miraflores',population:11000000},
]

const existsDeparment=listObjects.some(value=>value.name==='Lima');
console.log(existsDeparment);

//get list for a object iterable
const str='Hello World I am Atza';
console.log(str[17]);

const listStr=Array.from(str);
console.log(listStr);

const set = new Set([2,3,'Atza',-9]);
const ar_set=Array.from(set);
console.log(ar_set);

const keys = array.keys();
console.log(keys);

const ar_keys = Array.from(keys);
console.log(ar_keys);