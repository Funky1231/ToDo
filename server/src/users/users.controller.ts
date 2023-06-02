import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('get-users')
  @ApiOperation({ summary: 'получить всех пользователей' })
  @ApiResponse({
    status: 200,
    description: 'получить всех пользователей',
    type: [User],
  })
  getUsers(): Promise<User[]> {
    return this.usersService.findAllUsers();
  }

  @Get('get-user/:id')
  @ApiOperation({ summary: 'получить пользователя' })
  @ApiResponse({
    status: 200,
    description: 'получить пользователя',
    type: User,
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'id пользователя',
  })
  getUser(@Param() id: Pick<UpdateUserDto, 'id'>) {
    return this.usersService.findOneUser(id.id);
  }

  @Post('save-user')
  @ApiOperation({ summary: 'создать пользователя' })
  @ApiResponse({
    status: 201,
    description: 'создать пользователя',
    type: User,
  })
  addUsers(@Body() body: CreateUserDto): Promise<User> {
    return this.usersService.saveUser(body.userName);
  }

  @Put('update-user')
  @ApiOperation({ summary: 'обновить пользователя' })
  @ApiResponse({
    status: 200,
    description: 'обновить пользователя',
    type: User,
  })
  updateUsers(@Body() body: UpdateUserDto): Promise<User | null> {
    return this.usersService.updateUser(body.id, body.userName);
  }

  @Delete('delete-user')
  @ApiOperation({ summary: 'удалить пользователя' })
  @ApiResponse({
    status: 200,
    description: 'удалить пользователя',
    type: User,
  })
  deleteUsers(@Body() body: { id: number }): Promise<void> {
    return this.usersService.removeUser(body.id);
  }
}
