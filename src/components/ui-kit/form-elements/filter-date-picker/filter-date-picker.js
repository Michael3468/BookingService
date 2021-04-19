/* eslint-disable no-undef */
import './filter-date-picker.scss';
import 'air-datepicker/dist/js/datepicker.min';

$('#filter-date-picker').datepicker({
  range: true,
  multipleDatesSeparator: ' - ',
  clearButton: true,
  navTitles: {
    days: 'MM <i>yyyy</i>',
  },
  dateFormat: 'dd M',

  onSelect: (fd) => {
    $('.filter-date-dropdown__input').val(fd.toLowerCase());
  },
});

function addApplyButton() {
  const $isPickerButtons = $('#filter-date-picker').find('.datepicker--buttons');
  if ($isPickerButtons) {
    $isPickerButtons.append('<span class="datepicker--button" data-action="apply">Применить</span>');
  }
}

function hideFilterDatePicker(event) {
  const $picker = $(event.target).closest('.dropdown-date__date-picker');
  const $pickerStatus = $picker.css('display');
  if ($pickerStatus === 'block') {
    $picker.css('display', 'none');
  }
}

(() => {
  addApplyButton();

  const $applyButton = $('[data-action="apply"]');
  $applyButton.on('click', hideFilterDatePicker);
})();
