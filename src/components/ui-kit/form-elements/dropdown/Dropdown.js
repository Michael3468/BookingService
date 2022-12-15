export default class Dropdown {
  constructor(elem) {
    if (elem === null) return;
    this.elem = elem;
    this._defineElements(elem);
    this.elem.onclick = this._onClick.bind(this);
    this._initListeners();
    this._initDecrementButtonsColors();
  }

  showHide() {
    this.menu.classList.toggle('dropdown__menu_hidden');
    this.dropdownBody.classList.toggle('dropdown__body-bottom-radius');
  }

  increment(event) {
    this._setCounterValue(this.action, event);
  }

  decrement(event) {
    this._setCounterValue(this.action, event);
  }

  _defineElements(elem) {
    this.dropdownBody = elem.querySelector('.js-dropdown__body');
    this.selectionText = elem.querySelector('.js-dropdown__selection-text');
    this.menu = elem.querySelector('.js-dropdown__menu');
    this.dropdownCounters = elem.querySelectorAll('.js-dropdown__counter');
  }

  _onClick(event) {
    const action = event.target.dataset.ddAction;
    if (action) {
      this.action = action;
      this[action](event);
    }
  }

  _initListeners() {
    const DropdownTop = this.elem.querySelector('.js-dropdown__body-top');
    DropdownTop.addEventListener('keypress', (e) => {
      this._handleDropdownTopKeyPress(e);
    });
  }

  _initDecrementButtonsColors() {
    const dropdownControls = this.menu.querySelectorAll('.js-dropdown__item-controls');
    dropdownControls.forEach((control) => {
      const counter = control.querySelector('.js-dropdown__counter');
      if (Number(counter.value) > 0) {
        const buttonDecrement = control.querySelector('.js-dropdown__button-decrement');
        buttonDecrement.classList.add('dark');
      }
    });
  }

  _setCounterValue(act, event) {
    const itemControls = event.target.closest('.js-dropdown__item-controls');
    const decrementButton = itemControls.querySelector('.js-dropdown__button-decrement');
    const counter = itemControls.querySelector('.js-dropdown__counter');
    const counterValue = Number(counter.value);

    if (act === 'increment') {
      counter.value = counterValue + 1;
      decrementButton.classList.add('dark');
    }

    if (act === 'decrement') {
      if (counter.value !== '0') {
        counter.value = counterValue - 1;
        if (counter.value === '0') {
          decrementButton.classList.remove('dark');
        }
      }
    }
  }

  _handleDropdownTopKeyPress(e) {
    if (e.code === 'Enter') {
      this.showHide();
    }
  }
}
