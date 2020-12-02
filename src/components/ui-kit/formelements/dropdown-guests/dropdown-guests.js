import './dropdown-guests.scss';
// import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

// $(function() {

//   let options = {

//     maxItems: 9,
    
//     setSelectionText: (itemCount, totalItems) => { 
//       if (totalItems == 0) {
//         return 'Сколько гостей';
//       } else {

//         let guests;

//         switch (totalItems) {
//           case 1:
//             guests = 'гость';
//             break;
//           case 2:
//           case 3:
//           case 4:
//             guests = 'гостя';
//             break;
//           case 5:
//           case 6:
//           case 7:
//           case 8:
//           case 9:
//           case 10:
//             guests = 'гостей';
//             break;
//         }
//         return `${totalItems} ${guests} ${itemCount}`;
//       }

//       //- TODO add babies
//     },

//     onChange: (id, count, totalItems) => {
//       var elem = $('.iqdropdown');
//       var targetItem = elem.find(`[data-id='${id}']`);

//       updateEmptyClass(targetItem, count);
//       toggleCleanButtonVisibility(targetItem, totalItems);
//     },

//   };
  
//   $('.iqdropdown').iqDropdown(options);

//   $('.iqdropdown-button_clean').on('click', function(element, count) {
//     var elem = element.target.id;
//     var idPostfix = elem.slice(-2);
//     var dropdownId = '#iqdropdown'+idPostfix;

//     var counters = $(dropdownId).find('.counter'); 
//     // for (var item of counters) {
//     //   console.log(counters[0]);
//     // counters[0].val(0);
//     //   // item.text('324');
//     // };
//     $.each(counters, function(key, value){
//       console.log(key, value);
//       $(value).val('0');
//       // $(value).text('0');
//     });
//     count = 0;
//     // $(dropdownId).find('.counter').text('00');
//     $(dropdownId).find('.iqdropdown-selection').text('Сколько гостей');
//     $(dropdownId).find('.iqdropdown-selection').val(0);

//   });
  
// });




// function toggleCleanButtonVisibility(targetItem, totalItems) {

//   //- get emement by Id & get its idPostfix

//   //- add idPostfix to var cleanButton (where '-2' now)
//   var cleanButton = $('#iqdropdown-button_clean-2');
  
//   if ( totalItems == 0 ) {
//     cleanButton.addClass('display-none');
//   } else {
//     cleanButton.removeClass('display-none');
//   }
// }


// function updateEmptyClass(targetItem, count) {
//   var decButton = $(targetItem).find('.button-decrement');

//   if (count == 0 ) {
//     decButton.removeClass('empty');
//   } else {
//     decButton.addClass('empty');
//   }
// }