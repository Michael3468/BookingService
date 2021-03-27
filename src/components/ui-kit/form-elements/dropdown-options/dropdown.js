export class Dropdown {

  constructor(elem) {
    this._elem = elem;
    this._ddBlock = elem.querySelector('.js-dropdown-options-block');
    this._menu = elem.querySelector('.js-dropdown-options-menu');

    elem.onclick = this.onClick.bind(this);
  }

  onClick(event) {
    let action = event.target.dataset.ddAction;
    if (action) {
      this._action = action;
      this[action](event);
    }
  }

  showHide() {
    this._menu.hidden = !this._menu.hidden;
    this._ddBlock.classList.toggle('menu-open');
  }

  increment(event) {
    setCounterValue(this._action, event);
  }

  decrement(event) {
    setCounterValue(this._action, event);
  }

}

function setCounterValue(act, event) {
  const itemControls = event.target.closest('.js-dropdown-options__item-controls');
  const decrementButton = itemControls.querySelector('.js-dropdown-options__button-decrement');
  const counter = itemControls.querySelector('.js-dropdown-options__counter');
  let counterValue = Number(counter.innerText);

  if (act == 'increment') {
    counter.innerText = ++counterValue;
    decrementButton.classList.add('dark');
  }

  if (act == 'decrement') {
    if (counter.innerText != '0') {
      counter.innerText = --counterValue;
      if (counter.innerText == '0') {
        decrementButton.classList.remove('dark');
      }
    }
  }
}
