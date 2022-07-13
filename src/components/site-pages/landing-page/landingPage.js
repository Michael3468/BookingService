import DropdownDate from '../../ui-kit/form-elements/dropdown-date/dropdownDate';
import Header from '../../ui-kit/headers-and-footers/header/header';

import './landing-page.scss';
import '../../ui-kit/cards/card-background-border.scss';
import '../../ui-kit/cards/room-search/roomSearch';

import '../../ui-kit/headers-and-footers/footer/footer';

const dropdownDates = document.querySelectorAll('.js-dropdown-date');
[...dropdownDates].map((item) => new DropdownDate(item));

new Header();
