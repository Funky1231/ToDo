import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAllUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  saveUser(newName: string): Promise<User> {
    const user = new User();
    user.user_name = newName;
    return this.usersRepository.save(user).catch((e: Error) => {
      this.logger.error(e);
      throw new BadRequestException(
        e.message,
        'не удалось сохранить пользователя',
      );
    });
  }

  findOneUser(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async updateUser(id: number, userName: string): Promise<User | null> {
    await this.usersRepository
      .update({ id: id }, { user_name: userName })
      .catch((e: Error) => {
        this.logger.error(e);
        throw new BadRequestException(
          e.message,
          'не удалось обновить пользователя',
        );
      });

    return this.usersRepository.findOneBy({ id });
  }

  async removeUser(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
