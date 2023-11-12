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

test('returns: Hello, Jill and Jane given: ["Jill", "Jane"]', () => {
    expect(greet(["Jill", "Jane"])).toMatch("Hello, Jill and Jane.");
})

test('returns: Hello, Amy, Brian and Charlotte given: ["Amy", "Brian", "Charlotte"]', () => {
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian and Charlotte.");
})

test('returns: Hello, Amy, Brian, Dirna and Charlotte given: ["Amy", "Brian", "Charlotte", "Dirna"]', () => {
    expect(greet(["Amy","Brian","Dirna","Charlotte"])).toBe("Hello, Amy, Brian, Dirna and Charlotte.");
})