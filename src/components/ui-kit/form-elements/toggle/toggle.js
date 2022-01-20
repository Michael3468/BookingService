import './toggle.scss';

function handleToggleButtonKeyPress(e, item) {
  if (e.code === 'Enter') {
    e.preventDefault();
    // eslint-disable-next-line no-param-reassign
    item.checked = !item.checked;
  }
}

const toggleButtons = document.querySelectorAll('.js-toggle__button');
toggleButtons.forEach((item) => {
  item.addEventListener('keypress', (e) => {
    handleToggleButtonKeyPress(e, item);
  });
});
