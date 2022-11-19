/* eslint-disable no-undef */
import 'air-datepicker/dist/js/datepicker.min';

class DatePicker {
  constructor({ className }) {
    this.elem = this._initDatePicker(className);

    this._addApplyButton();
    this._addListeners();
  }

  _initDatePicker(className) {
    const $datePicker = $(className).datepicker({
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

    return $datePicker;
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
    document.addEventListener('click', (event) => {
      // close js-dropdown-date__date-picker
      if (
        !event.target.closest('.js-dropdown-date')
        && !event.target.closest('.js-dropdown-date__date-picker')
        && !event.target.classList.contains('datepicker--cell')
        && !event.target.classList.contains('datepicker--nav-title')
        && !event.target.classList.contains('datepicker--nav-action')
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
