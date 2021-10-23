import {
  Controller,
  Res,
  HttpStatus,
  Post,
  Get,
  Param,
  Body,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { plainToClass } from "class-transformer";
import { RolModel } from "src/domain/model/rol/rol.model";
import { RolService } from "src/domain/service/rol.service";
import { CreateRolDto } from "./dto/create-rol.dto";
import { RolDto } from "./dto/rol.dto";


@ApiTags("Rol Controller")
@Controller("/rol")
export class RolController {
  constructor(private rolService: RolService) {}

  @Post("/")
  @ApiOperation({ summary: "Guardar un rol" })
  @ApiResponse({
    status: 200,
    description: "rol guardado",
    type: RolDto,
  })
  createRol(
    @Body() createRolDto: CreateRolDto,
    ) {
    const rolModel = plainToClass(RolModel, createRolDto);
    return this.rolService.saveRol(rolModel)
      
  }

}


