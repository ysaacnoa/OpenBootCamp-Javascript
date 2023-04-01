//iterate list

const array = ['array',1,2,3,true,null,'adios'];


//clasic form
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//forEach
let sum=0;
const arrayNums=[1,2,3,4,5,6,7,8,9,10];
arrayNums.forEach(value=>{
    sum+=value;
    console.log(sum);
})
console.log(sum);

//search inside list
//find number two
const array2 = ['array',1,2,3,true,null,'adios'];
const value = array2.find(value=>{
    if(value===2){
        return true;
    }
})

console.log(value);

//objects list
const listObjects = [
    {name:'juan',age:20},
    {name:'pedro',age:30},
    {name:'maria',age:40},
    {name:'jose',age:50},
    {name:'luis',age:60},
    {name:'carlos',age:70},
    {name:'javier',age:80},
    {name:'jose',age:90},
];

//const user)listObjects.find(u=>{
//    if(u.name==='jose'){
//        return true;
//    }
//})
const user=listObjects.find (u=> u.name==='jose');
console.log(user.age);

const {age} =listObjects.find (u=> u.name==='jose');
console.log(age);