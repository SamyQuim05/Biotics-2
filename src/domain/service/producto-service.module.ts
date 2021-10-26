import { ProductoSqlModule } from "src/infrastructure/driven-adapters/producto/producto-sql.module";
import { Module } from "@nestjs/common";
import { ProductoService } from ;

@Module({
  imports: [ProductoSqlModule],
  providers: [ProductoService],
  exports: [ProductoService],
})
export class ProductoServiceModule{
  
}