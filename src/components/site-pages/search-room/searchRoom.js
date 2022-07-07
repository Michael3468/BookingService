import FilterDateDropdown from '../../ui-kit/form-elements/filter-date-dropdown/filterDateDropdown';

import './search-room.scss';

import '../../ui-kit/cards/room-card/roomCard';

import '../../ui-kit/form-elements/checkbox-buttons/checkboxButtons';
import '../../ui-kit/form-elements/custom-checkbox/customCheckbox';
import '../../ui-kit/form-elements/dropdown/_guests/dropdownGuests';
import '../../ui-kit/form-elements/dropdown/_options/dropdownOptions';
import '../../ui-kit/form-elements/pagination/pagination';
import '../../ui-kit/form-elements/range-slider/rangeSlider';
import '../../ui-kit/form-elements/rich-checkbox-buttons/richCheckboxButtons';

import '../../ui-kit/headers-and-footers/header/header';
import '../../ui-kit/headers-and-footers/footer/footer';

// eslint-disable-next-line no-new
new FilterDateDropdown();

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
