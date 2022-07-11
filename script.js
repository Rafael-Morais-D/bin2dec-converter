/*
 * [X] User can enter up to 8 binary digits in one input field
 * [X] User must be notified if anything other than a 0 or 1 was entered
 * [X] User views the results in a single output field containing the decimal (base 10) equivalent of the binary number that was entered
 * [X] User can enter a variable number of binary digits
 */

const getBin = document.getElementById('input-bin')
const getDec = document.getElementById('input-dec')
const getButton = document.getElementById('convert')
const getTitle = document.getElementById('title')
let buttonBin = document.querySelector('form .binConverter')
let buttonDec = document.querySelector('form .decConverter')

getBin.addEventListener('click', function () {
  getButton.classList.add('binConverter')
  getButton.classList.remove('decConverter')
  getTitle.innerHTML = 'Binário para Decimal'
})

getDec.addEventListener('click', function () {
  getButton.classList.add('decConverter')
  getButton.classList.remove('binConverter')
  getTitle.innerHTML = 'Decimal para Binário'
})

getButton.addEventListener('click', function () {
  if (buttonBin[0]) {
    console.log('testeBin')
  } else if (buttonDec[0]) {
    console.log('testeDec')
  }
})

function onlyBin(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] != 1 && string[i] != 0) {
      alert(`O número digitado não é válido, use apenas 0 e 1`)
    }
  }

  return binToDec(string)
}

function binToDec(bin) {
  let acc = 0
  let pot = bin.length - 1

  for (let i = 0; i < bin.length; i++) {
    acc += Number(bin[i]) * Math.pow(2, pot)
    pot -= 1
  }

  return acc
}

function reverseString(str) {
  let newStr = []

  for (let i = 0; i < str.length; i++) {
    newStr.unshift(str[i])
  }

  return newStr.join('')
}

function decToBin(dec) {
  let acc = ''

  while (Number(dec) > 0) {
    if (Number(dec) % 2 == 0) {
      acc += '0'
    } else {
      acc += '1'
    }
    dec = Math.floor(Number(dec) / 2)
  }

  return reverseString(acc)
}
