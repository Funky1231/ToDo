import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
@ApiTags('Categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get('get-category')
  @ApiOperation({ summary: 'получить все категории' })
  @ApiResponse({
    status: 200,
    description: 'получить все категории',
    type: [Category],
  })
  getCategories(): Promise<Category[]> {
    return this.categoriesService.findAllCategories();
  }

  @Get('get-category/:id')
  @ApiOperation({ summary: 'получить категорию' })
  @ApiResponse({
    status: 200,
    description: 'получить категорию',
    type: Category,
  })
  getCategory(@Param() id: number) {
    return this.categoriesService.findOneCategory(id);
  }

  @Post('save-category')
  @ApiOperation({ summary: 'создать категорию' })
  @ApiResponse({
    status: 201,
    description: 'создать категорию',
    type: Category,
  })
  addCategories(@Body() body: CreateCategoryDto): Promise<Category> {
    return this.categoriesService.saveCategory(body.categoryName, body.userId);
  }

  @Put('update-category')
  @ApiOperation({ summary: 'обновить категорию' })
  @ApiResponse({
    status: 201,
    description: 'обновить категорию',
    type: Category,
  })
  updateCategory(@Body() body: UpdateCategoryDto): Promise<Category | null> {
    return this.categoriesService.updateCategory(body.id, body.categoryName);
  }

  @Delete('delete-category')
  @ApiOperation({ summary: 'удалить категорию' })
  @ApiResponse({
    status: 200,
    description: 'удалить категорию',
    type: Category,
  })
  deleteCategory(@Body() body: { id: number }): Promise<void> {
    return this.categoriesService.removeCategory(body.id);
  }
}
