import { Notification } from '@app/entities/notification';
import { NotificationsRepository } from '@app/repository/notification.repository';
import { Injectable } from '@nestjs/common';

interface GetRecipientNotificationsRequestProtocol {
  recipientId: string;
}

interface GetRecipientNotificationsResponseProtocol {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: GetRecipientNotificationsRequestProtocol,
  ): Promise<GetRecipientNotificationsResponseProtocol> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return {
      notifications,
    };
  }
}
