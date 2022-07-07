/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import FilterDatePicker from '../filter-date-picker/filterDatePicker';

import './filter-date-dropdown.scss';

// eslint-disable-next-line no-new
new FilterDatePicker();

class FilterDateDropdown {
  constructor() {
    this._addListeners();
  }

  _showHideDatePicker(event) {
    const filterDateDropdown = event.target.closest('.js-filter-date-dropdown')
      .querySelector('.js-dropdown-date__date-picker');
    const filterStatus = filterDateDropdown.style.display;

    if (filterStatus === 'block') {
      filterDateDropdown.style.display = 'none';
    } else {
      filterDateDropdown.style.display = 'block';
    }
  }

  _handleFilterDateDropdownKeyPress(e) {
    if (e.code === 'Enter') {
      this._showHideDatePicker(e);
    }
  }

  _addListeners() {
    const filterDateDropdown = document.querySelector('.js-filter-date-dropdown__input');
    filterDateDropdown.addEventListener('click', this._showHideDatePicker);
    filterDateDropdown.addEventListener('keypress', (e) => {
      this._handleFilterDateDropdownKeyPress(e);
    });
  }
}

export default FilterDateDropdown;
