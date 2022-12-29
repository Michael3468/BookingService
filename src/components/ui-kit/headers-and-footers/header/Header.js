

import './header.scss';

import { smDesktopWidth } from '../../../../assets/js/common';

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
    if (window.innerWidth <= smDesktopWidth) {
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

    document.addEventListener(
      'DOMContentLoaded',
      this._headersDropdownShowHide
    );

    document.addEventListener('click', (e) => {
      this._headerNavClose(e);
    });
  }

  _toggleHeaderNav() {
    this.headerNavs = document.querySelectorAll('.js-header__nav');
    this.headerNavs[0].classList.toggle('hidden');
  }

  _headerNavClose(e) {
    this.headerNavs = document.querySelectorAll('.js-header__nav');

    const isBurgerButtonVisible = window.innerWidth <= smDesktopWidth;

    const isHeaderNavsVisible =
      !this.headerNavs[0].classList.contains('hidden');

    const isBurgerButtonClick = e.target.classList.contains('js-header-burger');

    const isOutsideMenuClick =
      e.target.classList.contains('header__nav-links') ||
      e.target.classList.contains('header__nav-li') ||
      e.target.classList.contains('header__nav-link') ||
      e.target.classList.contains('header__nav-expand-more') ||
      e.target.classList.contains('header__authentification') ||
      e.target.classList.contains('header__not-authentificated');

    if (
      isBurgerButtonVisible &&
      isHeaderNavsVisible &&
      !isBurgerButtonClick &&
      !isOutsideMenuClick
    ) {
      this.headerNavs[0].classList.add('hidden');
    }
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
