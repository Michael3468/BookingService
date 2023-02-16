import Inputmask from 'inputmask';

import './masked-text-field.scss';

class MaskedTextField {
  constructor({
    alias = 'datetime',
    inputFormat = 'dd.mm.yyyy',
    placeholder = 'дд.мм.гггг',
  }) {
    this.alias = alias;
    this.inputFormat = inputFormat;
    this.placeholder = placeholder;

    this._initMaskedTextField();
  }

  _initMaskedTextField() {
    window.addEventListener('DOMContentLoaded', () => {
      const maskedDateField = document.querySelector(
        '.js-masked-text-field__input',
      );
      Inputmask({
        alias: this.alias,
        inputFormat: this.inputFormat,
        placeholder: this.placeholder,
      }).mask(maskedDateField);
    });
  }
}

export default MaskedTextField;
