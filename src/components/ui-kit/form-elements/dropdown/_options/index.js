import DropdownOptions from './DropdownOptions';

const dropdownOptions = document.querySelectorAll('.js-dropdown-options');
if (dropdownOptions) {
  dropdownOptions.forEach((dropdown) => {
    new DropdownOptions(dropdown);
  });
}
