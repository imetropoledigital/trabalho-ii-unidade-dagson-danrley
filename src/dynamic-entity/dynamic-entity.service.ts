import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection, Model, Schema } from 'mongoose';

@Injectable()
export class DynamicEntityService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  private getModel(entityName: string): Model<any> {
    const schema = new Schema({}, { strict: false });
    return this.connection.model(entityName, schema, entityName);
  }

  async createEntity(entityName: string, data: any): Promise<any> {
    const model = this.getModel(entityName);
    const newEntity = new model(data);
    return newEntity.save();
  }

  async findAll(entityName: string): Promise<any[]> {
    const model = this.getModel(entityName);
    return model.find().exec();
  }
}
