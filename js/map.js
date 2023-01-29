import { renderPopupContractors } from './render-list-contractors.js';
import { checkContainsClass } from './utils.js';
import { renderMapModalForm, getModalMode } from './modal.js';

const map = L.map('map');

const pinVerifiedIcon = L.icon({
  iconUrl: 'img/pin-verified.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const pinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const initMap = (coordinate) => {
  map.setView(coordinate, 10);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
};

const markerGroup = L.layerGroup().addTo(map);

const onPinClick = (evt) => {
  const popupForm = document.querySelector(`.modal--${getModalMode()}`);
  if (checkContainsClass(evt.target, 'btn--green')) {
    renderMapModalForm(popupForm, evt.target.parentNode);
  }
};

const createAdPinMarker = (locations) => {
  locations.forEach((location) => {
    //TODO Почему с сервера приходят некоторые seller без coords, поэтому ниже проверка(надо отписать при сдаче)
    if (location.coords) {
      const marker = L.marker(location.coords, {
        icon: location.isVerified ? pinVerifiedIcon : pinIcon
      });
      marker.addTo(markerGroup).bindPopup(renderPopupContractors(location));
    }
  });
  const mapDiv = document.querySelector('.map');
  mapDiv.addEventListener('click', onPinClick);
};

const setPins = (locations) => {
  markerGroup.clearLayers();
  createAdPinMarker(locations);
};

export { setPins, initMap, markerGroup };
