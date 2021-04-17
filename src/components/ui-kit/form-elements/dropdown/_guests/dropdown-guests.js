import './dropdown-guests.scss';
import Dropdown from '../Dropdown';

function updateDropdownGuestsSelectionText(thisObj) {
  const adultsNum = Number(thisObj.dropdownCounters[0].innerText);
  const guestsNum = Number(thisObj.dropdownCounters[0].innerText)
    + Number(thisObj.dropdownCounters[1].innerText);
  const babiesNum = Number(thisObj.dropdownCounters[2].innerText);

  let guestsText;
  switch (guestsNum) {
    case 1:
      guestsText = 'гость';
      break;
    case 2:
    case 3:
    case 4:
      guestsText = 'гостя';
      break;
    default:
      guestsText = 'гостей';
  }

  let babiesText;
  switch (babiesNum) {
    case 1:
      babiesText = 'младенец';
      break;
    case 2:
    case 3:
    case 4:
      babiesText = 'младенца';
      break;
    default:
      babiesText = 'младенцев';
  }

  // cleanButton visibility
  if (guestsNum > 0 || babiesNum > 0) {
    thisObj.cleanButton.classList.add('dropdown-guests__button_clean_show');
  } else {
    thisObj.cleanButton.classList.remove('dropdown-guests__button_clean_show');
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
  return 'Сколько гостей';
  // change selection text end
}

class DropdownGuests extends Dropdown {
  constructor(elem) {
    super(elem);
    this.cleanButton = elem.querySelector('.dropdown-guests__button_clean');
  }

  increment(event) {
    super.increment(event);
    this.selectionText.innerText = updateDropdownGuestsSelectionText(this);
  }

  decrement(event) {
    super.increment(event);
    this.selectionText.innerText = updateDropdownGuestsSelectionText(this);
  }

  clean() {
    this.dropdownCounters.forEach((item) => {
      const counter = item;
      counter.innerText = 0;
    });

    const decrementButtons = this.elem.querySelectorAll('.js-dropdown__button-decrement');
    decrementButtons.forEach((element) => {
      element.classList.remove('dark');
    });

    this.selectionText.innerText = 'Сколько гостей';
    this.cleanButton.classList.remove('dropdown-guests__button_clean_show');
  }

  apply() {
    super.showHide();
  }
}

const dropdownGuests = document.querySelector('#dropdown-guests');
// eslint-disable-next-line no-new
new DropdownGuests(dropdownGuests);
