import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Roles } from 'src/roles/roles.entity';
import { RolesService } from 'src/roles/roles.service';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { Users } from './user.entity';
import { AddRoleDto } from './dto/addRoleDto';
import { banUserDto } from './dto/banUser.dto';

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

    const role = await this.rolesService.getRoleByValue('ADMIN');

    newUser.roles = [role];

    return await this.usersRepository.save(newUser);
  }

  async getUsers() {
    return await this.usersRepository.find({ relations: { roles: true } });
  }

  async getUsersByEmail(email: string) {
    return await this.usersRepository.findOneBy({ email });
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.usersRepository.findOneBy({ id: dto.userId });
    const role = await this.rolesService.getRoleByValue(dto.value);

    if (role && user) {
      await this.usersRepository.update(
        { id: dto.userId },
        { roles: [...user.roles, role] },
      );
    }
  }

  async banUser(dto: banUserDto) {
    return;
  }
}
