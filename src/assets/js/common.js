document.addEventListener('click', (e) => {
  // close dropdown menu
  if (!e.target.closest('.js-dropdown__block')) {
    const menus = document.querySelectorAll('.js-dropdown__menu');
    menus.forEach((menu) => {
      menu.classList.add('dropdown__menu_hidden');
    });
  }

  // close js-dropdown-date__date-picker
  if (
    !e.target.closest('.js-dropdown-date')
    && !e.target.closest('.js-filter-date-dropdown')
    && !e.target.closest('.js-dropdown-date__date-picker')
    && !e.target.classList.contains('datepicker--cell')
    && !e.target.classList.contains('datepicker--nav-title')
    && !e.target.classList.contains('datepicker--nav-action')
  ) {
    const dropdownDate = document.querySelectorAll('.js-dropdown-date__date-picker');
    dropdownDate.forEach((item) => {
      item.style.display = 'none';
    });
  }
});
