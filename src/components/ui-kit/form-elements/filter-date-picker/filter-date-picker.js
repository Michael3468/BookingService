import './filter-date-picker.scss';
import 'air-datepicker/dist/js/datepicker.min.js';


$('#filter-date-picker').datepicker({
  range: true,
  multipleDatesSeparator: ' - ',
  clearButton: true,
  navTitles: {
    days: 'MM <i>yyyy</i>',
  },
  dateFormat: 'dd M',

  onSelect: function (fd) {
    $('.filter-date-dropdown__input').val(fd.toLowerCase());
  },

})

$(function(){

  addApplyButton();

  let applyButton = $('[data-action="apply"]');
  applyButton.on('click', hideFilterDatePicker);

});


function addApplyButton() {
  let isPickerButtons = $('#filter-date-picker').find('.datepicker--buttons');
  if (isPickerButtons) {
    isPickerButtons.append('<span class="datepicker--button" data-action="apply">Применить</span>');
  }
}

function hideFilterDatePicker() {
  let isDatePicker = $('#filter-date-picker').offsetParent();
  isDatePicker.toggle('dropdown-date__date-picker_hidden');
}
