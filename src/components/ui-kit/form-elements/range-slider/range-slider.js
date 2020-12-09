import './range-slider.scss';
import 'ion-rangeslider/js/ion.rangeSlider.min';

$(function() {

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 15800,
    from: 5000,
    to: 10000
  });

  $(".js-range-slider").on('change', function(){
    var $valueFrom = $('.irs-from').text();
    var $valueTo   = $('.irs-to').text();
    var $valuesRange = `${$valueFrom} ₽ - ${$valueTo} ₽`;
    
    $('.range-slider__caption-right').text($valuesRange);
  });
  
});