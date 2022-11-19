import './filter-date-dropdown.scss';

class FilterDateDropdown {
  constructor() {
    this._addListeners();
  }

  _showHideDatePicker(event) {
    const filterDateDropdown = event.target.closest('.js-filter-date-dropdown')
      .querySelector('.js-dropdown-date__date-picker');
    const filterStatus = filterDateDropdown.style.display;

    filterDateDropdown.style.display = filterStatus === 'block'
      ? 'none'
      : 'block';
  }

  _handleFilterDateDropdownKeyPress(event) {
    if (event.code === 'Enter') {
      this._showHideDatePicker(event);
    }
  }

  _addListeners() {
    const filterDateDropdown = document.querySelector('.js-filter-date-dropdown__input');
    filterDateDropdown.addEventListener('click', this._showHideDatePicker);
    filterDateDropdown.addEventListener('keypress', (event) => {
      this._handleFilterDateDropdownKeyPress(event);
    });
  }
}

export default FilterDateDropdown;
