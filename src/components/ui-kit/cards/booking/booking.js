import DropdownDate from '../../form-elements/dropdown-date/dropdownDate';

import './__caption/bookingCaption';
import '../../form-elements/button/button';
import '../../form-elements/dropdown/_guests/dropdownGuests';

import './booking.scss';
import '../card-background-border.scss';
import '../../form-elements/dropdown/_options/dropdown-options.scss';

const dropdownDates = document.querySelectorAll('.js-dropdown-date');
[...dropdownDates].map((item) => new DropdownDate(item));
