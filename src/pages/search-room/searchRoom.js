import CheckboxButtons from '../../components/ui-kit/form-elements/checkbox-buttons/checkboxButtons';
import CustomCheckbox from '../../components/ui-kit/form-elements/custom-checkbox/customCheckbox';
import DropdownGuests from '../../components/ui-kit/form-elements/dropdown/_guests/dropdownGuests';
import DropdownOptions from '../../components/ui-kit/form-elements/dropdown/_options/dropdownOptions';
import FilterDateDropdown from '../../components/ui-kit/form-elements/filter-date-dropdown/filterDateDropdown';
import Pagination from '../../components/ui-kit/form-elements/pagination/pagination';
import Header from '../../components/ui-kit/headers-and-footers/header/header';

import './search-room.scss';

import '../../components/ui-kit/cards/room-card/roomCard';

import '../../components/ui-kit/form-elements/filter-date-picker/filterDatePicker';
import '../../components/ui-kit/form-elements/range-slider/rangeSlider';
import '../../components/ui-kit/form-elements/rich-checkbox-buttons/richCheckboxButtons';

import '../../components/ui-kit/headers-and-footers/footer/footer';
import { smTableWidth } from '../../assets/js/common';

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
    if (window.innerWidth <= smTableWidth) {
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

new SearchRoom();

new FilterDateDropdown();

const dropdownOptions = document.querySelectorAll('.js-dropdown-options');
if (dropdownOptions) {
  dropdownOptions.forEach((dropdown) => {
    new DropdownOptions(dropdown);
  });
}

const dropdownGuests = document.querySelectorAll('.js-dropdown-guests');
if (dropdownGuests) {
  dropdownGuests.forEach((dropdown) => {
    new DropdownGuests(dropdown);
  });
}

new CustomCheckbox();

new Pagination();

new Header();

new CheckboxButtons();