import './dropdown-date.scss';
import '../../cards/date-picker/date-picker.js';

$(function() {

  let isDropdownDateBlock = $('.dropdown-date__input-block');
  if( isDropdownDateBlock ) {
    isDropdownDateBlock.on('click', function(){
      $('.dropdown-date__date-picker').toggle('.dropdown-date__date-picker_hidden');
    })
  }

});