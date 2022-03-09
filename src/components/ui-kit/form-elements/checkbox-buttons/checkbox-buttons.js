import './checkbox-buttons.scss';

const expandableCheckbox = document.querySelector('.js-checkbox-buttons__expandable-list');
const checkboxTexts = document.querySelectorAll('.js-checkbox-buttons-text');
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

function handleCheckboxItemKeyPress(e, item) {
  e.preventDefault();
  changeCheckedStatus(item);
}

const changeCheckedStatus = (item) => {
  const checkbox = item.previousElementSibling;
  checkbox.checked = !checkbox.checked;
}

expandableCheckbox.addEventListener('click', showHideCheckboxOptions);

expandableCheckbox.addEventListener('keypress', (e) => {
  handleCheckboxCaptionKeyPress(e);
});

checkboxTexts.forEach((item) => {
  item.addEventListener('keypress', (e) => {
    if (e.code === 'Enter') {
      handleCheckboxItemKeyPress(e, item);
    }
  });

  item.addEventListener('click', (e) => {
    handleCheckboxItemKeyPress(e, item);
  });
});
