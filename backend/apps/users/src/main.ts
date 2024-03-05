import { USERS_PACKAGE_NAME } from '@app/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { UsersModule } from './users.module';

async function bootstrap() {
  // const app = await NestFactory.create(AuthModule);
  // console.log('auth app started on port:', process.env.PORT);
  // await app.listen(process.env.PORT);

  const app = NestFactory.createMicroservice<MicroserviceOptions>(UsersModule, {
    transport: Transport.GRPC,
    options: {
      protoPath: join(__dirname, '../users/users.proto'),
      package: USERS_PACKAGE_NAME
    }
  });
  (await app).listen();
}
bootstrap();
