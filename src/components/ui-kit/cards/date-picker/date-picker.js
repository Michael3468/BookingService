import './date-picker.scss';
import 'air-datepicker/dist/js/datepicker.min.js';


$('#date-picker').datepicker({
  range: true,
  multipleDatesSeparator: ' - ',
  clearButton: true,
  navTitles: {
    days: 'MM <i>yyyy</i>',
  },

})

$(function(){

  $(function addApplyButton() {
    let pickerButtons = $('#date-picker').find('.datepicker--buttons');
    pickerButtons.append('<span class="datepicker--button" data-action="apply">Применить</span>');
  });

  addApplyButton();

});
