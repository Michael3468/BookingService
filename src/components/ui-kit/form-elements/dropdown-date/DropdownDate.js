import '../../cards/date-picker';

import './dropdown-date.scss';

class DropdownDate {
  constructor(elem) {
    this.elem = elem;

    this._addListeners();
  }

  _addListeners() {
    this.elem.addEventListener('click', this._showHideDatePicker);
    this.elem.addEventListener('keypress', (event) => {
      this._handleDropdownDateBlockKeyPress(event);
    });
  }

  _showHideDatePicker(event) {
    if (!event.target.className.includes('dropdown-date__input')) return;

    const ddDate = event.target.closest('.js-dropdown-date');
    const dropdownDate = ddDate.nextSibling; // js-dropdown-date__date-picker
    const ddDateStatus = dropdownDate.style.display;
    if (ddDateStatus === 'block') {
      dropdownDate.style.display = 'none';
    } else {
      dropdownDate.style.display = 'block';
    }
  }

  _handleDropdownDateBlockKeyPress(event) {
    event.preventDefault();
    if (event.code === 'Enter') {
      this._showHideDatePicker(event);
    }
  }
}

export default DropdownDate;
