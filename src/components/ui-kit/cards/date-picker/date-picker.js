import './date-picker.scss';
import 'air-datepicker/dist/js/datepicker.min';

$('.date-picker').datepicker({
  range: true,
  multipleDatesSeparator: ' - ',
  clearButton: true,
  navTitles: {
    days: 'MM <i>yyyy</i>',
  },

  onSelect: function (fd) {
    $('#startDate').val(fd.split(' - ')[0]);
    $('#endDate').val(fd.split(' - ')[1]);
  },
});

function addApplyButton() {
  const $isPickerButtons = $('.date-picker').find('.datepicker--buttons');
  if ($isPickerButtons) {
    $isPickerButtons.append(
      '<span class="datepicker--button" data-action="apply">Применить</span>',
    );
  }
}

function hideDatePicker(event) {
  const $picker = $(event.target).closest('.dropdown-date__date-picker');
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
