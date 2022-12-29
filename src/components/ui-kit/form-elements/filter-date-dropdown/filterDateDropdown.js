import './filter-date-dropdown.scss';

class FilterDateDropdown {
  constructor() {
    this._addListeners();
  }

  _showHideDatePicker(event) {
    const datePicker = event.target
      .closest('.js-filter-date-dropdown')
      .querySelector('.js-dropdown-date__date-picker');

    datePicker.style.display = datePicker.style.display === 'block' ? 'none' : 'block';
  }

  _handleKeyPress(event) {
    if (event.code === 'Enter') {
      this._showHideDatePicker(event);
    }
  }

  _addListeners() {
    const dropdown = document.querySelector('.js-filter-date-dropdown__input');

    dropdown.addEventListener('click', this._showHideDatePicker);
    dropdown.addEventListener('keypress', (event) => {
      this._handleKeyPress(event);
    });
  }
}

export default FilterDateDropdown;
