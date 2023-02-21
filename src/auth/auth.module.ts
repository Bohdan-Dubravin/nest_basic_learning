import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [  ConfigModule.forRoot({
    isGlobal: true,
  }),
  JwtModule.register({secret: process.env.PRIVATE_KEY || 'secret', 
  signOptions: 
  {expiresIn : '24h'}}), 
  UserModule],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
