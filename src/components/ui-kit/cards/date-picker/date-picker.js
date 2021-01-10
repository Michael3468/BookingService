import './date-picker.scss';
import 'air-datepicker/dist/js/datepicker.min.js';


$('#date-picker').datepicker({
  range: true,
  multipleDatesSeparator: ' - ',
  clearButton: true,
  navTitles: {
    days: 'MM <i>yyyy</i>',
  },

  onSelect: function (fd, d, picker) {
    $("#startDate").val(fd.split(" - ")[0]);
    $("#endDate").val(fd.split(" - ")[1]);
  },

})

$(function(){

  addApplyButton();

  let $applyButton = $('[data-action="apply"]');
  $applyButton.on('click', hideDatePicker);

});


function addApplyButton() {
  let $isPickerButtons = $('#date-picker').find('.datepicker--buttons');
  if ($isPickerButtons) {
    $isPickerButtons.append('<span class="datepicker--button" data-action="apply">Применить</span>');
  }
};

function hideDatePicker(){
  let $isDatePicker = $('.dropdown-date__date-picker');
  $isDatePicker.toggle('dropdown-date__date-picker_hidden');
};
