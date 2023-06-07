import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsDecimal, IsNumber, IsOptional } from 'class-validator';
import { Category } from '../categories/category.entity';

@Entity('lists')
export class List {
  @ApiProperty({ example: 1, description: 'id пользователя' })
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @ApiProperty({ example: 'work', description: 'название пункта' })
  @IsOptional()
  @Column({ name: 'title', type: 'varchar' })
  title: string;

  @ApiProperty({ example: 1.2, description: 'значение' })
  @IsDecimal()
  @Column({ name: 'value', type: 'numeric' })
  value: number;

  @ApiProperty({ example: 1, description: 'id категории' })
  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  categoryId: number;
}
