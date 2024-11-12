import { Module } from '@nestjs/common'
import { TaskModule } from './task/task.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [TaskModule],
  controllers: [],
  providers: [PrismaService]
})
export class AppModule {}
