import { Module } from '@nestjs/common';
import { DynamicService } from './dynamic.service';
import { DynamicController } from './dynamic.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeatureAsync([])],
  controllers: [DynamicController],
  providers: [DynamicService],
})
export class DynamicModule {}
