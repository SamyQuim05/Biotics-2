import { Injectable, Scope } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RolRepository } from "src/domain/model/rol/rol.repository";
import { DeleteResult, Repository } from "typeorm";
import { RolEntity } from "./rol.entity";


@Injectable({ scope: Scope.DEFAULT })
export class RolRepositoryImplement implements RolRepository {
  constructor(
    @InjectRepository(RolEntity)
    private readonly rolRepository: Repository<RolEntity>,
  ) {}

  save(t: RolEntity): Promise<RolEntity> {
    return this.rolRepository.save(t);
  }

  update(t: RolEntity): Promise<RolEntity> {
    return this.rolRepository.save(t);
  }

  delete(t: RolEntity): Promise<DeleteResult> {
    return this.rolRepository.delete(t);
  }

  findAll(): Promise<RolEntity[]> {
    return this.rolRepository.find();
  }

  findById(id: string): Promise<RolEntity> {
    return this.rolRepository.findOne(id);
  }


  
}
