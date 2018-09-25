const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoiaHJvZ2VyczE0IiwiYSI6ImNqbWk1NmZ2ZDAwYmozcWxmNm9iY3drYjQifQ._RIgp0xzYX47zk_kDqfEiw';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png',
};

const buildMarker = (type, coords) => {
  // Your Code Here
  const newMarker = document.createElement('div');
  newMarker.style.height = '39px';
  newMarker.style.width = '32px';
  newMarker.style.backgroundImage = `url(${iconURLs[type]})`;
  newMarker.className = type;
  return new mapboxgl.Marker(newMarker).setLngLat(coords);
};

module.exports = buildMarker;
