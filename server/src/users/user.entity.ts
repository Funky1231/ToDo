import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

@Entity('users')
export class User {
  @ApiProperty({ example: 1, description: 'id пользователя' })
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @ApiProperty({ example: 'john_doe', description: 'имя пользователя' })
  @Column({ name: 'user_name', type: 'varchar' })
  userName: string;
}
