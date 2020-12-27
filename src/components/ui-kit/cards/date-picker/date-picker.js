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

  $(function addApplyButton() {
    let isPickerButtons = $('#date-picker').find('.datepicker--buttons');
    if (isPickerButtons) {
      isPickerButtons.append('<span class="datepicker--button" data-action="apply">Применить</span>');
    }
  });
  addApplyButton();

});
