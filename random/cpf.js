importScripts('utils/generateChecksum.js', 'utils/generateRandomNumber.js')

function randomCPF(state) {
  const stateCode =
    state && states.includes(state)
      ? statesData[state].code
      : generateRandomNumber(1)
  const baseCPF = generateRandomNumber(11 - 3) + stateCode

  const firstCheckDigitMod = generateChecksum(baseCPF, 10) % 11
  const firstCheckDigit = (
    firstCheckDigitMod < 2 ? 0 : 11 - firstCheckDigitMod
  ).toString()

  const secondCheckDigitMod =
    generateChecksum(baseCPF + firstCheckDigit, 11) % 11
  const secondCheckDigit = (
    secondCheckDigitMod < 2 ? 0 : 11 - secondCheckDigitMod
  ).toString()

  return `${baseCPF}${firstCheckDigit.toString()}${secondCheckDigit.toString()}`
}
