import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from '@app/use-cases/errors/notification-not-found';
import { NotificationsRepository } from '@app/repository/notification.repository';

interface UnreadNotificationRequestProtocol {
  notificationId: string;
}

type UnreadNotificationResponseProtocol = void;

@Injectable()
export class UnreadNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: UnreadNotificationRequestProtocol,
  ): Promise<UnreadNotificationResponseProtocol> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) throw new NotificationNotFound();

    notification.unread();

    await this.notificationsRepository.save(notification);
  }
}
