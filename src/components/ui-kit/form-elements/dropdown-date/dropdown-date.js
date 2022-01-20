import './dropdown-date.scss';
import '../../cards/date-picker/date-picker';

function showHideDatePicker(event) {
  if (!event.target.className.includes('dropdown-date__input')) return;

  const ddDate = event.target.closest('.dropdown-date');
  const dropdownDate = ddDate.nextSibling;
  const ddDateStatus = dropdownDate.style.display;
  if (ddDateStatus === 'block') {
    dropdownDate.style.display = 'none';
  } else {
    dropdownDate.style.display = 'block';
  }
}

function handleDropdownDateBlockKeyPress(e) {
  if (e.code === 'Enter') {
    showHideDatePicker(e);
  }
}

(() => {
  const DropdownDateBlock = document.querySelector('.dropdown-date');
  DropdownDateBlock.addEventListener('click', showHideDatePicker);
  DropdownDateBlock.addEventListener('keypress', (e) => {
    handleDropdownDateBlockKeyPress(e);
  });
})();
