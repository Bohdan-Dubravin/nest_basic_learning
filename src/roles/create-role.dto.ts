import { ApiProperty } from "@nestjs/swagger";
import {  IsEmail, IsString, Length } from "class-validator";
import { Users } from "src/user/user.entity";
import { JoinTable, ManyToMany } from "typeorm";

export class CreateRoleDto {
  
  @ApiProperty({example: 'manager', description: 'unique user role'})
  @IsString()
  @Length(3, 20)
  email: string;

  @ApiProperty({example: 'can delete docs', description: 'what can do'})
  @IsString()
  @Length(5, 40)
  password: string;

}
