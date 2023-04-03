const username = 'Ysaac';
const lastname = 'Correa';

const user = {
    username: username,
    lastname: lastname,
};

//inside in session storage
/* sessionStorage.setItem(
    'user',JSON.stringify(user)
); */

//inside in local storage
/* localStorage.setItem(
    'user',JSON.stringify(user)
);
 */

//cookie
/* const exp= new Date(Date.now()+120000);
document.cookie = `user=${JSON.stringify(user)}; expires=${exp.toUTCString()}`;
 */