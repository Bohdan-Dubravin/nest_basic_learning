import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from '../user/dto/user.dto';
import { AuthService } from './auth.service';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() userData: UserDto) {
    return this.authService.login(userData);
  }

  @Post('/register')
  register(@Body() userData: UserDto) {
    return this.authService.register(userData);
  }
}
