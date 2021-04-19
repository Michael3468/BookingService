/* eslint-disable no-undef */
import './like-button.scss';

function toggleClasses(elementId) {
  $(`#icon_${elementId}`).toggleClass('js-icon-checked-status');
  $(`#content_${elementId}`).toggleClass('js-content-checked-status');
  $(`#container_${elementId}`).toggleClass('js-container-checked-status');
}

function changeCounter(elementId) {
  const counterId = `#content_${elementId}`;
  const $counterValue = Number($(counterId).text());

  if ($(counterId).hasClass('js-content-checked-status')) {
    $(counterId).text($counterValue + 1);
  } else {
    $(counterId).text($counterValue - 1);
  }
}

(() => {
  $('.like-button__input').on('click', (event) => {
    const elementId = event.target.id;

    toggleClasses(elementId);
    changeCounter(elementId);
  });
})();
