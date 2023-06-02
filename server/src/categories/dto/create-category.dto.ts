import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({
    example: 'tasks',
    description: 'название категории',
    type: 'string',
  })
  @IsString()
  readonly categoryName: string;

  @ApiProperty({ example: 1, description: 'id пользователя', type: 'number' })
  @IsNumber()
  readonly userId: number;
}
