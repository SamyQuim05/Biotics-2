import { Injectable, Scope } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UsuarioRepository } from "src/domain/model/usuario/usuario.repository";
import { DeleteResult, Repository } from "typeorm";
import { UsuarioEntity } from "./usuario.entity";


@Injectable({ scope: Scope.DEFAULT })
export class UsuarioRepositoryImplement implements UsuarioRepository {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  save(t: UsuarioEntity): Promise<UsuarioEntity> {
    return this.usuarioRepository.save(t);
  }

  update(t: UsuarioEntity): Promise<UsuarioEntity> {
    return this.usuarioRepository.save(t);
  }

  delete(t: UsuarioEntity): Promise<DeleteResult> {
    return this.usuarioRepository.delete(t);
  }

  findAll(): Promise<UsuarioEntity[]> {
    return this.usuarioRepository.find();
  }

  findById(id: string): Promise<UsuarioEntity> {
    return this.usuarioRepository.findOne(id);
  }


  
}
