import { Inject, Injectable } from "@nestjs/common";
import { UsuarioModel } from "../model/usuario/usuario.model";
import { UsuarioRepository, UsuarioSqlRepository } from "../model/usuario/usuario.repository";
import { CrudService } from "../shared/database/crud.service";

@Injectable()
export class UsuarioService extends CrudService<
  UsuarioModel,
  UsuarioRepository
> {
  constructor(
    @Inject(UsuarioSqlRepository)
    private usuarioRepository: UsuarioRepository,
  ) {
    super(usuarioRepository);
  }

  async saveUsuario(usuarioModel:UsuarioModel): Promise<UsuarioModel>{
    return await this.usuarioRepository.save(usuarioModel);

  }
}
