/* eslint-disable no-undef */
// slick-carousel = slick slider
import 'slick-carousel/slick/slick.min';

import './slick-carousel.scss';

class SlickCarousel {
  constructor() {
    this.initSlickCarousel();
  }

  initSlickCarousel() {
    $('.js-slick-picture').slick({
      dots: true,
    });
  }
}

export default SlickCarousel;
