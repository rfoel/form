importScripts(
  'data/states.js',
  'utils/generateRandomNumber.js',
  'utils/randomArrayElement.js',
)

function randomPhone() {
  const ddd = randomArrayElement(areaCodes)
  const firstNumber = randomArrayElement([6, 7, 8, 9])
  const number = generateRandomNumber(8)

  return `${ddd}${firstNumber}${number}`
}
