import { UsuarioSqlModule } from "src/infrastructure/driven-adapters/usuario/usuario-sql.module";
import { Module } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";

@Module({
  imports: [UsuarioSqlModule],
  providers: [UsuarioService],
  exports: [UsuarioService],
})
export class UsuarioServiceModule {
  
}
