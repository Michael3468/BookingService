/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import Inputmask from 'inputmask';

import './masked-text-field.scss';

class MaskedTextField {
  constructor() {
    this.elem = this._initMaskedTextField();
  }

  _initMaskedTextField() {
    window.addEventListener('DOMContentLoaded', () => {
      const maskedDateField = document.querySelector(
        '.js-masked-text-field__input',
      );
      Inputmask({
        alias: 'datetime',
        inputFormat: 'dd.mm.yyyy',
        placeholder: 'дд.мм.гггг',
      }).mask(maskedDateField);
    });
  }
}

export default MaskedTextField;
