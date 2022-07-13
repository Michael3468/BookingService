/* eslint-disable no-undef */
import 'air-datepicker/dist/js/datepicker.min';

import './filter-date-picker.scss';

const $filterDatePicker = $('.js-filter-date-picker').datepicker({
  range: true,
  multipleDatesSeparator: ' - ',
  clearButton: true,
  navTitles: {
    days: 'MM <i>yyyy</i>',
  },
  dateFormat: 'dd M',
  minDate: new Date(),

  onSelect: (fd) => {
    $('.js-filter-date-dropdown__input').val(fd.toLowerCase());
  },
});

class FilterDatePicker {
  constructor() {
    this.elem = $filterDatePicker;

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

  _hideFilterDatePicker(event) {
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
        !e.target.closest('.js-filter-date-dropdown')
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
    $applyButton.on('click', this._hideFilterDatePicker);
  }
}

export default FilterDatePicker;
