import DropdownGuests from './DropdownGuests';

const dropdownGuests = document.querySelectorAll('.js-dropdown-guests');
if (dropdownGuests) {
  dropdownGuests.forEach((dropdown) => {
    new DropdownGuests(dropdown);
  });
}
