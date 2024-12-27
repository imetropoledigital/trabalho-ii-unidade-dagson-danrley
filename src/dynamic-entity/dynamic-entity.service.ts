import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection, Model, Schema } from 'mongoose';

@Injectable()
export class DynamicEntityService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  private getModel(entityName: string): Model<any> {
    const schema = new Schema({}, { strict: false });
    return this.connection.model(entityName, schema, entityName);
  }

  async create(entity: string, data: any) {
    const model = this.getModel(entity);
    return new model(data).save();
  }

  async findAll(
    entity: string,
    query: any,
    fields: string,
    limit: number,
    skip: number,
  ) {
    const model = this.getModel(entity);
    return model.find(query, fields).limit(limit).skip(skip).exec();
  }

  async findOne(entity: string, id: string, fields: string) {
    const model = this.getModel(entity);
    const item = await model.findById(id, fields).exec();
    if (!item) throw new NotFoundException(`${entity} not found`);
    return item;
  }

  async update(entity: string, id: string, data: any) {
    const model = this.getModel(entity);
    return model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(entity: string, id: string) {
    const model = this.getModel(entity);
    return model.findByIdAndDelete(id).exec();
  }
}
