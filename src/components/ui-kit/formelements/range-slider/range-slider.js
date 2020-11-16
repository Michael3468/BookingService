import './range-slider.scss';
import 'ion-rangeslider/js/ion.rangeSlider.min.js';

$(function() {

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 310,
    to: 635
  });
  
});