import {
  Injectable,
  HttpException,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/user/dto/user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';
import { Users } from 'src/user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(userData: UserDto) {
    const user = await this.validateUser(userData);

    return this.generateToken(user);
  }

  async register(userData: UserDto) {
    const existUser = await this.userService.getUsersByEmail(userData.email);

    if (existUser) {
      throw new HttpException('Email already exist', HttpStatus.BAD_REQUEST);
    }

    const hashPassword = await bcrypt.hash(userData.password, 5);

    const newUser = await this.userService.createUser({
      password: hashPassword,
      email: userData.email,
    });

    return this.generateToken(newUser);
  }

  async generateToken(user: Users) {
    const payload = { email: user.email, id: user.id, roles: user.roles };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async validateUser(userData: UserDto) {
    const user = await this.userService.getUsersByEmail(userData.email);

    const passwordEquals = await bcrypt.compare(
      userData.password,
      user.password,
    );

    if (user && passwordEquals) {
      return user;
    }

    throw new UnauthorizedException({ message: 'Incorrect email or password' });
  }
}
