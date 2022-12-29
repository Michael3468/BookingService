import '../../components/ui-kit/cards/room-card/roomCard';

import '../../components/ui-kit/form-elements/checkbox-buttons';
import '../../components/ui-kit/form-elements/custom-checkbox';
import '../../components/ui-kit/form-elements/dropdown/_guests';
import '../../components/ui-kit/form-elements/dropdown/_options';
import '../../components/ui-kit/form-elements/filter-date-dropdown';
import '../../components/ui-kit/form-elements/filter-date-picker';
import '../../components/ui-kit/form-elements/pagination';
import '../../components/ui-kit/form-elements/range-slider';
import '../../components/ui-kit/form-elements/rich-checkbox-buttons/richCheckboxButtons';

import '../../components/ui-kit/headers-and-footers/footer/footer';
import '../../components/ui-kit/headers-and-footers/header';

import { smTableWidth } from '../../assets/js/common';

import './search-room.scss'; // TODO move to SearchRoom

class SearchRoom {
  constructor() {
    this.menu = this._initMenu();
    this.optionsColumnButton = this._initOptionsColumnButton();

    this._addListeners();
  }

  _initMenu() {
    return document.querySelector('.js-search-room-options-column');
  }

  _initOptionsColumnButton() {
    return document.querySelector('.js-search-room-options-column-button');
  }

  _showColumnOptionsMenu = () => {
    this.menu.classList.toggle('hidden');
    this.optionsColumnButton.classList.toggle(
      'search-room-options-column-button_rotate',
    );
  };

  _handleWindowResize = () => {
    if (window.innerWidth <= smTableWidth) {
      this.menu.classList.add('hidden');
    } else {
      this.menu.classList.remove('hidden');
    }
  };

  _addListeners() {
    this.optionsColumnButton.addEventListener(
      'click',
      this._showColumnOptionsMenu,
    );

    window.addEventListener('resize', this._handleWindowResize);
    window.addEventListener('DOMContentLoaded', this._handleWindowResize);
  }
}

new SearchRoom();

new CheckboxButtons();
