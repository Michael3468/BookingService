import '../filter-date-picker/filter-date-picker';

import './filter-date-dropdown.scss';

function showHideDatePicker(event) {
  const filterDateDropdown = event.target.closest('.js-filter-date-dropdown')
    .querySelector('.js-dropdown-date__date-picker');
  const filterStatus = filterDateDropdown.style.display;

  if (filterStatus === 'block') {
    filterDateDropdown.style.display = 'none';
  } else {
    filterDateDropdown.style.display = 'block';
  }
}

function handleFilterDateDropdownKeyPress(e) {
  if (e.code === 'Enter') {
    showHideDatePicker(e);
  }
}

(() => {
  const filterDateDropdown = document.querySelector('.js-filter-date-dropdown__input');
  filterDateDropdown.addEventListener('click', showHideDatePicker);
  filterDateDropdown.addEventListener('keypress', (e) => {
    handleFilterDateDropdownKeyPress(e);
  });
})();
