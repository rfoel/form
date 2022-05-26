function generateRandomNumber(length) {
  return Array(length)
    .fill(1)
    .reduce(
      (acc, number) => `${acc}${Math.random().toString().substring(2, 3)}`,
      '',
    )
}

function generateRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
