import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { typeOrmConfigAsync } from "./config/typeorm.config";


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: [".development.env"] }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    
  ],
  exports: [TypeOrmModule],
})
export class CoreModule {}
