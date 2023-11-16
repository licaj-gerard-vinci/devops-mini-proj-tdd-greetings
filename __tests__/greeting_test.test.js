const greet = require('../greeting')

// test1
test('greet', () => {
  expect(greet('Bob')).toBe('Hello, Bob.')
})
// test2
test('returns: Hello, my friend given: null', () => {
  expect(greet(null)).toBe('Hello, my friend.')
})
test('returns: Hello, my friend given: undefined', () => {
  expect(greet(undefined)).toBe('Hello, my friend.')
})
test('returns: Hello, my friend given: ""', () => {
  expect(greet('')).toBe('Hello, my friend.')
})
// test3
test('returns: HELLO, JERRY given: JERRY', () => {
  expect(greet('JERRY')).toBe('HELLO, JERRY!')
})
// test4
test('returns: Hello, Jill and Jane given: ["Jill", "Jane"]', () => {
  expect(greet(['Jill', 'Jane'])).toBe('Hello, Jill and Jane.')
})
// test5
test('returns: Hello, Amy, Brian and Charlotte given: ["Amy", "Brian", "Charlotte"]', () => {
  expect(greet(['Amy', 'Brian', 'Charlotte'])).toBe(
    'Hello, Amy, Brian and Charlotte.'
  )
})

test('returns: Hello, Amy, Brian, Dirna and Charlotte given: ["Amy", "Brian", "Charlotte", "Dirna"]', () => {
  expect(greet(['Amy', 'Brian', 'Dirna', 'Charlotte'])).toBe(
    'Hello, Amy, Brian, Dirna and Charlotte.'
  )
})
// test6
test('returns: Hello, Amy and Charlotte. AND HELLO BRIAN given: ["Amy", "BRIAN", "Charlotte"]', () => {
  expect(greet(['Amy', 'BRIAN', 'Charlotte'])).toBe(
    'Hello, Amy and Charlotte. AND HELLO BRIAN!'
  )
})
// test7
test('returns: Bonjour, Amy et Brian given: ["Amy", "Brian", "fr"]', () => {
  expect(greet(['Amy', 'Brian', 'fr'])).toBe('Bonjour, Amy et Brian.')
  expect(greet(['Amy', 'Brian', 'en'])).toBe('Hello, Amy and Brian.')
  expect(greet(['Amy', 'Brian', 'nl'])).toBe('Hallo, Amy en Brian.')
})
