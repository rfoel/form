importScripts(
  'random/name.js',
  'utils/randomArrayElement.js',
  'utils/generateRandomNumber.js',
)

function randomEmail() {
  return `${randomUsername()}@email.com`
}

function randomUsername() {
  return `${randomArrayElement([
    randomName()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase(),
    randomSurname()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase(),
  ]).replace(
    /\s/g,
    randomArrayElement(['.', '-', '_', '']),
  )}${generateRandomNumber(4)}`
}
