let map = L.map('map').setView([51.505, -0.09], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(
  map
);

L.marker([51.5, -0.09]).addTo(map);

document.getElementById('select-place').addEventListener('change', (event) => {
  let coords = event.target.value.split(',');
  map.flyTo(coords,13);
});
