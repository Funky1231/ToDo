
import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

describe('AppController', () => {
    let usersController: CategoriesController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [CategoriesController],
            providers: [CategoriesService],
        }).compile();

        usersController = app.get<CategoriesController>(CategoriesController);
    });

    describe('root', () => {
        it('should return "Hello World!"', () => {
            //expect(usersController.getHello()).toBe('Hello World!');
        });
    });
});
