import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RolSqlRepository } from "src/domain/model/rol/rol.repository";
import { RolRepositoryImplement } from "./rol-sql.service";
import { RolEntity } from "./rol.entity";

const providers = [
  { provide: RolSqlRepository, useClass: RolRepositoryImplement },
];

@Module({
  imports: [TypeOrmModule.forFeature([RolEntity])],
  providers: [...providers],
  exports: [...providers, TypeOrmModule],
})
export class RolSqlModule {}
