//list7
//compare list
const array = [23, 10, -3, 4, 235, 16, -7];

/* const data = array.every(value=>{
    if(typeof value >0){
        return true;
    }else{
        return false;
    }
}) */
const data=array.every(value=>value >0);
console.log(data);

//comparation to lists
const array1 = [23, 10, -3, 4, 235, 16, -7];
const array2 = [23, 10, -3, 4, 235, 16, -7];

console.log(array1===array2)

const arrayCompared=(array1,array2)=>{
    if(array1.length !== array2.length) return false;
    const res=array1.every((value,i)=>value===array2[i]);
    return res;
}
console.log(arrayCompared(array1,array2));

const array3 = [13, -10, -33, 43, 23, 161, -20];
console.log(arrayCompared(array1,array3));