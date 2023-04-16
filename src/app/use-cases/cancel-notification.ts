import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '@app/repository/notification.repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface iCancelNotificationRequest {
  notificationId: string;
}

type iCancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: iCancelNotificationRequest,
  ): Promise<iCancelNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.cancel();

    await this.notificationsRepository.save(notification);
  }
}
