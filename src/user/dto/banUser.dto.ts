import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class banUserDto {
  @ApiProperty({ example: '123', description: 'user Id to ban' })
  userId: number;

  @ApiProperty({ example: 'incorrect posts', description: 'ban reason' })
  @IsString()
  banReason: string;
}
