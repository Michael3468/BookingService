import './login.scss';
import '../card-background-border.scss';

const loginForm = document.querySelector('.js-login-form');
const loginSubmitButton = document.querySelector('.js-login-submit-button');

loginSubmitButton.addEventListener('click', () => {
  loginForm.submit();
});
