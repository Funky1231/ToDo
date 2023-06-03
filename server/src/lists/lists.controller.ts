import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateListDto } from './dto/update-list.dto';
import { ListsService } from './lists.service';
import { List } from './list.entity';
import { CreateListDto } from './dto/create-list.dto';

@Controller('lists')
@ApiTags('Lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @Get('get-lists')
  @ApiOperation({ summary: 'получить все записи' })
  @ApiResponse({
    status: 200,
    description: 'получить все записи',
    type: [List],
  })
  getLists(): Promise<List[]> {
    return this.listsService.findAllLists();
  }

  @Get('get-list/:id')
  @ApiOperation({ summary: 'получить запись' })
  @ApiResponse({
    status: 200,
    description: 'получить запись',
    type: List,
  })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'id записи',
  })
  getList(@Param() id: Pick<UpdateListDto, 'id'>) {
    return this.listsService.findOneList(id.id);
  }

  @Post('save-list')
  @ApiOperation({ summary: 'создать записть' })
  @ApiResponse({
    status: 201,
    description: 'создать записть',
    type: List,
  })
  addList(@Body() body: CreateListDto): Promise<List> {
    return this.listsService.saveList(
      body.categoryId,
      body?.value,
      body?.title,
    );
  }

  @Put('update-list')
  @ApiOperation({ summary: 'обновить записть' })
  @ApiResponse({
    status: 200,
    description: 'обновить записть',
    type: List,
  })
  updateList(@Body() body: UpdateListDto): Promise<List | null> {
    return this.listsService.updateList(body.id, body?.value, body?.title);
  }

  @Delete('delete-list')
  @ApiOperation({ summary: 'удалить записть' })
  @ApiResponse({
    status: 200,
    description: 'удалить записть',
    type: List,
  })
  deleteUsers(@Body() body: { id: number }): Promise<void> {
    return this.listsService.removeList(body.id);
  }
}
