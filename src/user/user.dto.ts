import { ApiProperty } from "@nestjs/swagger";
import {  IsEmail, IsString, Length } from "class-validator";

export class UserDto {
  
  @ApiProperty({example: 'user@email.com', description: 'userEmail'})
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({example: '123456', description: 'user password'})
  @IsString()
  @Length(5, 16)
  password: string;

}