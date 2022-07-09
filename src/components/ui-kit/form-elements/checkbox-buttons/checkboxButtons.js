/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import './checkbox-buttons.scss';

class CheckboxButtons {
  constructor() {
    this.expandableCheckbox = this._expandableCheckbox();
    this.checkboxOptions = this._checkboxOptions();
    this.expandMore = this._expandMore();

    this._addListeners();
  }

  _expandableCheckbox() {
    return document.querySelector('.js-checkbox-buttons__expandable-list');
  }

  _checkboxOptions() {
    return this.expandableCheckbox.nextElementSibling;
  }

  _expandMore() {
    return this.expandableCheckbox.lastElementChild.children[1];
  }

  _showHideCheckboxOptions = () => {
    const isHidden = this._checkboxOptions().classList.contains('hidden');
    if (isHidden) {
      this.checkboxOptions.classList.remove('hidden');
      this.expandMore.classList.add(
        'checkbox-buttons__expandable-list-expand-more-rotate',
      );
    } else {
      this.checkboxOptions.classList.add('hidden');
      this.expandMore.classList.remove(
        'checkbox-buttons__expandable-list-expand-more-rotate',
      );
    }
  }

  _handleCheckboxCaptionKeyPress(e) {
    if (e.code === 'Enter') {
      this._showHideCheckboxOptions();
    }
  }

  _addListeners() {
    window.addEventListener('DOMContentLoaded', () => {
      this.expandableCheckbox.addEventListener(
        'click',
        this._showHideCheckboxOptions,
      );

      this.expandableCheckbox.addEventListener('keypress', (e) => {
        this._handleCheckboxCaptionKeyPress(e);
      });
    });
  }
}

export default CheckboxButtons;
