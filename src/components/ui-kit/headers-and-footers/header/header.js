/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
import '../../logo/logo';
import '../../form-elements/button/button';

import './header.scss';

class Header {
  constructor() {
    this.headerBurgers = this._initHeaderBurgers();

    this._addListeners();
  }

  _initHeaderBurgers() {
    return document.querySelectorAll('.js-header-burger');
  }

  _addRemoveHiddenClass(element) {
    if (!element) return;
    // TODO add constant (1025)
    if (window.innerWidth < 1025) {
      element.forEach((elem) => elem.classList.add('hidden'));
    } else {
      element.forEach((elem) => elem.classList.remove('hidden'));
    }
  }

  _addListeners() {
    document.addEventListener('DOMContentLoaded', () => {
      this.headerNavs = document.querySelectorAll('.js-header__nav');
      this._addRemoveHiddenClass(this.headerNavs);

      this.headerBurgers.forEach((burger) =>
        burger.addEventListener('click', this._toggleHeaderNav)
      );
    });

    window.addEventListener('resize', () => {
      this._addRemoveHiddenClass(this.headerNavs);
    });

    // TODO move up
    document.addEventListener(
      'DOMContentLoaded',
      this._headersDropdownShowHide
    );
  }

  _toggleHeaderNav() {
    this.headerNavs = document.querySelectorAll('.js-header__nav');
    this.headerNavs[0].classList.toggle('hidden');
  }

  _headersDropdownShowHide = () => {
    const dropdowns = document.querySelectorAll('.js-header__nav-dropdown');

    if (dropdowns !== undefined) {
      dropdowns.forEach((dropdown) => {
        dropdown.addEventListener('click', this._handleHeaderDropdownClick);
        dropdown.addEventListener('keypress', (e) => {
          this._handleHeaderDropdownKeyPress(e);
        });

        dropdown.addEventListener(
          'mouseleave',
          this._handleHeaderDropdownMouseLeave
        );
      });
    }
  };

  _handleHeaderDropdownClick = (PointerEvent) => {
    this._getDropdownMenu(PointerEvent).classList.toggle('hidden');
  };

  _handleHeaderDropdownKeyPress(e) {
    if (e.code === 'Enter') {
      this._handleHeaderDropdownClick(e);
    }
  }

  _handleHeaderDropdownMouseLeave = (PointerEvent) => {
    this._getDropdownMenu(PointerEvent).classList.add('hidden');
  };

  _getDropdownMenu(PointerEvent) {
    const { currentTarget } = PointerEvent;
    return currentTarget.querySelector('.js-header__nav-dropdown-content');
  }
}

export default Header;
