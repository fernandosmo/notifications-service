import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { NotificationsRepository } from 'src/app/repository/notification.repository';
import { PrismaNOtificationsRepository } from './prisma/repositories/prisma-noiications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNOtificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
