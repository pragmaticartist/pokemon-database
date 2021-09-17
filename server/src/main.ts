import { NestFactory } from '@nestjs/core';
import * as path from 'path';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(`dist/**/*.entity{.ts,.js}', 'src/**/*.entity{.ts,.js}`);
  console.log(join(__dirname, '**', '*.entity.{ts,js}'));
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
