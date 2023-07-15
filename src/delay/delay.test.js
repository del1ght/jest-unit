const delay = require('./delay');

describe('delay', () => {
  test('simple test', async () => {
    const sum = await delay(() => 5 + 5, 2000);
    expect(sum).toBe(10);
  });
});
