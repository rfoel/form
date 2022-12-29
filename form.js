importScripts('random/index.js')

function fillForm() {
  const checkBoxes = document.querySelectorAll('input[type="checkbox"]')
  const emailInputs = document.querySelectorAll('input[type="email"]')
  const passwordInputs = document.querySelectorAll('input[type="password"]')
  const selectInputs = document.querySelectorAll('select')
  const telInputs = document.querySelectorAll('input[type="tel"]')
  const textInputs = document.querySelectorAll(
    'input[type="text"], input:not([type])',
  )

  checkBoxes.forEach(input => {
    input.click()
  })

  emailInputs.forEach(input => {
    input.value = randomEmail()
    input.dispatchEvent(new Event('blur', { bubbles: true }))
    input.dispatchEvent(new Event('input', { bubbles: true }))
  })

  telInputs.forEach(input => {
    const telInputTypes = [input.id, input.name]

    const phone = ['phone', 'phoneNumber', 'mobilePhone']

    if (telInputTypes.some(textInputType => phone.includes(textInputType))) {
      input.value = randomPhone()
    }

    const cpf = ['cpf']

    if (telInputTypes.some(textInputType => cpf.includes(textInputType))) {
      input.value = randomCPF()
    }

    input.dispatchEvent(new Event('blur', { bubbles: true }))
    input.dispatchEvent(new Event('input', { bubbles: true }))
  })

  selectInputs.forEach(input => {
    const options = Array.from(input.options)
      .map(option => option.value)
      .filter(Boolean)

    input.value = randomArrayElement(options)

    input.dispatchEvent(new Event('blur', { bubbles: true }))
    input.dispatchEvent(new Event('input', { bubbles: true }))
  })

  textInputs.forEach(input => {
    const textInputTypes = [input.id, input.name]

    const firstName = ['name', 'firstName']
    const lastName = ['lastName', 'surname', 'familyName']
    const fullName = ['fullName']
    const externalPartnerId = ['externalPartnerId']
    const username = ['username']

    if (
      textInputTypes.some(textInputType => firstName.includes(textInputType))
    ) {
      input.value = randomName()
    } else if (
      textInputTypes.some(textInputType => lastName.includes(textInputType))
    ) {
      input.value = randomSurname()
    } else if (
      textInputTypes.some(textInputType => fullName.includes(textInputType))
    ) {
      input.value = randomFullName()
    } else if (
      textInputTypes.some(textInputType =>
        externalPartnerId.includes(textInputType),
      )
    ) {
      input.value = randomCPF()
    } else if (
      textInputTypes.some(textInputType => username.includes(textInputType))
    ) {
      input.value = randomUsername()
    }

    const companyName = ['companyName', 'businessName', 'organizationName']

    if (
      textInputTypes.some(textInputType => companyName.includes(textInputType))
    ) {
      input.value = randomCompanyName()
    }

    const birthDate = ['birthDate', 'dob', 'dateOfBirth']

    if (
      textInputTypes.some(textInputType => birthDate.includes(textInputType))
    ) {
      const day = generateRandomNumberBetween(1, 28)
      const month = generateRandomNumberBetween(1, 12)
      const year = generateRandomNumberBetween(1930, 2000)
      input.value = `${String(day).padStart(2, '0')}/${String(month).padStart(
        2,
        '0',
      )}/${year}`
    }

    input.dispatchEvent(new Event('focus', { bubbles: true }))
    input.dispatchEvent(new Event('change', { bubbles: true }))
    input.dispatchEvent(new Event('input', { bubbles: true }))
    input.dispatchEvent(new Event('blur', { bubbles: true }))
  })

  passwordInputs.forEach(input => {
    input.value = 'SenhaSuperSecreta123'
    input.dispatchEvent(new Event('blur', { bubbles: true }))
    input.dispatchEvent(new Event('input', { bubbles: true }))
  })
}
