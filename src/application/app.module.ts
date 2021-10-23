import { Module } from '@nestjs/common';
import { RolControllerModule } from 'src/infrastructure/endpoint/rol/rol-controller.module';

@Module({
  imports: [RolControllerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
