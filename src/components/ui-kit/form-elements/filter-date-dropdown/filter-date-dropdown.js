import './filter-date-dropdown.scss';
import '../filter-date-picker/filter-date-picker';

function showHideDatePicker(event) {
  const filterDateDropdown = event.target.closest('.filter-date-dropdown')
    .querySelector('.dropdown-date__date-picker');
  const filterStatus = filterDateDropdown.style.display;

  if (filterStatus === 'block') {
    filterDateDropdown.style.display = 'none';
  } else {
    filterDateDropdown.style.display = 'block';
  }
}

(() => {
  const isFilterDateDropdown = document.querySelector('.filter-date-dropdown__input');
  isFilterDateDropdown.addEventListener('click', showHideDatePicker);
})();
