import { renderPopupContractors } from './render-list-contractors.js';

// const mapContainer = document.querySelector('.container--map');
const map = L.map('map');

const pinVerifiedIcon = L.icon({
  iconUrl: 'img/pin-verified.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52]
});

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const initMap = (coordinate) => {
  // mapContainer.style.display = null;
  // eslint-disable-next-line no-console
  console.log('coordinate>>', coordinate);
  map.setView(coordinate, 10);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
};

const markerGroup = L.layerGroup().addTo(map);

const createAdPinMarker = (locations) => {
  locations.forEach((location) => {
    // eslint-disable-next-line no-console
    // console.log('location.coords>>', location.coords);

    if (location.coords) {
      const marker = L.marker(location.coords, {
        icon: location.isVerified ? pinVerifiedIcon : pinIcon
      });
      marker.addTo(markerGroup).bindPopup(renderPopupContractors(location));
    }
  });
};

const setPins = (locations) => {
  markerGroup.clearLayers();
  createAdPinMarker(locations);
};

export { setPins, initMap, markerGroup };
