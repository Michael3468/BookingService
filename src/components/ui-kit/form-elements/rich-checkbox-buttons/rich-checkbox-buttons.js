import './rich-checkbox-buttons.scss';

const checkboxButtonItem = document.querySelectorAll('.js-rich-checkbox-buttons__item');
checkboxButtonItem.forEach((item) => {
  item.addEventListener('keypress', (e) => {
    if (e.code === 'Enter') {
      const itemInput = item.querySelector('.js-rich-checkbox-buttons__input');
      itemInput.checked = !itemInput.checked;
    }
  });
});
