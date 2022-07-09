/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import CheckboxButtons from '../../ui-kit/form-elements/checkbox-buttons/checkboxButtons';
import CustomCheckbox from '../../ui-kit/form-elements/custom-checkbox/customCheckbox';
import DropdownGuests from '../../ui-kit/form-elements/dropdown/_guests/dropdownGuests';
import DropdownOptions from '../../ui-kit/form-elements/dropdown/_options/dropdownOptions';
import FilterDateDropdown from '../../ui-kit/form-elements/filter-date-dropdown/filterDateDropdown';
import Pagination from '../../ui-kit/form-elements/pagination/pagination';
import RangeSlider from '../../ui-kit/form-elements/range-slider/rangeSlider';
import Header from '../../ui-kit/headers-and-footers/header/header';

import './search-room.scss';

import '../../ui-kit/cards/room-card/roomCard';

import '../../ui-kit/form-elements/rich-checkbox-buttons/richCheckboxButtons';

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
      'search-room-options-column-button_rotate'
    );
  };

  _handleWindowResize = () => {
    // TODO 641 constant
    if (window.innerWidth < 641) {
      this.menu.classList.add('hidden');
    } else {
      this.menu.classList.remove('hidden');
    }
  };

  _addListeners() {
    this.optionsColumnButton.addEventListener(
      'click',
      this._showColumnOptionsMenu
    );

    window.addEventListener('resize', this._handleWindowResize);
    window.addEventListener('DOMContentLoaded', this._handleWindowResize);
  }
}

// TODO move eslint-disable to eslint config
// eslint-disable-next-line no-new
new SearchRoom();

// eslint-disable-next-line no-new
new FilterDateDropdown();

const dropdownOptions = document.querySelectorAll('.js-dropdown-options');
if (dropdownOptions) {
  dropdownOptions.forEach((dropdown) => {
    // eslint-disable-next-line no-new
    new DropdownOptions(dropdown);
  });
}

const dropdownGuests = document.querySelectorAll('.js-dropdown-guests');
if (dropdownGuests) {
  dropdownGuests.forEach((dropdown) => {
    // eslint-disable-next-line no-new
    new DropdownGuests(dropdown);
  });
}

new CustomCheckbox();

new Pagination();

new RangeSlider();

new Header();

new CheckboxButtons();
