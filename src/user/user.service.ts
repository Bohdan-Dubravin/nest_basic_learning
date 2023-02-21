import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Roles } from 'src/roles/roles.entity';
import { RolesService } from 'src/roles/roles.service';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { Users } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    private rolesService: RolesService,
  ) {}

  async createUser(user: UserDto) {
    const newUser = new Users();
    newUser.email = user.email;
    newUser.password = user.password;

    const role = await this.rolesService.getRoleByValue('USER');

    newUser.roles = [role];

    return await this.usersRepository.save(newUser);
  }

  async getUsers() {
    return await this.usersRepository.find({ relations: { roles: true } });
  }

  async getUsersByEmail(email: string) {
    return await this.usersRepository.findOneBy({ email });
  }
}
