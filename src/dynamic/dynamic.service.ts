import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection, Model, Schema } from 'mongoose';

@Injectable()
export class DynamicService {
  constructor(@InjectConnection() private readonly connection: Connection) {}

  private models: Map<string, Model<any>> = new Map();

  private getModel(entity: string): Model<any> {
    if (!this.models.has(entity)) {
      const schema = new Schema({}, { strict: false });
      this.models.set(entity, this.connection.model(entity, schema, entity));
    }
    return this.models.get(entity);
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
