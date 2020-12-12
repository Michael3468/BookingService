import './checkbox-buttons.scss';

{

  let expandableCheckbox = document.getElementById("expandable-checkbox-list-check-box-buttons-1");
  let checkboxOptions = expandableCheckbox.nextElementSibling;
  let expandMore = expandableCheckbox.lastElementChild.children[1];

  console.dir(expandMore);

  expandableCheckbox.onclick = function(){
    if ( isCheckboxOptionsVisible() ) {
      hideCheckboxOptions();
    } else {
      showCheckboxOptions();
    }
  }

  function isCheckboxOptionsVisible() {
    let notVisible = checkboxOptions.classList.contains('display-none');
    if ( notVisible ) {
      return false;
    } else {
      return true;
    }
  }

  function showCheckboxOptions() {
    checkboxOptions.classList.remove('display-none');
    expandMore.classList.add('expandable-checkbox-list__expand-more-rotate');
  }

  function hideCheckboxOptions() {
    checkboxOptions.classList.add('display-none');
    expandMore.classList.remove('expandable-checkbox-list__expand-more-rotate');
  }

}