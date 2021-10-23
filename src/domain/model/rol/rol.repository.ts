import { CrudRepository } from "src/domain/shared/database/crud";
import { RolModel } from "./rol.model";


export const RolSqlRepository = "RolSqlRepository";

export interface RolRepository extends CrudRepository<RolModel> {
  
}
