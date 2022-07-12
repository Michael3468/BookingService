import DropdownGuests from '../../form-elements/dropdown/_guests/dropdownGuests';

import './room-search.scss';
import '../card-background-border.scss';
import '../../form-elements/dropdown/_options/dropdown-options.scss';

const dropdownGuests = document.querySelectorAll('.js-dropdown-guests');
if (dropdownGuests) {
  dropdownGuests.forEach((dropdown) => {
    new DropdownGuests(dropdown);
  });
}
