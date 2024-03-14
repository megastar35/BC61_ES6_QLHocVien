function checkEmptyValue(value, idSpan) {
  var eleSpan = document.getElementById(idSpan);
  if ((value = "")) {
    eleSpan.innerHTML = "Không được bỏ trống";
    return false;
  } else {
    eleSpan.innerHTML = " ";
    return true;
  }
}
