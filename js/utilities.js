function getInputFeildValueById(inputFeildId) {
  const inputFeild = document.getElementById(inputFeildId);
  const inputFeildValueString = inputFeild.value;
  const inputFeildValue = parseFloat(inputFeildValueString);
  inputFeild.value = "";
  return inputFeildValue;
}

function getTextElementValueById(textElementId) {
  const textElement = document.getElementById(textElementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);

  return textElementValue;
}

function setTextElementValueById(textElementId, currentValue) {
    const textElement = document.getElementById(textElementId);
    textElement.innerText = currentValue;
}
