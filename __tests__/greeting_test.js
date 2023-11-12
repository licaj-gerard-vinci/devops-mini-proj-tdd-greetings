const greet = require('../greeting');

test('greet', () => {
    expect(greet('Bob')).toBe('Hello, Bob.')
  })

  test('returns: Hello, my friend given: null', () => {
    expect(greet(null)).toBe("Hello, my friend.");
})
test('returns: Hello, my friend given: undefined', () => {
    expect(greet(undefined)).toBe("Hello, my friend.");
})
test('returns: Hello, my friend given: ""', () => {
    expect(greet("")).toBe("Hello, my friend.");
})

test('returns: HELLO, JERRY given: JERRY', () => {
    expect(greet("JERRY")).toBe("HELLO, JERRY!");
})

