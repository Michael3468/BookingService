import './checkbox-buttons.scss';

const expandableCheckbox = document.querySelector('.js-checkbox-buttons__expandable-list');
const checkboxOptions = expandableCheckbox.nextElementSibling;
const expandMore = expandableCheckbox.lastElementChild.children[1];

function showHideCheckboxOptions() {
  const notVisible = checkboxOptions.classList.contains('hidden');
  if (notVisible) {
    checkboxOptions.classList.remove('hidden');
    expandMore.classList.add('checkbox-buttons__expandable-list-expand-more-rotate');
  } else {
    checkboxOptions.classList.add('hidden');
    expandMore.classList.remove('checkbox-buttons__expandable-list-expand-more-rotate');
  }
}

function handleCheckboxCaptionKeyPress(e) {
  if (e.code === 'Enter') {
    showHideCheckboxOptions();
  }
}

expandableCheckbox.addEventListener('click', showHideCheckboxOptions);

expandableCheckbox.addEventListener('keypress', (e) => {
  handleCheckboxCaptionKeyPress(e);
});
