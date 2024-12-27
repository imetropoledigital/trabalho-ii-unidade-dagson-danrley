import { Controller, Post, Body, Param, Get, Query } from '@nestjs/common';
import { DynamicEntityService } from './dynamic-entity.service';

@Controller(':entity')
export class DynamicEntityController {
  constructor(private readonly dynamicEntityService: DynamicEntityService) {}

  @Post()
  async createDynamicEntity(
    @Param('entity') entity: string,
    @Body() body: any,
  ): Promise<any> {
    return this.dynamicEntityService.createEntity(entity, body);
  }

  @Get()
  async getAllEntities(@Param('entity') entity: string): Promise<any[]> {
    return this.dynamicEntityService.findAll(entity);
  }
}
