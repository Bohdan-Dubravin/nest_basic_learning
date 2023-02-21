import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleDto } from './role.dto';
import { Roles } from './roles.entity';

@Injectable()
export class RolesService {

  constructor(
  @InjectRepository(Roles)
  private rolesRepository: Repository<Roles>,){}

  async createRole(dto: RoleDto){
    const role =  this.rolesRepository.create(dto)

    return await this.rolesRepository.save(role)
  }

  async getRoleByValue(value:string){
    const role = await this.rolesRepository.findOneBy({value})

    return role
  }
}
