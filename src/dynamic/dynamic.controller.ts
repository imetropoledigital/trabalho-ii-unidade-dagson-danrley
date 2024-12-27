import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { DynamicService } from './dynamic.service';

@Controller(':entity')
export class DynamicController {
  constructor(private readonly dynamicService: DynamicService) {}

  @Post()
  async create(@Param('entity') entity: string, @Body() body: any) {
    return this.dynamicService.create(entity, body);
  }

  @Get()
  async findAll(
    @Param('entity') entity: string,
    @Query('query') query: string,
    @Query('fields') fields: string,
    @Query('limit') limit = 10,
    @Query('skip') skip = 0,
  ) {
    const parsedQuery = query ? JSON.parse(query) : {};
    return this.dynamicService.findAll(
      entity,
      parsedQuery,
      fields,
      +limit,
      +skip,
    );
  }

  @Get(':id')
  async findOne(
    @Param('entity') entity: string,
    @Param('id') id: string,
    @Query('fields') fields: string,
  ) {
    return this.dynamicService.findOne(entity, id, fields);
  }

  @Put(':id')
  async update(
    @Param('entity') entity: string,
    @Param('id') id: string,
    @Body() body: any,
  ) {
    return this.dynamicService.update(entity, id, body);
  }

  @Delete(':id')
  async delete(@Param('entity') entity: string, @Param('id') id: string) {
    return this.dynamicService.delete(entity, id);
  }
}
