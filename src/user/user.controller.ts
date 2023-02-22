import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import {  ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserDto } from './user.dto';
import { Users } from './user.entity';
import { UserService } from './user.service';


@ApiTags('user action')
@Controller('users')
export class UserController {

  constructor(private userService: UserService){}


  @ApiOperation({summary: 'Create User'})
  @ApiResponse({status: 200, type: Users})
  @Post()
  createUser(@Body() input: UserDto) {
    return this.userService.createUser(input)
  }


  @ApiOperation({summary: 'Get all Users'})
  @ApiResponse({status: 200, type: [Users]})
  @UseGuards(JwtAuthGuard)
  @Get()
  getUsers() {
    return this.userService.getUsers()
  }
}
