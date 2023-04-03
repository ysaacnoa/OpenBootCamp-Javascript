// Inicializa el mapa en el contenedor "map"
let map = L.map('map').setView([51.505, -0.09], 6);


// Agrega una capa de mosaicos de OpenStreetMap al mapa
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Agrega chinchetas a tus lugares favoritos
var lugares = [
  { nombre: 'Gran Barrera de Coral', latitud: -18.2871, longitud: 147.6992 },
  { nombre: 'Machu Picchu', latitud: -13.1631, longitud: -72.545 },
  { nombre: 'Monte Everest', latitud: 27.9881, longitud: 86.925 },
];

lugares.forEach(function (lugar) {
  L.marker([lugar.latitud, lugar.longitud]).addTo(map).bindPopup(lugar.nombre);
});
