import './checkbox-buttons.scss';

const expandableCheckbox = document.querySelector('.js-checkbox-buttons__expandable-list');
const checkboxTexts = document.querySelectorAll('.js-checkbox-buttons__text');
const checkboxOptions = expandableCheckbox.nextElementSibling;
const expandMore = expandableCheckbox.lastElementChild.children[1];

function showHideCheckboxOptions() {
  const notVisible = checkboxOptions.classList.contains('display-none');
  if (notVisible) {
    checkboxOptions.classList.remove('display-none');
    expandMore.classList.remove('checkbox-buttons__expandable-list__expand-more-rotate');
  } else {
    checkboxOptions.classList.add('display-none');
    expandMore.classList.add('checkbox-buttons__expandable-list__expand-more-rotate');
  }
}

function handleCheckboxCaptionKeyPress(e) {
  if (e.code === 'Enter') {
    showHideCheckboxOptions();
  }
}

function handleCheckboxItemKeyPress(e, item) {
  if (e.code === 'Enter') {
    const checkbox = item.previousElementSibling;
    checkbox.checked = !checkbox.checked;
  }
}

expandableCheckbox.addEventListener('click', showHideCheckboxOptions);

expandableCheckbox.addEventListener('keypress', (e) => {
  handleCheckboxCaptionKeyPress(e);
});

checkboxTexts.forEach((item) => {
  item.addEventListener('keypress', (e) => {
    handleCheckboxItemKeyPress(e, item);
  });
});
