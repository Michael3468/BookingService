/* eslint-disable no-undef */
import 'air-datepicker/dist/js/datepicker.min';

import './date-picker.scss';

$('.js-date-picker').datepicker({
  range: true,
  multipleDatesSeparator: ' - ',
  clearButton: true,
  navTitles: {
    days: 'MM <i>yyyy</i>',
  },
  minDate: new Date(),

  onSelect(fd) {
    $('.js-start-date').val(fd.split(' - ')[0]);
    $('.js-end-date').val(fd.split(' - ')[1]);
  },
});

function addApplyButton() {
  const $isPickerButtons = $('.js-date-picker').find('.datepicker--buttons');
  if ($isPickerButtons) {
    $isPickerButtons.append(
      '<span class = "datepicker--button" data-action = "apply">Применить</span>',
    );
  }
}

function hideDatePicker(event) {
  const $picker = $(event.target).closest('.js-dropdown-date__date-picker');
  const $pickerStatus = $picker.css('display');
  if ($pickerStatus === 'block') {
    $picker.css('display', 'none');
  }
}

$(() => {
  addApplyButton();

  const $applyButton = $('[data-action="apply"]');
  $applyButton.on('click', hideDatePicker);
});

document.addEventListener('click', (e) => {
  // close dropdown menu
  if (!e.target.closest('.js-dropdown__body')) {
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
    const dropdownDate = document.querySelectorAll(
      '.js-dropdown-date__date-picker',
    );
    dropdownDate.forEach((item) => {
      item.style.display = 'none';
    });
  }
});
