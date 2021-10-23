import { Injectable } from "@nestjs/common";
import { DeleteResult } from "typeorm";
import { CrudRepository } from "./crud";

@Injectable()
export class CrudService<T, R extends CrudRepository<T>> implements CrudRepository<T> {
  constructor(private crudRepository: R) {}

  save(t: T): Promise<T> {
    return this.crudRepository.save(t);
  }

  update(t: T): Promise<T> {
    return this.crudRepository.save(t);
  }

  delete(t: T): Promise<DeleteResult> {
    return this.crudRepository.delete(t);
  }

  findAll(): Promise<T[]> {
    return this.crudRepository.findAll();
  }

  async findById(id: string|number): Promise<T> {
   return await this.crudRepository.findById(id);
  }
}
