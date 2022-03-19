import './search-room.scss';

import '../../ui-kit/cards/room-card/room-card';

import '../../ui-kit/form-elements/checkbox-buttons/checkbox-buttons';
import '../../ui-kit/form-elements/custom-checkbox/custom-checkbox';
import '../../ui-kit/form-elements/dropdown/_guests/dropdown-guests';
import '../../ui-kit/form-elements/dropdown/_options/dropdown-options';
import '../../ui-kit/form-elements/filter-date-dropdown/filter-date-dropdown';
import '../../ui-kit/form-elements/pagination/pagination';
import '../../ui-kit/form-elements/range-slider/range-slider';
import '../../ui-kit/form-elements/rich-checkbox-buttons/rich-checkbox-buttons';

import '../../ui-kit/headers-and-footers/header/header';
import '../../ui-kit/headers-and-footers/footer/footer';

const optionsColumnButton = document.querySelector('.js-search-room-options-column-button');
const menu = document.querySelector('.js-search-room-options-column');

function showColumnOptionsMenu() {
  menu.classList.toggle('hidden');
  optionsColumnButton.classList.toggle('search-room-options-column-button_rotate');
}

function handleWindowResize() {
  if (window.innerWidth < 641) {
    menu.classList.add('hidden');
  } else {
    menu.classList.remove('hidden');
  }
}

optionsColumnButton.addEventListener('click', showColumnOptionsMenu);

window.addEventListener('resize', handleWindowResize);
window.addEventListener('DOMContentLoaded', handleWindowResize);
