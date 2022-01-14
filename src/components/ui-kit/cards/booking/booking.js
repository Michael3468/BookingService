import './booking.scss';
import '../card-background-border.scss';
import '../../form-elements/dropdown/_options/dropdown-options.scss';

import './__caption/booking__caption';
import '../../form-elements/dropdown-date/dropdown-date';
import '../../form-elements/dropdown/_guests/dropdown-guests';
import '../../form-elements/buttons/buttons';

const bookingForm = document.querySelector('.js-booking-form');
const bookingSubmitButton = document.querySelector('.js-booking-submit-button');

bookingSubmitButton.addEventListener('click', () => {
  bookingForm.submit();
});
