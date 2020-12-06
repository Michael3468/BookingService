import './checkbox-buttons.scss';


var button = document.getElementById("expandable-checkbox-list-chkboxbtns-1");
var expandableCheckboxList = button.nextElementSibling;

button.onclick = function(){
  if ( expandableCheckboxList.classList.contains('display-none') ) {
    expandableCheckboxList.classList.remove('display-none');
  } else {
    expandableCheckboxList.classList.add('display-none');
  }
}
