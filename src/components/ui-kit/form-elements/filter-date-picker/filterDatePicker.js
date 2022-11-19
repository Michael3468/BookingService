import DatePicker from '../../../../libs/air-datepicker';

import './filter-date-picker.scss';

const datePickerProps = {
  className: '.js-filter-date-picker',
  dateFormat: 'dd M',
  filterDatePicker: true,
};

new DatePicker(datePickerProps);
