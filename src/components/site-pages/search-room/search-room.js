import './search-room.scss';

import '../../ui-kit/headers-and-footers/headers/headers';
import '../../ui-kit/headers-and-footers/footers/footers';

import '../../ui-kit/form-elements/filter-date-dropdown/filter-date-dropdown';
import '../../ui-kit/form-elements/dropdown/_guests/dropdown-guests';

import '../../ui-kit/form-elements/range-slider/range-slider';
import '../../ui-kit/form-elements/dropdown/_options/dropdown-options';
import '../../ui-kit/form-elements/checkbox-buttons/checkbox-buttons';
import '../../ui-kit/form-elements/rich-checkbox-buttons/rich-checkbox-buttons';

import '../../ui-kit/cards/room-card/room-card';
import '../../ui-kit/form-elements/pagination/pagination';

const optionsColumnButton = document.querySelector('.search-room__options-column_button');
const menu = document.querySelector('.search-room__options-column');

function showColumnOptionsMenu() {
  const menuStatus = menu.style.display;
  if (menuStatus !== 'block') {
    menu.style.display = 'block';
    menu.style.marginRight = '10px';
    optionsColumnButton.style.rotate = '180deg';
  } else {
    menu.style.display = 'none';
    menu.style.marginRight = '0px';
    optionsColumnButton.style.rotate = '0deg';
  }
}

optionsColumnButton.addEventListener('click', showColumnOptionsMenu);
