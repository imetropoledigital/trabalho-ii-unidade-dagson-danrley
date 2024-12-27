import { Module } from '@nestjs/common';
import { DynamicEntityService } from './dynamic-entity.service';
import { DynamicEntityController as DynamicEntityController } from './dynamic-entity.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeatureAsync([])],
  controllers: [DynamicEntityController],
  providers: [DynamicEntityService],
})
export class DynamicEntityModule {}
