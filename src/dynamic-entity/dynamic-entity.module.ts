import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DynamicEntityController } from './dynamic-entity.controller';
import { DynamicEntityService } from './dynamic-entity.service';
import { DynamicEntitySchema } from './dynamic-entity.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'DynamicEntity', schema: DynamicEntitySchema }]),
  ],
  controllers: [DynamicEntityController],
  providers: [DynamicEntityService],
})
export class DynamicEntityModule {}
