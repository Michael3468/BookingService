import Dropdown from '../Dropdown';

import './dropdown-options.scss';

class DropdownOptions extends Dropdown {
  constructor(elem) {
    super(elem);
    this.selectionText.innerText = this.updateDropdownOptionsSelectionText();
  }

  increment(event) {
    super.increment(event);
    this.selectionText.innerText = this.updateDropdownOptionsSelectionText();
  }

  decrement(event) {
    super.decrement(event);
    this.selectionText.innerText = this.updateDropdownOptionsSelectionText();
  }

  updateDropdownOptionsSelectionText() {
    const bedroomsCounter = this.dropdownCounters[0].value;
    const bedsCounter = this.dropdownCounters[1].value;
    const bathroomsCounter = this.dropdownCounters[2].value;

    let bedrooms;
    switch (bedroomsCounter) {
      case '1':
        bedrooms = 'спальня';
        break;
      case '2':
      case '3':
      case '4':
        bedrooms = 'спальни';
        break;
      default: bedrooms = 'спален';
    }

    let beds;
    switch (bedsCounter) {
      case '1':
        beds = 'кровать';
        break;
      case '2':
      case '3':
      case '4':
        beds = 'кровати';
        break;
      default: beds = 'кроватей';
    }

    let baths;
    switch (bathroomsCounter) {
      case '1':
        baths = 'ванна';
        break;
      case '2':
      case '3':
      case '4':
        baths = 'ванны';
        break;
      default: baths = 'ванн';
    }

    const isConveniences = bedroomsCounter > 0 && bedsCounter > 0 && bathroomsCounter > 0;
    const isBedroomsAndBeds = bedroomsCounter > 0 && bedsCounter > 0;
    const isBedroomsAndBathrooms = bedroomsCounter > 0 && bathroomsCounter > 0;
    const isBedsAndBathrooms = bedsCounter > 0 && bathroomsCounter > 0;

    if (isConveniences) {
      return `${bedroomsCounter} ${bedrooms}, ${bedsCounter} ${beds}, ${bathroomsCounter} ${baths}`;
    }
    if (isBedroomsAndBeds) {
      return `${bedroomsCounter} ${bedrooms}, ${bedsCounter} ${beds}`;
    }
    if (isBedroomsAndBathrooms) {
      return `${bedroomsCounter} ${bedrooms}, ${bathroomsCounter} ${baths}`;
    }
    if (isBedsAndBathrooms) {
      return `${bedsCounter} ${beds}, ${bathroomsCounter} ${baths}`;
    }
    if (bedroomsCounter > 0) {
      return `${bedroomsCounter} ${bedrooms}`;
    }
    if (bedsCounter > 0) {
      return `${bedsCounter} ${beds}`;
    }
    if (bathroomsCounter > 0) {
      return `${bathroomsCounter} ${baths}`;
    }
    return 'Удобства';
  }
}

const dropdownOptions = document.querySelectorAll('.js-dropdown-options');
if (dropdownOptions) {
  dropdownOptions.forEach((item) => {
    // eslint-disable-next-line no-new
    new DropdownOptions(item);
  });
}
