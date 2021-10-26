import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductoSqlRepository } from "src/domain/model/producto/producto.repository";
import { ProductoRepositoryImplement } from "./producto-sql.service";
import { ProductoEntity } from "./producto.entity";


const providers = [
  { provide: ProductoSqlRepository, useClass: ProductoRepositoryImplement },
];

@Module({
  imports: [TypeOrmModule.forFeature([ProductoEntity])],
  providers: [...providers],
  exports: [...providers, TypeOrmModule],
})
export class ProductoSqlModule {}
