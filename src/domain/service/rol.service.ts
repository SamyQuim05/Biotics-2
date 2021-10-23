import { Inject, Injectable } from "@nestjs/common";
import { RolModel } from "../model/rol/rol.model";
import { RolRepository, RolSqlRepository } from "../model/rol/rol.repository";
import { CrudService } from "../shared/database/crud.service";

@Injectable()
export class RolService extends CrudService<
  RolModel,
  RolRepository
> {
  constructor(
    @Inject(RolSqlRepository)
    private rolRepository: RolRepository,
  ) {
    super(rolRepository);
  }

  async saveRol(rolModel:RolModel): Promise<RolModel>{
    return await this.rolRepository.save(rolModel);

  }
}
