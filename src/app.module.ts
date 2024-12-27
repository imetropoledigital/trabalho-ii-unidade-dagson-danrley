import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { DynamicEntityModule } from './dynamic-entity/dynamic-entity.module';
import databaseConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [databaseConfig] }),
    DatabaseModule,
    DynamicEntityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
