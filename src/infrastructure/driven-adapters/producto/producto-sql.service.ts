import { Injectable, Scope } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductoRepository } from "src/domain/model/producto/producto.repository";
import { DeleteResult, Repository } from "typeorm";
import { ProductoEntity } from "./producto.entity";



@Injectable({ scope: Scope.DEFAULT })
export class ProductoRepositoryImplement implements ProductoRepository {
  constructor(
    @InjectRepository(ProductoEntity)
    private readonly productoRepository: Repository<ProductoEntity>,
  ) {}

  save(t: ProductoEntity): Promise<ProductoEntity> {
    return this.productoRepository.save(t);
  }

  update(t: ProductoEntity): Promise<ProductoEntity> {
    return this.productoRepository.save(t);
  }

  delete(t: ProductoEntity): Promise<DeleteResult> {
    return this.productoRepository.delete(t);
  }

  findAll(): Promise<ProductoEntity[]> {
    return this.productoRepository.find();
  }

  findById(id: string): Promise<ProductoEntity> {
    return this.productoRepository.findOne(id);
  }


  
}
