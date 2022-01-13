import './room-search.scss';
import '../card-background-border.scss';
import '../../form-elements/dropdown/_options/dropdown-options.scss';

import '../../form-elements/dropdown/_guests/dropdown-guests';

const roomSearchForm = document.querySelector('.js-room-search-form');
const roomSearchButton = document.querySelector('.js-room-search-button');

roomSearchButton.addEventListener('click', () => {
  roomSearchForm.submit();
});
