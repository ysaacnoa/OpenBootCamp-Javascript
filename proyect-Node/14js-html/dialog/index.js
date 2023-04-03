const btn = document.querySelector('#btn');

console.log(btn);

btn.addEventListener('click', () => {
  //alert('you clicked me');
  //MANERA ACTUAL
  /* confirm('are you sure?') 
    ? console.log('ok')
    : console.log('cancel')  */

  //MANERA ANTIGUA
  const res = confirm('are you sure?');
  if (res) {
    console.log('you acepted');
  } else {
    console.log('you canceled');
  }
});

const btninfo = document.querySelector('#info');

btninfo.addEventListener('click', () => {
  const username = prompt('what is your name?');
  username
    ? console.log(`your name is ${username}`)
    : console.log('you did not enter your name');
});

const list = [
  {
    username: 'Atza',
    age: 21,
  },
  {
    username: 'Louise',
    age: 23,
  },
  {
    username: 'Mia',
    age: 18,
  },
];

console.log(list);
console.table(list);