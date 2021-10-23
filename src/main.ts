import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './application/app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api/v1");

  // Test token access
  app.enableCors();
  const options = new DocumentBuilder()
    .setTitle("Biotics Rest API")
    .setDescription("API REST de Biotics")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("/docs", app, document);
  await app.listen(8080);
}
bootstrap();
