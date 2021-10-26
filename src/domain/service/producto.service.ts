import { Inject, Injectable } from "@nestjs/common";
import { ProductoModel } from "../model/producto/producto.model";
import { ProductoRepository, ProductoSqlRepository } from "../model/producto/producto.repository";
import { CrudService } from "../shared/database/crud.service";

@Injectable()
export class RolService extends CrudService<
  RolModel,
  RolRepository
> {
  constructor(
    @Inject(ProductoSqlRepository)
    private productoRepository: ProductoRepository,
  ) {
    super(productoRepository);
  }

  async saveRol(productoModel:ProductoModel): Promise<ProductoModel>{
    return await this.productoRepository.save(productoModel);

  }
}