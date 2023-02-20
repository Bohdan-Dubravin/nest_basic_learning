import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity('users_roles')
export class UsersRoles {
  @ApiProperty({example: 1, description: 'Unique identifier'})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({example: 'admin', description: 'role name'}) 
  @Column({
    unique: true,
  })
  roleId: string;


  @ApiProperty({example: '2', description: 'users id'})
  @Column()
  userId: number;
}