import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/user.entity';

@Entity('categories')
export class Category {
  @ApiProperty({ example: 1, description: 'id категории' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'tasks', description: 'название категории' })
  @Column({ name: 'category_name', type: 'varchar' })
  categoryName: string;

  @ApiProperty({ example: 1, description: 'id пользователя' })
  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  userId: number;
}
