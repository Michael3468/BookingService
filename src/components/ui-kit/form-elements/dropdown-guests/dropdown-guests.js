import './dropdown-guests.scss';


addClickListenersToClasses('dropdown-guests-block', showHideDropdownMenu);
addClickListenersToClasses('button-increment', buttonIncrementClick);
addClickListenersToClasses('button-decrement', buttonDecrementClick);
addClickListenersToClasses('dropdown-guests-button_clean', cleanButtonClick);


function cleanButtonClick(event) {

  const menu = this.offsetParent;
  const menuCounters = menu.querySelectorAll('.counter');
  const decrementButtons = menu.querySelectorAll('.button-decrement');

  menuCounters.forEach(element => {
    element.innerText = 0;
  });
  decrementButtons.forEach(element => {
    element.classList.remove('button-decrement_dark');
  });

  this.classList.remove('dropdown-guests-button_clean_show');
  event.stopPropagation();

}


function buttonDecrementClick(event) {

  const buttonDecrement = this;
  const counter = this.nextElementSibling;

  if ( +(counter.innerText) > 0 ) {
    counter.innerText = +(counter.innerText) - 1;
    if ( +(counter.innerText) == 0 ) {
      buttonDecrement.classList.remove('button-decrement_dark');
    }
  }

  const dropdown = event.target.offsetParent;
  showHideCleanButton(dropdown);

  event.stopPropagation();

}


function buttonIncrementClick(event) {

  const counter = this.previousElementSibling;
  counter.innerText = +(counter.innerText) + 1;

  const buttonDecrement = counter.previousElementSibling;
  buttonDecrement.classList.add('button-decrement_dark');

  const dropdown = event.target.offsetParent;
  showHideCleanButton(dropdown);

  event.stopPropagation();

}


function addClickListenersToClasses(className, functionName) {
  const classNamesArr = document.getElementsByClassName(className);

  Array.from(classNamesArr).forEach(element => {
    element.addEventListener("click", functionName, false);
  });

}


function showHideDropdownMenu(event) {

  const dropdown = this;
  const menu = this.querySelector('.dropdown-guests__menu');
  const cleanButton = this.querySelector('.dropdown-guests-button_clean');

  menu.classList.toggle('visibility-hidden');
  if ( menu.classList.contains('visibility-hidden') ) {
    //- hide menu
    dropdown.classList.remove('menu-open');
    cleanButton.classList.remove('dropdown-guests-button_clean_show');
  } else {
    //- show menu
    dropdown.classList.add('menu-open');

    showHideCleanButton(dropdown);

  }

}


function showHideCleanButton(dropdown) {

  const counters = dropdown.querySelectorAll('.counter');

  let countersValSum = 0;
  counters.forEach(element => {
    countersValSum += +(element.innerText);
  });

  const cleanButton = dropdown.querySelector('.dropdown-guests-button_clean');
  if ( countersValSum > 0 ) {
    //- show clean button
    cleanButton.classList.add('dropdown-guests-button_clean_show');
  } else {
    //- hide clean button
    cleanButton.classList.remove('dropdown-guests-button_clean_show');
  }

}
