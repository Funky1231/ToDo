import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { ListsModule } from './lists/lists.module';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { Category } from './categories/category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '3045',
      database: 'myLocalDB',
      entities: [User, Category],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    ListsModule,
    CategoriesModule,
  ],
})
export class AppModule {}
