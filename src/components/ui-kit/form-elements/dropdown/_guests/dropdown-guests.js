import './dropdown-guests.scss';
import Dropdown from '../Dropdown';

class DropdownGuests extends Dropdown {
  constructor(elem) {
    super(elem);
    this.cleanButton = elem.querySelector('.dropdown-guests__button_clean');
    this.selectionText.innerText = this.updateDropdownGuestsSelectionText();
  }

  increment(event) {
    super.increment(event);
    this.selectionText.innerText = this.updateDropdownGuestsSelectionText();
  }

  decrement(event) {
    super.increment(event);
    this.selectionText.innerText = this.updateDropdownGuestsSelectionText();
  }

  clean() {
    this.dropdownCounters.forEach((item) => {
      const counter = item;
      counter.value = 0;
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

  updateDropdownGuestsSelectionText() {
    const adultsNum = Number(this.dropdownCounters[0].value);
    const guestsNum = Number(this.dropdownCounters[0].value)
                    + Number(this.dropdownCounters[1].value);
    const babiesNum = Number(this.dropdownCounters[2].value);

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

    const isGuestsOrBabies = guestsNum > 0 || babiesNum > 0;
    const isChildsWithoutAdults = adultsNum === 0 && (babiesNum > 0 || guestsNum > 0);
    const isGuests = guestsNum > 0 && babiesNum > 0;

    // cleanButton visibility
    if (isGuestsOrBabies) {
      this.cleanButton.classList.add('dropdown-guests__button_clean_show');
    } else {
      this.cleanButton.classList.remove('dropdown-guests__button_clean_show');
    }
    // cleanButton visibility end

    // change selection text
    if (isChildsWithoutAdults) {
      return 'Должны быть взрослые';
    }

    if (isGuests) {
      return `${guestsNum} ${guestsText}, ${babiesNum} ${babiesText}`;
    }
    if (guestsNum > 0) {
      return `${guestsNum} ${guestsText}`;
    }
    if (!isGuests) {
      return 'Сколько гостей';
    }
    return 'Сколько гостей';
    // change selection text end
  }
}

const dropdownGuests = document.querySelectorAll('.js-dropdown-guests');
if (dropdownGuests) {
  dropdownGuests.forEach((dropdown) => {
    // eslint-disable-next-line no-new
    new DropdownGuests(dropdown);
  });
}
