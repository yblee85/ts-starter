import { sayHi } from 'src/main';

describe('sayHi', () => {
  it('default', () => {
    expect(sayHi()).toBe('Hi');
  });
});
