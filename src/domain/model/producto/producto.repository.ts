import { CrudRepository } from "src/domain/shared/database/crud";
import { ProductoModel } from "./producto.model";


export const ProductoSqlRepository = "ProductoSqlRepository";

export interface ProductoRepository extends CrudRepository<ProductoModel> {
  
}