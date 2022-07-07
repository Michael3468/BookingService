/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
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

class SearchRoom {
  constructor() {
    this.menu = this._initMenu();
    this.optionsColumnButton = this._initOptionsColumnButton();

    this._addListeners();
  }

  _initMenu() {
    return document.querySelector('.js-search-room-options-column');
  }

  _initOptionsColumnButton() {
    return document.querySelector('.js-search-room-options-column-button');
  }

  _showColumnOptionsMenu = () => {
    this.menu.classList.toggle('hidden');
    this.optionsColumnButton.classList.toggle(
      'search-room-options-column-button_rotate',
    );
  }

  _handleWindowResize = () => {
    console.log(this.menu);

    // TODO 641 constant
    if (window.innerWidth < 641) {
      this.menu.classList.add('hidden');
    } else {
      this.menu.classList.remove('hidden');
    }
  }

  _addListeners() {
    this.optionsColumnButton.addEventListener(
      'click',
      this._showColumnOptionsMenu,
    );

    console.log('add listeners');
    window.addEventListener('resize', this._handleWindowResize);
    window.addEventListener('DOMContentLoaded', this._handleWindowResize);
  }
}

// TODO move eslint-disable to eslint config
// eslint-disable-next-line no-new
new SearchRoom();

// eslint-disable-next-line no-new
new FilterDateDropdown();
