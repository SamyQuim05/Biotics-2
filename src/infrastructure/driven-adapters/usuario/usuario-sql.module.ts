import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioSqlRepository } from "src/domain/model/usuario/usuario.repository";
import { RolRepositoryImplement } from "./rol-sql.service";
import { UsuarioEntity } from "./usuario.entity";

const providers = [
  { provide: UsuarioSqlRepository, useClass: UsuarioRepositoryImplement },
];

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity])],
  providers: [...providers],
  exports: [...providers, TypeOrmModule],
})
export class UsuarioSqlModule {}
