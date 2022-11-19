import '../../cards/date-picker/datePicker';

import './dropdown-date.scss';

class DropdownDate {
  constructor(elem) {
    this.elem = elem;

    this._addListeners();
  }

  _addListeners() {
    this.elem.addEventListener('click', this._showHideDatePicker);
    this.elem.addEventListener('keypress', (e) => {
      this._handleDropdownDateBlockKeyPress(e); // TODO e to event
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

  _handleDropdownDateBlockKeyPress(e) {
    e.preventDefault(); // TODO e to event
    if (e.code === 'Enter') {
      this._showHideDatePicker(e);
    }
  }
}

export default DropdownDate;
