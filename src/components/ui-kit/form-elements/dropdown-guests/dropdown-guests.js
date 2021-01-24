import './dropdown-guests.scss';


addClickListenersToClasses('dropdown-guests__block', showHideDropdownMenu);
addClickListenersToClasses('dropdown-guests__button-increment', buttonIncrementClick);
addClickListenersToClasses('dropdown-guests__button-decrement', buttonDecrementClick);
addClickListenersToClasses('dropdown-guests__button_clean', cleanButtonClick);


function cleanButtonClick(event) {

  const menu = this.offsetParent;
  const menuCounters = menu.querySelectorAll('.dropdown-guests__counter');
  const decrementButtons = menu.querySelectorAll('.dropdown-guests__button-decrement');

  menuCounters.forEach(element => {
    element.innerText = 0;
  });
  decrementButtons.forEach(element => {
    element.classList.remove('dropdown-guests__button-decrement_dark');
  });

  this.classList.remove('dropdown-guests__button_clean_show');

  const dropdownText = menu.previousElementSibling.firstChild;
  dropdownText.innerText = 'Сколько гостей';
  
  event.stopPropagation();

}


function buttonDecrementClick(event) {

  const buttonDecrement = this;
  const counter = this.nextElementSibling;

  if ( +(counter.innerText) > 0 ) {
    counter.innerText = +(counter.innerText) - 1;
    if ( +(counter.innerText) == 0 ) {
      buttonDecrement.classList.remove('dropdown-guests__button-decrement_dark');
    }
  }

  const dropdownMenu = this.offsetParent;
  changeDropdownText('dropdown-guests', dropdownMenu);
  showHideCleanButton(dropdownMenu);

  event.stopPropagation();

}


function buttonIncrementClick(event) {

  const counter = this.previousElementSibling;
  const dropdownMenu = this.offsetParent;
  let countersSum = getCountersValuesSum(dropdownMenu);
  const maxGuests = 10;
  const buttonDecrement = counter.previousElementSibling;

  //- TODO do not inc last counter if others == 0 when it is guests dropdown
  if ( countersSum < maxGuests ) {
    counter.innerText = +(counter.innerText) + 1;
    buttonDecrement.classList.add('dropdown-guests__button-decrement_dark');
  }

  //- TODO add change dropdownText on click for dropdown-options
  changeDropdownText('dropdown-guests', dropdownMenu);
  showHideCleanButton(dropdownMenu);

  event.stopPropagation();

}

//-
function changeDropdownText(dropdownType, dropdownMenu) {

  if ( dropdownType == 'dropdown-guests' ) {

    //- change dropdown-guests text
    let dropdownText = dropdownMenu.previousElementSibling.firstChild;
    const counters = dropdownMenu.querySelectorAll('.dropdown-guests__counter');
    const guestsNum = Number(counters[0].innerText) + Number(counters[1].innerText);
    const babiesNum = Number( counters[2].innerText );

    let guestsText = 'гостей';
    switch (guestsNum) {
      //- case number depends on maxGuests in buttonIncrementClick function
      case 1:
        guestsText = 'гость';
        break;
      case 2:
      case 3:
      case 4:
        guestsText = 'гостя';
        break;
    }

    let babiesText = 'младенцев';
    switch (babiesNum) {
      case 1:
        babiesText = 'младенец';
        break;
      case 2:
      case 3:
      case 4:
        babiesText = 'младенца';
        break;
    }

    if ( guestsNum > 0 && babiesNum > 0) {
      dropdownText.innerText = `${guestsNum} ${guestsText}, ${babiesNum} ${babiesText}`;
    } else if ( guestsNum == 0 && babiesNum == 0 ) {
      dropdownText.innerText = `Сколько гостей`;
    } else if ( guestsNum >= 0 ) {
      dropdownText.innerText = `${guestsNum} ${guestsText}`;
    }

    //- change dropdown-guests text end
  } //- if ( dropdownType == 'dropdown-guests' ) end
  else if ( dropdownType == 'dropdown-options' ) {
    //- change dropdown-options text
    //- code
    //- change dropdown-options text end
  }
}
//-


function addClickListenersToClasses(className, functionName) {
  const classNamesArr = document.getElementsByClassName(className);

  Array.from(classNamesArr).forEach(element => {
    element.addEventListener("click", functionName, false);
  });

}


function showHideDropdownMenu() {

  const dropdown = this;
  const dropdownMenu = this.querySelector('.dropdown-guests__menu');
  const cleanButton = this.querySelector('.dropdown-guests__button_clean');

  dropdownMenu.classList.toggle('visibility-hidden');
  if ( dropdownMenu.classList.contains('visibility-hidden') ) {
    //- hide menu
    dropdown.classList.remove('menu-open');
    cleanButton.classList.remove('dropdown-guests__button_clean_show');
  } else {
    //- show menu
    dropdown.classList.add('menu-open');

    showHideCleanButton(dropdownMenu);

  }

}


function showHideCleanButton(dropdownMenu) {

  let countersSum = getCountersValuesSum(dropdownMenu);

  const cleanButton = dropdownMenu.querySelector('.dropdown-guests__button_clean');
  if ( countersSum > 0 ) {
    //- show clean button
    cleanButton.classList.add('dropdown-guests__button_clean_show');
  } else {
    //- hide clean button
    cleanButton.classList.remove('dropdown-guests__button_clean_show');
  }

}


function getCountersValuesSum(dropdownMenu) {

  const counters = dropdownMenu.querySelectorAll('.dropdown-guests__counter');

  let countersValuesSum = 0;
  counters.forEach(element => {
    countersValuesSum += +(element.innerText);
  });

  return countersValuesSum;

}