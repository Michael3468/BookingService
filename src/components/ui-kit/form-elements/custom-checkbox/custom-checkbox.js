import './custom-checkbox.scss';

function handleCustomCheckboxItemKeyPress(e, item) {
  if (e.code === 'Enter') {
    const itemInput = item.querySelector('.js-custom-checkbox__input');
    itemInput.checked = !itemInput.checked;
  }
}

const customCheckboxItem = document.querySelectorAll('.js-custom-checkbox__item');
customCheckboxItem.forEach((item) => {
  item.addEventListener('keypress', (e) => {
    handleCustomCheckboxItemKeyPress(e, item);
  });
});
