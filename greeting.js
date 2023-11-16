function greet (name) {
  if (Array.isArray(name)) {
    return greetTwoName(name)
  }
  if (!name || name === null || name === '') {
    return 'Hello, my friend.'
  }
  if (name === name.toUpperCase()) {
    return `HELLO, ${name}!`
  }

  return `Hello, ${name}.`
}

function greetTwoName (name) {
  const sortedNames = sortArray(name)
  let words = lowerNames(sortedNames[0])

  if (sortedNames[1].length > 0) {
    words += upperNames(sortedNames[1])
  }
  return words
}

function sortArray (name) {
  const lowerCaseNames = []
  const upperCaseNames = []
  let value
  for (value of name) {
    if (value === value.toUpperCase()) upperCaseNames.push(value)
    else lowerCaseNames.push(value)
  }
  return [lowerCaseNames, upperCaseNames]
}

function lowerNames (names) {
  let str = ''
  let lang = ''
  if (names[names.length - 1] === 'fr') {
    str = 'Bonjour'
    lang = 'et'
    names.pop()
  } else if (names[names.length - 1] === 'nl') {
    str = 'Hallo'
    lang = 'en'
    names.pop()
  } else if (names[names.length - 1] === 'en') {
    str = 'Hello'
    lang = 'and'
    names.pop()
  } else {
    str = 'Hello'
    lang = 'and'
  }
  for (let i = 0; i < names.length - 1; i++) {
    str += `, ${names[i]}`
  }
  str += ` ${lang} ${names[names.length - 1]}.`
  return str
}

function upperNames (names) {
  const wordsList = ['HELLO', 'AND']
  let words = ` ${wordsList[1].toUpperCase()} ${wordsList[0].toUpperCase()} `
  for (let i = 0; i < names.length; i++) {
    words += names[i]
  }
  words += '!'
  return words
}
module.exports = greet
