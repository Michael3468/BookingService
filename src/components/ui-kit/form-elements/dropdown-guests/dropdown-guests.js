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

  //- TODO event.target change to this
  const dropdown = event.target.offsetParent;
  showHideCleanButton(dropdown);

  event.stopPropagation();

}


function buttonIncrementClick(event) {

  const counter = this.previousElementSibling;
  const dropdownMenu = this.offsetParent;
  let countersSum = getCountersValuesSum(dropdownMenu);
  const maxGuests = 10;
  const buttonDecrement = counter.previousElementSibling;

  if ( countersSum < maxGuests ) {
    counter.innerText = +(counter.innerText) + 1;
    buttonDecrement.classList.add('button-decrement_dark');
  }

  //- TODO add change dropdownText on click
  const dropdownText = dropdownMenu.previousElementSibling.firstChild;
  showHideCleanButton(dropdownMenu);

  event.stopPropagation();

}


function addClickListenersToClasses(className, functionName) {
  const classNamesArr = document.getElementsByClassName(className);

  Array.from(classNamesArr).forEach(element => {
    element.addEventListener("click", functionName, false);
  });

}


//- TODO del event
function showHideDropdownMenu(event) {

  const dropdown = this;
  const dropdownMenu = this.querySelector('.dropdown-guests__menu');
  const cleanButton = this.querySelector('.dropdown-guests-button_clean');

  dropdownMenu.classList.toggle('visibility-hidden');
  if ( dropdownMenu.classList.contains('visibility-hidden') ) {
    //- hide menu
    dropdown.classList.remove('menu-open');
    cleanButton.classList.remove('dropdown-guests-button_clean_show');
  } else {
    //- show menu
    dropdown.classList.add('menu-open');

    showHideCleanButton(dropdownMenu);

  }

}


function showHideCleanButton(dropdownMenu) {

  let countersSum = getCountersValuesSum(dropdownMenu);

  const cleanButton = dropdownMenu.querySelector('.dropdown-guests-button_clean');
  if ( countersSum > 0 ) {
    //- show clean button
    cleanButton.classList.add('dropdown-guests-button_clean_show');
  } else {
    //- hide clean button
    cleanButton.classList.remove('dropdown-guests-button_clean_show');
  }

}


function getCountersValuesSum(dropdownMenu) {

  const counters = dropdownMenu.querySelectorAll('.counter');

  let countersValuesSum = 0;
  counters.forEach(element => {
    countersValuesSum += +(element.innerText);
  });

  return countersValuesSum;

}