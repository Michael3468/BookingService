import Inputmask from 'inputmask';

import './masked-text-field.scss';

const maskedDateField = document.querySelector('.js-masked-text-field__input');
const inpMask = new Inputmask('99.99.9999', { placeholder: 'дд.мм.гггг' });
inpMask.mask(maskedDateField);
