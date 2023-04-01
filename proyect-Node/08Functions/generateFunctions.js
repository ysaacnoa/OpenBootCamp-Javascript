//generate functions

function* generateId(){
    let id=0;
    while(true){
        id++;
        if (id===10) {
            return id;
        }
        yield id;
    }
}

const gen = generateId();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

