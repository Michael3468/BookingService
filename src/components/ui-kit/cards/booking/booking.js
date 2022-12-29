import tippy from 'tippy.js';

import '../booking-caption/bookingCaption';
import '../../form-elements/button/button';
import '../../form-elements/dropdown-guests';
import '../../form-elements/dropdown-date';

import './booking.scss';
import '../card-background-border.scss';
import '../../form-elements/dropdown/_options/dropdown-options.scss'; /// TODO move to DropdownOptions

tippy('.js-booking__options-discount', {
  content: 'discount',
});

tippy('.js-booking__options-additional-services', {
  content: 'additional-services',
});
