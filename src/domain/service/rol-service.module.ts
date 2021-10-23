import { RolSqlModule } from "src/infrastructure/driven-adapters/rol/rol-sql.module";
import { Module } from "@nestjs/common";
import { RolService } from "./rol.service";

@Module({
  imports: [RolSqlModule],
  providers: [RolService],
  exports: [RolService],
})
export class RolServiceModule {}
