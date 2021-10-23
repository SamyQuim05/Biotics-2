import { DeleteResult } from "typeorm";

export interface CrudRepository<T> {
  save(t: T): Promise<T>;
  update(t: T): Promise<T>;
  delete(t: T): Promise<DeleteResult>;
  findAll(): Promise<T[]>;
  findById(id: string|number): Promise<T>;
}
