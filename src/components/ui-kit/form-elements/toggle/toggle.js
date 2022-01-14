import './toggle.scss';

const toggleButtons = document.querySelectorAll('.js-toggle__button');

toggleButtons.forEach((item) => {
  item.addEventListener('keypress', (e) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      // eslint-disable-next-line no-param-reassign
      item.checked = !item.checked;
    }
  });
});
