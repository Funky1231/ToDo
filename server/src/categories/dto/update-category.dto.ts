import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoryDto {
  @ApiProperty({ example: '1', description: 'id пользователя', type: 'number' })
  @IsNumber()
  readonly id: number;

  @ApiProperty({
    example: 'tasks',
    description: 'имя пользователя',
    type: 'string',
  })
  @IsString()
  readonly categoryName: string;
}
