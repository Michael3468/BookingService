import './filter-date-dropdown.scss';
import '../../form-elements/filter-date-picker/filter-date-picker.js';


$(function() {

  let $isFilterDateDropdown = $('.filter-date-dropdown__input');
  if ( $isFilterDateDropdown ) {
    $isFilterDateDropdown.on('click', showHideDatePicker);
  }

});

function showHideDatePicker(){
  let $filterDateDropdown = $(this.offsetParent.nextElementSibling);
  $filterDateDropdown.toggle('.dropdown-date__date-picker_hidden');
};