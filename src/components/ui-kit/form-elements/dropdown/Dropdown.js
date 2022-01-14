export default class Dropdown {
  constructor(elem) {
    if (elem === null) return;
    this.elem = elem;
    this.ddBlock = elem.querySelector('.js-dropdown__block');
    this.selectionText = elem.querySelector('.js-dropdown__selection-text');
    this.menu = elem.querySelector('.js-dropdown__menu');
    this.dropdownCounters = elem.querySelectorAll('.js-dropdown__counter');
    this.elem.onclick = this.onClick.bind(this);
    this.initListeners();
    this.initDecrementButtonsColors();
  }

  initListeners() {
    const blockTop = this.elem.querySelector('.js-dropdown__block_top');
    blockTop.addEventListener('keypress', (e) => {
      if (e.code === 'Enter') {
        this.showHide();
      }
    });
  }

  initDecrementButtonsColors() {
    const dropdownControls = this.menu.querySelectorAll('.js-dropdown__item-controls');
    dropdownControls.forEach((control) => {
      const counter = control.querySelector('.js-dropdown__counter');
      if (Number(counter.value) > 0) {
        const buttonDecrement = control.querySelector('.js-dropdown__button-decrement');
        buttonDecrement.classList.add('dark');
      }
    });
  }

  onClick(event) {
    const action = event.target.dataset.ddAction;
    if (action) {
      this.action = action;
      this[action](event);
    }
  }

  showHide() {
    this.menu.hidden = !this.menu.hidden;
    this.ddBlock.classList.toggle('menu-open');
  }

  increment(event) {
    this.setCounterValue(this.action, event);
  }

  decrement(event) {
    this.setCounterValue(this.action, event);
  }

  // eslint-disable-next-line class-methods-use-this
  setCounterValue(act, event) {
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
}
