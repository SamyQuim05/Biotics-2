import { Module } from "@nestjs/common";
import { RolServiceModule } from "src/domain/service/rol-service.module";
import { RolController } from "./rol.controller";

@Module({
  imports: [RolServiceModule],
  controllers: [RolController],
})
export class RolControllerModule {}
