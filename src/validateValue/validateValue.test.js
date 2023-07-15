const validateValue = require('./validateValue');

describe('validate Value', () => {
  test('correct value', () => {
    expect(validateValue(50)).toBe(true);
  });
  test('value less than correct', () => {
    expect(validateValue(-50)).toBe(false);
  });
  test('value greater than correct', () => {
    expect(validateValue(150)).toBe(false);
  });
  test('corner case 1', () => {
    expect(validateValue(0)).toBe(true);
  });
  test('corner case 2', () => {
    expect(validateValue(100)).toBe(true);
  });
});
