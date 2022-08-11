import { main } from '../main';

describe('Main', () => {
  it('Should return desired output', () => {
    expect(main()).toBe(
      '1 3 N\n' +
      '5 1 E'
    );
  });
});
