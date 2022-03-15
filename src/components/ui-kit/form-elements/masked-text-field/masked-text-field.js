import Inputmask from 'inputmask';

import './masked-text-field.scss';

window.addEventListener('DOMContentLoaded', () => {
  const maskedDateField = document.querySelector('.js-masked-text-field__input');
  Inputmask({
    "alias": "datetime",
    "inputFormat": "dd.mm.yyyy",
    "placeholder": 'дд.мм.гггг',
  }).mask(maskedDateField);
});
