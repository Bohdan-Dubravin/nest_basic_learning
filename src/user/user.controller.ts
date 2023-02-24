import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { UserDto } from './dto/user.dto';
import { Users } from './user.entity';
import { UserService } from './user.service';
import { AddRoleDto } from './dto/addRoleDto';
import { banUserDto } from './dto/banUser.dto';

@ApiTags('user action')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'Create User' })
  @ApiResponse({ status: 200, type: Users })
  @Post()
  createUser(@Body() input: UserDto) {
    return this.userService.createUser(input);
  }

  @ApiOperation({ summary: 'Get all Users' })
  @ApiResponse({ status: 200, type: [Users] })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @ApiOperation({ summary: 'Set role' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get('/role')
  addRole(@Body() dto: AddRoleDto) {
    return this.userService.addRole(dto);
  }

  @ApiOperation({ summary: 'Ban user' })
  @ApiResponse({ status: 200 })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get('/ban')
  addBa(@Body() dto: banUserDto) {
    return this.userService.banUser(dto);
  }
}
