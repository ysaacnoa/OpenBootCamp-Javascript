//function to get always return true
function alwaysTrue(){
    return true;
}

console.log(alwaysTrue());

//async function to use setTimeout and return a promise 5 sec later 
async function myAsync(){
    await new Promise(resolve=>setTimeout(resolve,5000));
    console.log('Hola soy una promesa');
}

myAsync();

//function generate automatic index pair numbers
function* generateId(){
    let id=0;
    while(true){
        id+=2;
        yield id;
    }
}

const gen = generateId();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
