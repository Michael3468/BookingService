import './like-button.scss';


$(function(){

  $('.like-button__input').on('click', function(event) {

    var element_id = event.target.id;

    toggleClasses(element_id);
    changeCounter(element_id);

  });

});


function toggleClasses(elementId) {
  $('#icon_'+elementId).toggleClass('js-icon-checked-status');
  $('#content_'+elementId).toggleClass('js-content-checked-status');
  $('#container_'+elementId).toggleClass('js-container-checked-status');
}

function changeCounter(elementId) {
  var counterId = '#content_'+elementId;
  var counterValue = Number( $(counterId).text() );

  if ( $(counterId).hasClass('js-content-checked-status') ) {
    $(counterId).text(counterValue+1);
  } else {
    $(counterId).text(counterValue-1);
  };
}
