import './checkbox-buttons.scss';

const expandableCheckbox = document.querySelector('.js-expandable-checkbox-list');
const checkboxTexts = document.querySelectorAll('.js-checkbox-buttons__text');
const checkboxOptions = expandableCheckbox.nextElementSibling;
const expandMore = expandableCheckbox.lastElementChild.children[1];

function showHideCheckboxOptions() {
  const notVisible = checkboxOptions.classList.contains('display-none');
  if (notVisible) {
    checkboxOptions.classList.remove('display-none');
    expandMore.classList.remove('expandable-checkbox-list__expand-more-rotate');
  } else {
    checkboxOptions.classList.add('display-none');
    expandMore.classList.add('expandable-checkbox-list__expand-more-rotate');
  }
}

expandableCheckbox.addEventListener('click', () => {
  showHideCheckboxOptions();
});

expandableCheckbox.addEventListener('keypress', (e) => {
  if (e.code === 'Enter') {
    showHideCheckboxOptions();
  }
});

checkboxTexts.forEach((item) => {
  item.addEventListener('keypress', (e) => {
    if (e.code === 'Enter') {
      const checkbox = item.previousElementSibling;
      checkbox.checked = !checkbox.checked;
    }
  });
});
