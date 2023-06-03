import { IsNumber, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateListDto {
  @ApiProperty({ example: '1', description: 'id записи', type: 'number' })
  @IsNumber()
  readonly id: number;

  @ApiProperty({
    example: 'work',
    description: 'имя записи',
    type: 'string',
  })
  @IsString()
  @IsOptional()
  readonly title: string;

  @ApiProperty({
    example: 123,
    description: 'значение записи',
    type: 'number',
  })
  @IsNumber()
  @IsOptional()
  readonly value: number;
}
