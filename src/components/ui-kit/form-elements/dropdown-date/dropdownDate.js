import '../../cards/date-picker/datePicker';

import './dropdown-date.scss';

function showHideDatePicker(event) {
  if (!event.target.className.includes('dropdown-date__input')) return;

  const ddDate = event.target.closest('.js-dropdown-date');
  const dropdownDate = ddDate.nextSibling;
  const ddDateStatus = dropdownDate.style.display;
  if (ddDateStatus === 'block') {
    dropdownDate.style.display = 'none';
  } else {
    dropdownDate.style.display = 'block';
  }
}

function handleDropdownDateBlockKeyPress(e) {
  e.preventDefault();
  if (e.code === 'Enter') {
    showHideDatePicker(e);
  }
}

(() => {
  const DropdownDateBlock = document.querySelector('.js-dropdown-date');
  DropdownDateBlock.addEventListener('click', showHideDatePicker);
  DropdownDateBlock.addEventListener('keypress', (e) => {
    handleDropdownDateBlockKeyPress(e);
  });
})();
