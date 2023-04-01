//methods more advanced

//.map()
const array=['Lima','San Miguel','Callao','Breña','Chorrillos']
const val = array.forEach(v=>{
    console.log(v);
})
console.log(val);

const newArray = array.map((v,i)=>{
    return `${i+1}.-${v.toUpperCase()}`;
})
console.log(newArray);


//.filter()
const listObjects=[
    {name:'Lima',population:1000000},
    {name:'San Miguel',population:2000000},
    {name:'Callao',population:3000000},
    {name:'Breña',population:4000000},
    {name:'Chorrillos',population:5000000},
]

const majorPopulation=listObjects.filter(obj=>obj.population>3000000)
console.log(majorPopulation);

const newList=listObjects.filter(obj=>obj.name!=='Lima')
console.log(newList);

//.reduce()
const numbers=[1,2,3,4,5,6,7,8,9,10]
const sum=numbers.reduce((acum,curr,i,arrayOrigin)=>{
    console.log(acum);
    console.log(curr);
    console.log(i);
    console.log(arrayOrigin);
    return acum+curr;
})
console.log(sum);
