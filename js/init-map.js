import {initMap} from './map.js';
import {activePage, deactivePage} from './form.js';
import {setOnMapLoad, setOnMainPinMove, setAddress, setAdPins } from './map.js';
import {DEFAULT_COORDS} from './data.js';
import {getData} from './api.js';
import {showAlert} from './message.js';

deactivePage();

getData((cards) => {
  setAdPins(cards);
}, () => {
  showAlert('Ошибка при загрузке данных');
});

setOnMapLoad(() => {
  setOnMainPinMove();
  setAddress(DEFAULT_COORDS);
  activePage();
});

initMap(DEFAULT_COORDS);