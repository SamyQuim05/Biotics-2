import { CrudRepository } from "src/domain/shared/database/crud";
import { UsuarioModel } from "./usuario.model";


export const UsuarioSqlRepository = "UsuarioSqlRepository";

export interface UsuarioRepository extends CrudRepository<UsuarioModel> {
  
}