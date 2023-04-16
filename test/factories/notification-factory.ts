import { Notification, iNotification } from '@app/entities/notification';
import { validNotification } from '@test/mocks/notification-mocks';
type Override = Partial<iNotification>;

export function makeNotification(override: Override = {}): Notification {
  return new Notification({
    ...validNotification,
    ...override,
  });
}

export function makeMultipleNotification(
  override: Override = {},
  quantity = 1,
  callback,
): void {
  for (let index = 1; index <= quantity; index++) {
    const notification = new Notification({
      ...validNotification,
      ...override,
    });

    if (callback) callback(notification);
  }
}
