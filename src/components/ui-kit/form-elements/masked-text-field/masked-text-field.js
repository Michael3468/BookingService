import './masked-text-field.scss';

import Inputmask from "inputmask";

{
  let maskedDateField = document.getElementById("masked-date-field");
  let inpMask = new Inputmask("99.99.9999", { "placeholder": "дд.мм.гггг" });
  inpMask.mask(maskedDateField);
}