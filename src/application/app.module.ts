import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { RolControllerModule } from 'src/infrastructure/endpoint/rol/rol-controller.module';

@Module({
  imports: [CoreModule, RolControllerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
