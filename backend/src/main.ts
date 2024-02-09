import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('nestjs started on port: 3002');
  await app.listen(3002);
}
bootstrap();
