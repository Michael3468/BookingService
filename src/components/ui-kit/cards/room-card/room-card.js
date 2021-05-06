/* eslint-disable no-undef */
/* eslint-disable prefer-arrow-callback */
import './room-card.scss';

import '../booking/__caption/booking__caption';
import '../../form-elements/rate-button/rate-button';
import './__feedbacks/__feedbacks';

// slick-carousel
import 'slick-carousel/slick/slick.min';

// eslint-disable-next-line func-names
$(function () {
  $('.room-card__picture-block').slick();
});
// slick-carousel end
