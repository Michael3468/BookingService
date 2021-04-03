// TODO move styles for buttons to dropdown-guests.scss
// import './dropdown-guests.scss';

import { Dropdown } from '../dropdown-options/dropdown.js';

class DropdownGuests extends Dropdown {
  constructor(elem) {
    super(elem);
    this._cleanButton = this._elem.querySelector(
      '.dropdown-guests__button_clean'
    );
  }

  increment(event) {
    super.increment(event);
    this._selectionText.innerText = updateDropdownGuestsSelectionText(this);
  }

  decrement(event) {
    super.increment(event);
    this._selectionText.innerText = updateDropdownGuestsSelectionText(this);
  }

  clean() {
    this._dropdownCounters.forEach((element) => {
      element.innerText = 0;
    });

    const decrementButtons = this._elem.querySelectorAll(
      '.js-dropdown__button-decrement'
    );
    decrementButtons.forEach((element) => {
      element.classList.remove('dark');
    });

    this._selectionText.innerText = 'Сколько гостей';
    this._cleanButton.classList.remove('dropdown-guests__button_clean_show');
  }

  apply() {
    super.showHide();
  }
}

let dropdownGuests = document.querySelector('#dropdown-guests');
new DropdownGuests(dropdownGuests);

function updateDropdownGuestsSelectionText(thisObj) {
  const adultsNum = Number(thisObj._dropdownCounters[0].innerText);
  const guestsNum =
    Number(thisObj._dropdownCounters[0].innerText) +
    Number(thisObj._dropdownCounters[1].innerText);
  const babiesNum = Number(thisObj._dropdownCounters[2].innerText);

  let guestsText = 'гостей';
  switch (guestsNum) {
    case 1:
      guestsText = 'гость';
      break;
    case 2:
    case 3:
    case 4:
      guestsText = 'гостя';
      break;
  }

  let babiesText = 'младенцев';
  switch (babiesNum) {
    case 1:
      babiesText = 'младенец';
      break;
    case 2:
    case 3:
    case 4:
      babiesText = 'младенца';
      break;
  }

  // cleanButton visibility
  if (guestsNum > 0 || babiesNum > 0) {
    thisObj._cleanButton.classList.add('dropdown-guests__button_clean_show');
  } else {
    thisObj._cleanButton.classList.remove('dropdown-guests__button_clean_show');
  }
  // cleanButton visibility end

  // change selection text
  if (adultsNum === 0 && (babiesNum > 0 || guestsNum > 0)) {
    return 'Должны быть взрослые';
  }
  if (guestsNum > 0 && babiesNum > 0) {
    return `${guestsNum} ${guestsText}, ${babiesNum} ${babiesText}`;
  }
  if (guestsNum > 0) {
    return `${guestsNum} ${guestsText}`;
  }
  if (guestsNum === 0 && babiesNum === 0) {
    return 'Сколько гостей';
  }
  // change selection text end
}
