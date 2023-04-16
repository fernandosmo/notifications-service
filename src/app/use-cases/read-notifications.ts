import { Injectable } from '@nestjs/common';
import { NotificationNotFound } from '@app/use-cases/errors/notification-not-found';
import { NotificationsRepository } from '@app/repository/notification.repository';

interface ReadNotificationRequestProtocol {
  notificationId: string;
}

type ReadNotificationResponseProtocol = void;

@Injectable()
export class ReadNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: ReadNotificationRequestProtocol,
  ): Promise<ReadNotificationResponseProtocol> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) throw new NotificationNotFound();

    notification.read();

    await this.notificationsRepository.save(notification);
  }
}
