import { randomUUID } from 'node:crypto';
import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a new notification', () => {
    const mock = {
      content: new Content('You received a new message. Hello World!!'),
      category: 'social',
      recipientId: `123j-ks34-aj3Kj4`,
    };

    const notification = new Notification(mock);

    expect(notification).toBeTruthy();
  });
});
