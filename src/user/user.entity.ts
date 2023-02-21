import { ApiProperty } from '@nestjs/swagger';
import { Roles } from 'src/roles/roles.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Users {
  @ApiProperty({example: 1, description: 'Unique identifier'})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({example: 'user@mail.com', description: 'userEmail'})
  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @ApiProperty({example: 'false', description: 'is user banned'})
  @Column({ default: false })
  banned: boolean;

  @ApiProperty({example: 'null || string', description: 'ban reason'})
  @Column({
    nullable: true,
  })
  banReason: string;

  @ManyToMany(
    () => Roles, 
    role => role.users,
    {cascade: true}
    )
    @JoinTable({
      name: 'users_roles',
      joinColumn: {
        name: 'user_id',
        referencedColumnName: 'id',
      },
      inverseJoinColumn: {
        name: 'role_id',
        referencedColumnName: 'id',
      },
    })
    roles: Roles[];
}




