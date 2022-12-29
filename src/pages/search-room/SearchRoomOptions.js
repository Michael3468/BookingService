import { smTableWidth } from '../../assets/js/common';

class SearchRoomOptions {
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

export default SearchRoomOptions;
