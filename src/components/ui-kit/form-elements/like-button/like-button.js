import './like-button.scss';

function toggleClasses(button) {
  const likeButtonIcon = button.querySelector('.js-like-button-icon');
  const likeButtonContent = button.querySelector('.js-like-button-content');

  likeButtonIcon.classList.toggle('js-icon-checked-status');
  likeButtonContent.classList.toggle('js-content-checked-status');
  button.classList.toggle('js-container-checked-status');
}

function changeCounter(element) {
  const counter = element.querySelector('.js-like-button-content');
  let counterValue = Number(counter.innerText);

  if (counter.classList.contains('js-content-checked-status')) {
    counterValue += 1;
    counter.innerText = counterValue;
  } else {
    counterValue -= 1;
    counter.innerText = counterValue;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const likeButtons = document.querySelectorAll('.js-like-button-container');

  likeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const element = event.target;
      const likeButton = element.closest('.js-like-button-container');

      toggleClasses(likeButton);
      changeCounter(likeButton);
    });
  });
});
