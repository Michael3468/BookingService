import DropdownDate from '../../components/ui-kit/form-elements/dropdown-date/dropdownDate';
import Header from '../../components/ui-kit/headers-and-footers/header/header';

import '../../components/ui-kit/cards/room-search/roomSearch';
import '../../components/ui-kit/headers-and-footers/footer/footer';

import './landing-page.scss';
import '../../components/ui-kit/cards/card-background-border.scss';

const dropdownDates = document.querySelectorAll('.js-dropdown-date');
[...dropdownDates].map((item) => new DropdownDate(item));

new Header();
