import './text-field.scss';

const subscriptionForm = document.querySelector('.js-subscription-form');
const subscriptionSubmitButton = document.querySelector('.js-arrow-forward');

subscriptionSubmitButton.addEventListener('click', () => {
  subscriptionForm.submit();
});

subscriptionSubmitButton.addEventListener('keypress', (e) => {
  if (e.code === 'Enter') {
    subscriptionForm.submit();
  }
});
