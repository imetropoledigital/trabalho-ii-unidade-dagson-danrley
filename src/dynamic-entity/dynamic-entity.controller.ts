import { Controller, Post, Body, Param } from '@nestjs/common';
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
}
