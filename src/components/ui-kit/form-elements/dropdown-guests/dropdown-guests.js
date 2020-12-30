import './dropdown-guests.scss';


let isDropdownGuests = document.getElementsByClassName('dropdown-guests-block');

Array.from(isDropdownGuests).forEach(element => {
  element.addEventListener("click", showHideDropdownMenu, false);
});


function showHideDropdownMenu(){

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

