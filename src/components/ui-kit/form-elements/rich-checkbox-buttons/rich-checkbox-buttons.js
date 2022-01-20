import './rich-checkbox-buttons.scss';

function handleCheckBoxButtonItemKeyPress(e, item) {
  if (e.code === 'Enter') {
    const itemInput = item.querySelector('.js-rich-checkbox-buttons__input');
    itemInput.checked = !itemInput.checked;
  }
}

const checkboxButtonItem = document.querySelectorAll('.js-rich-checkbox-buttons__item');
checkboxButtonItem.forEach((item) => {
  item.addEventListener('keypress', (e) => {
    handleCheckBoxButtonItemKeyPress(e, item);
  });
});
