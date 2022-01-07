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

function handleHeaderDropdownMouseLeave(PointerEvent) {
  getDropdownMenu(PointerEvent).classList.add('hidden');
}

function headersDropdownShowHide() {
  const dropdowns = document.querySelectorAll('.js-header__nav-dropdown');

  if (dropdowns !== undefined) {
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener('click', handleHeaderDropdownClick);
      dropdown.addEventListener('mouseleave', handleHeaderDropdownMouseLeave);
    });
  }
}

document.addEventListener('DOMContentLoaded', headersDropdownShowHide);
/* dropdown menu end */

/* header-burger expand menu */
const headerBurger = document.querySelector('.js-header-burger');
const headerNav = document.querySelector('.js-header__nav');

function toggleHeaderNav() {
  headerNav.classList.toggle('hidden');
}

function addRemoveHiddenClass(element) {
  if (window.innerWidth < 1025) {
    element.classList.add('hidden');
  } else {
    element.classList.remove('hidden');
  }
}

headerBurger.addEventListener('click', toggleHeaderNav);

document.addEventListener('DOMContentLoaded', () => {
  addRemoveHiddenClass(headerNav);
});
window.addEventListener('resize', () => {
  addRemoveHiddenClass(headerNav);
});
/* header-burger expand menu end */
