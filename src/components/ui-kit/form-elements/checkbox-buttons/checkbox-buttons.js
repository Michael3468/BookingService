import './checkbox-buttons.scss';

const expandableCheckbox = document.getElementById('expandable-checkbox-list-check-box-buttons-1');
const checkboxOptions = expandableCheckbox.nextElementSibling;
const expandMore = expandableCheckbox.lastElementChild.children[1];

function isCheckboxOptionsVisible() {
  const notVisible = checkboxOptions.classList.contains('display-none');
  if (notVisible) {
    return false;
  }
  return true;
}

function showCheckboxOptions() {
  checkboxOptions.classList.remove('display-none');
  expandMore.classList.add('expandable-checkbox-list__expand-more-rotate');
}

function hideCheckboxOptions() {
  checkboxOptions.classList.add('display-none');
  expandMore.classList.remove('expandable-checkbox-list__expand-more-rotate');
}

expandableCheckbox.onclick = () => {
  if (isCheckboxOptionsVisible()) {
    hideCheckboxOptions();
  } else {
    showCheckboxOptions();
  }
};
