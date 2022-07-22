import Dropdown from '../Dropdown';

import './dropdown-guests.scss';

class DropdownGuests extends Dropdown {
  constructor(elem) {
    super(elem);
    this.cleanButton = elem.querySelector('.js-dropdown-guests__button-clean');
    this.selectionText.innerText = this._updateDropdownGuestsSelectionText();

    this._addListeners();
  }

  increment(event) {
    super.increment(event);
    this.selectionText.innerText = this._updateDropdownGuestsSelectionText();
  }

  decrement(event) {
    super.increment(event);
    this.selectionText.innerText = this._updateDropdownGuestsSelectionText();
  }

  clean() {
    this.dropdownCounters.forEach((item) => {
      const counter = item;
      counter.value = 0;
    });

    const decrementButtons = this.elem.querySelectorAll(
      '.js-dropdown__button-decrement'
    );
    decrementButtons.forEach((element) => {
      element.classList.remove('dark');
    });

    this.selectionText.innerText = 'Сколько гостей';
    this.cleanButton.classList.remove('dropdown-guests__button-clean_visible');
  }

  apply() {
    super.showHide();
  }

  _updateDropdownGuestsSelectionText() {
    const adultsNum = Number(this.dropdownCounters[0].value);
    const guestsNum =
      Number(this.dropdownCounters[0].value) +
      Number(this.dropdownCounters[1].value);
    const babiesNum = Number(this.dropdownCounters[2].value);

    let guestsText;
    const lastguestsNum = guestsNum > 20 ? guestsNum % 10 : guestsNum;

    switch (lastguestsNum) {
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
    const lastbabiesNum = babiesNum > 20 ? babiesNum % 10 : babiesNum;

    switch (lastbabiesNum) {
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
    const isChildsWithoutAdults =
      adultsNum === 0 && (babiesNum > 0 || guestsNum > 0);
    const isGuests = guestsNum > 0 && babiesNum > 0;

    // cleanButton visibility
    if (isGuestsOrBabies) {
      this.cleanButton.classList.add('dropdown-guests__button-clean_visible');
    } else {
      this.cleanButton.classList.remove(
        'dropdown-guests__button-clean_visible'
      );
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

  _addListeners() {
    document.addEventListener('click', (e) => {
      // close dropdown__menu
      if (!e.target.closest('.js-dropdown__body')) {
        const menus = document.querySelectorAll('.js-dropdown__menu');
        menus.forEach((menu) => {
          menu.classList.add('dropdown__menu_hidden');
        });
      }
    });
  }
}

export default DropdownGuests;
