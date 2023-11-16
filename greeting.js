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
  let str = ''
  for (str of name) {
    if (str === str.toUpperCase()) upperCaseNames.push(str)
    else lowerCaseNames.push(str)
  }
  return [lowerCaseNames, upperCaseNames]
}

function lowerNames (names) {
  let str = 'Hello'
  for (let i = 0; i < names.length - 1; i++) {
    str += `, ${names[i]}`
  }
  str += ` and ${names[names.length - 1]}.`
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

module.exports = greet, greetTwoName
