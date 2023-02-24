import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'role name' })
  @IsString()
  value: string;

  @ApiProperty({ example: '123', description: 'user Id to assign role' })
  userId: number;
}
