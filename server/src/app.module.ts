import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { ListsModule } from './lists/lists.module';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { Category } from './categories/category.entity';
import { List } from './lists/list.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: '3045',
      database: 'ToDo',
      entities: [User, Category, List],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    ListsModule,
    CategoriesModule,
  ],
})
export class AppModule {}
