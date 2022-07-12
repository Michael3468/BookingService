/* eslint-disable no-undef */
import 'air-datepicker/dist/js/datepicker.min';

import './date-picker.scss';

const $datePicker = $('.js-date-picker').datepicker({
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

class DatePicker {
  constructor() {
    this.elem = $datePicker;

    this._addApplyButton();
    this._addListeners();
  }

  _addApplyButton() {
    const $isPickerButtons = this.elem.find('.datepicker--buttons');
    if ($isPickerButtons) {
      $isPickerButtons.append(
        '<span class = "datepicker--button" data-action = "apply">Применить</span>',
      );
    }
  }

  _hideDatePicker(event) {
    const $picker = $(event.target).closest('.js-dropdown-date__date-picker');
    const $pickerStatus = $picker.css('display');
    if ($pickerStatus === 'block') {
      $picker.css('display', 'none');
    }
  }

  _addListeners() {
    document.addEventListener('click', (e) => {
      // close js-dropdown-date__date-picker
      if (
        !e.target.closest('.js-dropdown-date')
        && !e.target.closest('.js-dropdown-date__date-picker')
        && !e.target.classList.contains('datepicker--cell')
        && !e.target.classList.contains('datepicker--nav-title')
        && !e.target.classList.contains('datepicker--nav-action')
      ) {
        const dropdownDate = document.querySelectorAll(
          '.js-dropdown-date__date-picker',
        );
        dropdownDate.forEach((item) => {
          const ddDate = item;
          ddDate.style.display = 'none';
        });
      }
    });

    const $applyButton = $('[data-action="apply"]');
    $applyButton.on('click', this._hideDatePicker);
  }
}

export default DatePicker;
