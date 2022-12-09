/* eslint-disable no-undef */
import 'ion-rangeslider/js/ion.rangeSlider.min';

import './ion-rangeslider.scss';

const rangeSliderSettings = {
  type: 'double',
  min: 0,
  max: 15800,
  from: 5000,
  to: 10000,
};

class IonRangeSlider {
  constructor(settings = rangeSliderSettings) {
    this.ionRangeSlider = this.initIonRangeSlider(settings);
    this.updateIonRangeSliderCaption();
  }

  initIonRangeSlider(settings) {
    $('.js-range-slider').ionRangeSlider({
      type: settings.type,
      min: settings.min,
      max: settings.max,
      from: settings.from,
      to: settings.to,
    });

    $('.js-range-slider').on('change', () => {
      this.updateIonRangeSliderCaption();
    });
  }

  updateIonRangeSliderCaption() {
    const $valueFrom = $('.irs-from').text();
    const $valueTo = $('.irs-to').text();
    const $valuesRange = `${$valueFrom} ₽ - ${$valueTo} ₽`;

    $('.js-range-slider__caption-right').text($valuesRange);
  }
}

export default IonRangeSlider;
