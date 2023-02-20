import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { Users } from './user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}


  async createUser(user: UserDto) {
    return await this.usersRepository.save(user);


  }

  async getUsers() {
    return await this.usersRepository.find();
  }
}
