importScripts('utils/randomArrayElement.js')

function randomName() {
  return randomArrayElement([...femaleNames, ...maleNames])
}

function randomSurname() {
  return randomArrayElement(surnames)
}

function randomFullName() {
  return `${randomName()} ${randomSurname()}`
}
