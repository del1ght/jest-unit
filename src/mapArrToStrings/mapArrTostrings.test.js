const mapArrToStrings = require('./mapArrTostrings');

describe('validate Value', () => {
  test('correct value', () => {
    expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
  });
  test('random inputs', () => {
    expect(mapArrToStrings([1, 2, null, 3, undefined, 'test'])).toEqual([
      '1',
      '2',
      '3',
    ]);
  });
  test('empty array', () => {
    expect(mapArrToStrings([])).toEqual([]);
  });
  test('negation', () => {
    expect(mapArrToStrings([1, 2, 3])).not.toEqual(['1', '2', '3', '4']);
  });
});
