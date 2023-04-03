/* localStorage.setItem('name', 'Atza');
localStorage.setItem('age', 30); */

console.log(localStorage.getItem('name'));

localStorage.setItem(
    'user',
    JSON.stringify({
        name: 'Atza',
        age: 30,
    })
)
console.log(localStorage.getItem('user'));

localStorage.removeItem('name');
//JSON.stringify() convierte un objeto/lista a un string
//JSON.parse() convierte un objeto array a traves del stringify a un objeto

sessionStorage.setItem('name-session', 'Atza');

//cokkies
document.cookie = 'userCookie=Atza';


document.cookie = 'userCookie=Lil;expires=' + new Date(2023, 03, 4).toUTCString(); 

console.log(document.cookie);