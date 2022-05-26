importScripts(
  'random/name.js',
  'utils/randomArrayElement.js',
  'utils/generateRandomNumber.js',
)

function randomEmail() {
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
    ' ',
    randomArrayElement(['.', '-', '_', '']),
  )}${generateRandomNumber(4)}@fakemail.com`
}
