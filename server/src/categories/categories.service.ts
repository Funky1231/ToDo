import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Category } from './category.entity';
import { User } from '../users/user.entity';

@Injectable()
export class CategoriesService {
  private readonly logger = new Logger(CategoriesService.name);
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAllCategories(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async saveCategory(categoryName: string, userId: number): Promise<Category> {
    const category = new Category();
    category.categoryName = categoryName;

    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new BadRequestException('пользователь не найден');
    }
    category.userId = user.id;

    return this.categoryRepository.save(category).catch((e: Error) => {
      this.logger.error(e);
      throw new BadRequestException(
        e.message,
        'не удалось сохранить категорию',
      );
    });
  }

  findOneCategory(id: number): Promise<Category | null> {
    return this.categoryRepository.findOneBy({ id });
  }

  async updateCategory(id: number, newName: string): Promise<Category | null> {
    await this.categoryRepository.update({ id: id }, { categoryName: newName });
    return this.categoryRepository.findOneBy({ id });
  }

  async removeCategory(id: number): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}
