import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const path = process.env.PATH_NAME || 5000
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('Nest lesson')
  .setDescription('first documentation')
  .setVersion('1.0.0')
  .addTag('My nest sw')
  .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs',app, document)

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(path);
  console.log(`Server started at port ${path}`);
}
bootstrap();
