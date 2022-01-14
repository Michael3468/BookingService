import './registration.scss';
import '../card-background-border.scss';

import '../../form-elements/text-field/text-field';
import '../../form-elements/radio-buttons/radio-buttons';
import '../../form-elements/masked-text-field/masked-text-field';
import '../../form-elements/toggle/toggle';

const registrationSubmitButton = document.querySelector('.js-registration-submit-button');
const registrationForm = document.querySelector('.js-registration-form');

registrationSubmitButton.addEventListener('click', () => {
  registrationForm.submit();
});
