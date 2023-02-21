import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/user/user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

  constructor(private userService: UserService, 
    private jwtService: JwtService){}

  async login(userData: UserDto){}


  async register(userData:UserDto){
    const canditate = await this.userService.getUsers
  }

  
}
