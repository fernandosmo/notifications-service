import { NotificationsRepository } from 'src/app/repository/notification.repository';
import { Notification } from '../../src/app/entities/notification';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
