const btn = document.querySelector('#btn');

console.log(btn);

btn.addEventListener('click', () => {
    alert('click en el boton');
});

$(document).ready(function() {
    $(".btn-query").click(function() {
      console.log("Hola, estoy utilizando jQuery");
    });
  });