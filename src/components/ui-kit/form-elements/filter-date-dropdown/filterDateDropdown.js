import './filter-date-dropdown.scss';

class FilterDateDropdown {
  constructor() {
    this._addListeners();
  }

  _showHideDatePicker(event) {
    const filterDateDropdown = event.target.closest('.js-filter-date-dropdown')
      .querySelector('.js-dropdown-date__date-picker');
    const filterStatus = filterDateDropdown.style.display;

    // TODO ?:
    if (filterStatus === 'block') {
      filterDateDropdown.style.display = 'none';
    } else {
      filterDateDropdown.style.display = 'block';
    }
  }

  _handleFilterDateDropdownKeyPress(e) {
    if (e.code === 'Enter') {
      this._showHideDatePicker(e); // TODO e to event
    }
  }

  _addListeners() {
    const filterDateDropdown = document.querySelector('.js-filter-date-dropdown__input');
    filterDateDropdown.addEventListener('click', this._showHideDatePicker);
    filterDateDropdown.addEventListener('keypress', (e) => {
      this._handleFilterDateDropdownKeyPress(e); // TODO e to event
    });
  }
}

export default FilterDateDropdown;
