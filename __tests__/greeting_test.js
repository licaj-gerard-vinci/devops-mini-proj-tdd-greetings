const greet = require('../greeting');

test('greet', () => {
    expect(greet('Bob')).toBe('Hello, Bob.')
  })