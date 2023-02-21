import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoleDto } from './role.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService){}

  @Post()
  create(@Body()roleDto: RoleDto){
    return this.roleService.createRole(roleDto)
  }

  @Get('/:value')
  getByValue(@Param('value') value: string){
    return this.roleService.getRoleByValue(value)
  }
}
