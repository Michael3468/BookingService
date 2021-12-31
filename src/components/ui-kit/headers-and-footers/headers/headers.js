import './headers.scss';

import './header_logo/header_logo';
import '../../form-elements/buttons/buttons';

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
