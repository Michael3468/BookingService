import './dropdown-options.scss';
import Dropdown from '../Dropdown';

function updateDropdownOptionsSelectionText(thisObj) {
  const bedroomsCounter = thisObj.dropdownCounters[0].innerText;
  const bedsCounter = thisObj.dropdownCounters[1].innerText;
  const bathroomsCounter = thisObj.dropdownCounters[2].innerText;

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

  if (bedroomsCounter > 0 && bedsCounter > 0 && bathroomsCounter > 0) {
    return `${bedroomsCounter} ${bedrooms}, ${bedsCounter} ${beds}, ${bathroomsCounter} ${baths}`;
  }
  if (bedroomsCounter > 0 && bedsCounter > 0) {
    return `${bedroomsCounter} ${bedrooms}, ${bedsCounter} ${beds}`;
  }
  if (bedroomsCounter > 0 && bathroomsCounter > 0) {
    return `${bedroomsCounter} ${bedrooms}, ${bathroomsCounter} ${baths}`;
  }
  if (bedsCounter > 0 && bathroomsCounter > 0) {
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

class DropdownOptions extends Dropdown {
  increment(event) {
    super.increment(event);
    this.selectionText.innerText = updateDropdownOptionsSelectionText(this);
  }

  decrement(event) {
    super.decrement(event);
    this.selectionText.innerText = updateDropdownOptionsSelectionText(this);
  }
}

const dropdownOptions = document.querySelector('#dropdown-options');
// eslint-disable-next-line no-new
new DropdownOptions(dropdownOptions);
