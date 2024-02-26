import { AUTH_PACKAGE_NAME } from '@app/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AuthModule } from './auth.module';

async function bootstrap() {
  // const app = await NestFactory.create(AuthModule);
  // console.log('auth app started on port:', process.env.PORT);
  // await app.listen(process.env.PORT);

  const app = NestFactory.createMicroservice<MicroserviceOptions>(AuthModule, {
    transport: Transport.GRPC,
    options: {
      protoPath: join(__dirname, '../auth.proto'),
      package: AUTH_PACKAGE_NAME
    }
  });
  (await app).listen();
}
bootstrap();
