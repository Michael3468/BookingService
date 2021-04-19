import './masked-text-field.scss';

import Inputmask from 'inputmask';

const maskedDateField = document.getElementById('masked-date-field');
const inpMask = new Inputmask('99.99.9999', { placeholder: 'дд.мм.гггг' });
inpMask.mask(maskedDateField);
