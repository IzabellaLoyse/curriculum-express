import { GenderTranslationPipe } from './gender-translation.pipe';

describe('GenderTranslationPipe', () => {
  it('create an instance', () => {
    const pipe = new GenderTranslationPipe();
    expect(pipe).toBeTruthy();
  });
});
