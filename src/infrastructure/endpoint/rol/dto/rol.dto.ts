import { ApiProperty } from "@nestjs/swagger";


export class RolDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  nombre: string;

}

