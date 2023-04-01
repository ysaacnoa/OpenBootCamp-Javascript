//sets

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 8, 9, 10, 1, 11, "hello", {name: "jose"}, {name: "jose"},'hello'];

const miset = new Set(array);

//principle diference between set and array is that set can't have duplicate values except objects
console.log(array);
console.log(miset);

//.add() method
miset.add(12);
console.log(miset);
//if add a value that already exists it will not be added
miset.add(1);
console.log(miset);

//.delete() method
miset.delete('hello');
console.log(miset);

//clear() method
//miset.clear();
//console.log(miset);

//.has() method
console.log(miset.has(19));

//size property
console.log(miset.size);

//.forEach() method
miset.forEach((value) => {console.log(value)});

//spread operator
const it_mySet=miset.values();
console.log(it_mySet);

const ar_miset = [...miset];
console.log(ar_miset);