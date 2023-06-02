import { Test, TestingModule } from '@nestjs/testing';
import { ListsController } from './lists.controller';
import { UsersService } from '../users/users.service';

describe('AppController', () => {
  let usersController: ListsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ListsController],
      providers: [UsersService],
    }).compile();

    usersController = app.get<ListsController>(ListsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      //expect(usersController.getHello()).toBe('Hello World!');
    });
  });
});
