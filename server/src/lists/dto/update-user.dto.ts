import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({ example: '1', description: 'id пользователя', type: 'number' })
  @IsNumber()
  readonly id: number;

  @ApiProperty({
    example: 'George',
    description: 'имя пользователя',
    type: 'string',
  })
  @IsString()
  readonly userName: string;
}
