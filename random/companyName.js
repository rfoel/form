importScripts('data/companyNames.js', 'utils/randomArrayElement.js')

function randomCompanyName() {
  return randomArrayElement(companyNames)
}
