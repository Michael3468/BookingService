/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import './like-button.scss';

class LikeButton {
  constructor() {
    this.likeButtons = this._initLikeButtons();
    this._addListeners();
  }

  _initLikeButtons() {
    return document.querySelectorAll('.js-like-button-container');
  }

  _addListeners() {
    document.addEventListener('DOMContentLoaded', () => {
      this._handleDomContentLoaded();
    });
  }

  _handleDomContentLoaded() {
    this.likeButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        this._handleLikeButtonClick(e);
      });
    });
  }

  _handleLikeButtonClick(e) {
    const element = e.target;
    const likeButton = element.closest('.js-like-button-container');

    this._toggleClasses(likeButton);
    this._changeCounter(likeButton);
  }

  _toggleClasses(button) {
    const likeButtonIcon = button.querySelector('.js-like-button__icon');
    const likeButtonContent = button.querySelector('.js-like-button__content');

    likeButtonIcon.classList.toggle('js-icon-checked-status');
    likeButtonContent.classList.toggle('js-content-checked-status');
    button.classList.toggle('js-container-checked-status');
  }

  _changeCounter(element) {
    const counter = element.querySelector('.js-like-button__content');
    let counterValue = Number(counter.innerText);

    if (counter.classList.contains('js-content-checked-status')) {
      counterValue += 1;
      counter.innerText = counterValue;
    } else {
      counterValue -= 1;
      counter.innerText = counterValue;
    }
  }
}

export default LikeButton;
