importScripts('utils/onlyNumbers.js')

function generateChecksum(base, weight) {
  const digits = onlyNumbers(base)

  const weights =
    typeof weight === 'number'
      ? Array(digits.length)
          .fill(0)
          .map((_, i) => weight - i)
      : weight

  return digits
    .split('')
    .reduce((acc, digit, i) => acc + parseInt(digit, 10) * weights[i], 0)
}
