const squareNumber = require('./square');

describe('validate Value', () => {
  let mockValue;

  // запускается перед каждым тесткейсом
  beforeEach(() => {
    // ex: добавили юзера в БД
  });

  // запускается один раз перед всеми тесткейсакми
  beforeAll(() => {});

  test('spy with called 1 time', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    squareNumber(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });

  test('spy with 0 calls', () => {
    const spyMathPow = jest.spyOn(Math, 'pow');
    squareNumber(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });

  // запускается после каждого тесткейса
  afterEach(() => {
    // ex: удалили юзера из БД
    jest.clearAllMocks();
  });

  // запускается единожды после всех тесткейсов
  afterAll(() => {});
});
