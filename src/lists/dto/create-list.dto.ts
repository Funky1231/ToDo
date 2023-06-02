import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateListDto {
  @ApiProperty({
    example: 1,
    description: 'id каталога',
    type: 'number',
  })
  @IsNumber()
  categoryId: number;

  @ApiProperty({
    example: 1.2,
    description: 'значение',
    type: 'number',
  })
  @IsOptional()
  value: number;

  @ApiProperty({
    example: 'work',
    description: 'название списка',
    type: 'number',
  })
  @IsString()
  @IsOptional()
  title?: string
}


