import { ApiProperty } from '@nestjs/swagger';
import { Users } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Roles {
  @ApiProperty({example: 1, description: 'Unique identifier'})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({example: 'manager', description: 'unique user role'})
  @Column({
    unique: true,
  })
  value: string;


  @ApiProperty({example: 'can delete and update docs', description: 'what can do'})
  @Column()
  description: string;

  @ManyToMany(
    () =>  Users, 
    (user)=> user.roles, 
  )
  users: Users[];
}
