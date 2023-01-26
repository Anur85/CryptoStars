import { renderPopupContractors } from './render-list-contractors.js';

const mapContainer = document.querySelector('.container--map');
const map = L.map('map');

const pinVerifiedIcon = L.icon({
  iconUrl: 'img/pin-verified.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const initMap = (/*coordinate*/) => {
  mapContainer.style.display = null;
  map.setView(/*coordinate, 13*/);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
};

const markerGroup = L.layerGroup().addTo(map);

const createAdPinMarker = (locations) => {
  locations.forEach((location) => {
    const marker = L.marker(location, {
      icon: location.isVerified ? pinIcon : pinVerifiedIcon,
    });
    marker.addTo(markerGroup).bindPopup(renderPopupContractors(location));
  });
};

const setPins = (locations) => {
  markerGroup.clearLayers();
  createAdPinMarker(locations);
};

export { setPins, initMap };
