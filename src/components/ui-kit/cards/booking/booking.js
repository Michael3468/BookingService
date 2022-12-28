import tippy from 'tippy.js';

import DropdownDate from '../../form-elements/dropdown-date/dropdownDate';

import '../booking-caption/bookingCaption';
import '../../form-elements/button/button';
import '../../form-elements/dropdown/_guests';

import './booking.scss';
import '../card-background-border.scss';
import '../../form-elements/dropdown/_options/dropdown-options.scss'; /// TODO move to DropdownOptions

const dropdownDates = document.querySelectorAll('.js-dropdown-date');
[...dropdownDates].map((item) => new DropdownDate(item));

tippy('.js-booking__options-discount', {
  content: 'discount',
});

tippy('.js-booking__options-additional-services', {
  content: 'additional-services',
});
