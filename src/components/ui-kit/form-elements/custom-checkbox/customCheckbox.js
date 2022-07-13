import './custom-checkbox.scss';

class CustomCheckbox {
  constructor() {
    this.customCheckboxes = this._customCheckboxes();

    this._addListeners();
  }

  _customCheckboxes() {
    return document.querySelectorAll('.js-custom-checkbox__item');
  }

  _addListeners() {
    this.customCheckboxes.forEach((item) => {
      item.addEventListener('keypress', (e) => {
        this._handleCustomCheckboxItemKeyPress(e, item);
      });
    });
  }

  _handleCustomCheckboxItemKeyPress(e, item) {
    if (e.code === 'Enter') {
      const itemInput = item.querySelector('.js-custom-checkbox__input');
      itemInput.checked = !itemInput.checked;
    }
  }
}

export default CustomCheckbox;
