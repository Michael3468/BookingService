import DropdownDate from '../../form-elements/dropdown-date/dropdownDate';
import DropdownGuests from '../../form-elements/dropdown/_guests/dropdownGuests';

import './__caption/bookingCaption';
import '../../form-elements/button/button';

import './booking.scss';
import '../card-background-border.scss';
import '../../form-elements/dropdown/_options/dropdown-options.scss';

const dropdownDates = document.querySelectorAll('.js-dropdown-date');
[...dropdownDates].map((item) => new DropdownDate(item));

const dropdownGuests = document.querySelectorAll('.js-dropdown-guests');
if (dropdownGuests) {
  dropdownGuests.forEach((dropdown) => {
    // eslint-disable-next-line no-new
    new DropdownGuests(dropdown);
  });
}
