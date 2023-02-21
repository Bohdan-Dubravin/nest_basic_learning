import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './user.entity';
import { RolesModule } from 'src/roles/roles.module';
import { Roles } from 'src/roles/roles.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Users, Roles]), RolesModule],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService]
})
export class UserModule {}
