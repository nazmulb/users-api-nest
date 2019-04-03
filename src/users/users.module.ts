import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersControllerV1 } from './users.controller.v1';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { User } from './user.entity';

@Module({
  imports: [
      TypeOrmModule.forFeature([User]),
      TypeOrmModule.forFeature([UsersRepository]),
    ],
  providers: [
    UsersService,
  ],
  controllers: [UsersControllerV1],
})
export class UsersModule {}