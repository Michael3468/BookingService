import './dropdown-guests.scss';


addClickListenersToClasses('dropdown-guests-block', showHideDropdownMenu);
addClickListenersToClasses('button-increment', buttonIncrementClick);
addClickListenersToClasses('button-decrement', buttonDecrementClick);


function buttonDecrementClick() {

  let buttonDecrement = this;
  let counter = this.nextElementSibling;

  if ( +(counter.innerText) > 0 ) {
    counter.innerText = +(counter.innerText) - 1;
    if ( +(counter.innerText) == 0 ) {
      buttonDecrement.classList.remove('button-decrement_dark');
    }
  }

}


function buttonIncrementClick() {

  let counter = this.previousElementSibling;
  counter.innerText = +(counter.innerText) + 1;

  let buttonDecrement = counter.previousElementSibling;
  buttonDecrement.classList.add('button-decrement_dark');

}


function addClickListenersToClasses(className, functionName) {
  let classNamesArr = document.getElementsByClassName(className);

  Array.from(classNamesArr).forEach(element => {
    element.addEventListener("click", functionName, false);
  });

}


function showHideDropdownMenu() {

  let dropdown = this;
  let menu = this.querySelector('.dropdown-guests__menu');
  let cleanButton = this.querySelector('.dropdown-guests-button_clean');

  menu.classList.toggle('visibility-hidden');
  if ( menu.classList.contains('visibility-hidden') ) {
    dropdown.classList.remove('menu-open');
    cleanButton.classList.remove('dropdown-guests-button_clean_show');
  } else {
    dropdown.classList.add('menu-open');
    cleanButton.classList.add('dropdown-guests-button_clean_show');
  }

}

