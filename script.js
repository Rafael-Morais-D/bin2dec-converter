/*
 * [X] User can enter up to 8 binary digits in one input field
 * [X] User must be notified if anything other than a 0 or 1 was entered
 * [X] User views the results in a single output field containing the decimal (base 10) equivalent of the binary number that was entered
 * [X] User can enter a variable number of binary digits
 */

const getBin = document.getElementById("input-bin");
const getDec = document.getElementById("input-dec");
const getButton = document.getElementById("convert");
const getTitle = document.getElementById("title");
let buttonBin = document.getElementsByClassName("binConverter");
let buttonDec = document.getElementsByClassName("decConverter");

getBin.addEventListener("click", function () {
  getButton.classList.add("binConverter");
  getButton.classList.remove("decConverter");
  getTitle.innerHTML = "Binário para Decimal";
});

getDec.addEventListener("click", function () {
  getButton.classList.add("decConverter");
  getButton.classList.remove("binConverter");
  getTitle.innerHTML = "Decimal para Binário";
});

getButton.addEventListener("click", function () {
  try {
    if (buttonBin[0]) {
      validateBinaryDigits(getBin.value);
      getDec.value = binToDec(getBin.value);
    } else if (buttonDec[0]) {
      getBin.value = decToBin(getDec.value);
    }
  } catch (error) {
    alert(error.message);
  }
});

function validateBinaryDigits(string) {
  const hasInvalidDigit = string
    .split("")
    .some((digit) => digit != 0 && digit != 1);

  if (hasInvalidDigit) {
    alert(`O número digitado não é válido, use apenas 0 e 1`);
    throw new Error("Invalid binary digit");
  }
}

function binToDec(bin) {
  let pot = bin.length - 1;

  return bin.split("").reduce((acc, curr) => {
    return acc + Number(curr) * Math.pow(2, pot--);
  }, 0);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function decToBin(dec) {
  let bin = "";
  let rest = dec;
  while (rest > 0) {
    bin += rest % 2;
    rest = Math.floor(rest / 2);
  }
  return reverseString(bin);
}
