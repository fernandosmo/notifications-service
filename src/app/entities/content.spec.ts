import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    expect(
      () => new Content('Você recebeu uma solicitação de amizade'),
    ).toBeTruthy();
  });

  it('not should be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('Olá')).toThrow();
  });

  it('not should be able to create a notification content with more than 240 characters', () => {
    expect(() => new Content(`a`.repeat(241))).toThrow();
  });
});
