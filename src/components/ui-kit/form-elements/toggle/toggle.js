/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import './toggle.scss';

class Toggle {
  constructor() {
    this.toggleButtons = this._initToggleButtons();
    this._addListeners();
  }

  _initToggleButtons() {
    return document.querySelectorAll('.js-toggle__button');
  }

  _addListeners() {
    this.toggleButtons.forEach((item) => {
      item.addEventListener('keypress', (e) => {
        this._handleToggleButtonKeyPress(e, item);
      });
    });
  }

  _handleToggleButtonKeyPress(e, item) {
    if (e.code === 'Enter') {
      e.preventDefault();
      // eslint-disable-next-line no-param-reassign
      item.checked = !item.checked;
    }
  }
}

export default Toggle;
