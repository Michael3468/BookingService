import './headers.scss';

import './header_logo/header_logo';
import '../../form-elements/buttons/buttons';

/* dropdown menu */
function getDropdownMenu(PointerEvent) {
  const { currentTarget } = PointerEvent;
  return currentTarget.querySelector('.js-header__nav-dropdown-content');
}

function handleHeaderDropdownClick(PointerEvent) {
  getDropdownMenu(PointerEvent).classList.toggle('hidden');
}

function handleHeaderDropdownKeyPress(e) {
  if (e.code === 'Enter') {
    handleHeaderDropdownClick(e);
  }
}

function handleHeaderDropdownMouseLeave(PointerEvent) {
  getDropdownMenu(PointerEvent).classList.add('hidden');
}

function headersDropdownShowHide() {
  const dropdowns = document.querySelectorAll('.js-header__nav-dropdown');

  if (dropdowns !== undefined) {
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener('click', handleHeaderDropdownClick);
      dropdown.addEventListener('keypress', (e) => {
        handleHeaderDropdownKeyPress(e);
      });

      dropdown.addEventListener('mouseleave', handleHeaderDropdownMouseLeave);
    });
  }
}

document.addEventListener('DOMContentLoaded', headersDropdownShowHide);
/* dropdown menu end */

/* header-burger expand menu */
const headerBurgers = document.querySelectorAll('.js-header-burger');
const headerNavs = document.querySelectorAll('.js-header__nav');

function toggleHeaderNav() {
  headerNavs[0].classList.toggle('hidden');
}

function addRemoveHiddenClass(element) {
  if (window.innerWidth < 1025) {
    element.forEach((elem) => elem.classList.add('hidden'));
  } else {
    element.forEach((elem) => elem.classList.remove('hidden'));
  }
}

headerBurgers.forEach((burger) => burger.addEventListener('click', toggleHeaderNav));

document.addEventListener('DOMContentLoaded', () => {
  addRemoveHiddenClass(headerNavs);
});

window.addEventListener('resize', () => {
  addRemoveHiddenClass(headerNavs);
});
/* header-burger expand menu end */
