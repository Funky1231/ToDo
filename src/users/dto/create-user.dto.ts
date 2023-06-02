import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'George',
    description: 'имя пользователя',
    type: 'string',
  })
  @IsString()
  readonly userName: string;
}
