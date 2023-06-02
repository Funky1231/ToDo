import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { List } from './list.entity';

@Injectable()
export class ListsService {
  private readonly logger = new Logger(ListsService.name);
  constructor(
    @InjectRepository(List)
    private listsRepository: Repository<List>,
  ) {}

  findAllLists(): Promise<List[]> {
    return this.listsRepository.find();
  }

  saveList(categoryId: number, value: number, title?: string): Promise<List> {
    const list = new List();
    title ? (list.title = title) : title;
    list.value = value;
    list.category_id = categoryId
    return this.listsRepository.save(list).catch((e: Error) => {
      this.logger.error(e);
      throw new BadRequestException(e.message, 'не удалось сохранить запись');
    });
  }

  findOneList(id: number): Promise<List | null> {
    return this.listsRepository.findOneBy({ id });
  }

  async updateList(
    id: number,
    value?: number,
    title?: string,
  ): Promise<List | null> {
    await this.listsRepository
      .update({ id: id }, {  title, value })
      .catch((e: Error) => {
        this.logger.error(e);
        throw new BadRequestException(
          e,
          'не удалось обновить категорию',
        );
      });
    return this.listsRepository.findOneBy({ id });
  }

  async removeList(id: number): Promise<void> {
    await this.listsRepository.delete(id);
  }
}
