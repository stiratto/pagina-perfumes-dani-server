import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './filters/all-exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: ['error', 'warn', 'log'], // <--- Add this line in options object
  });
  app.useGlobalFilters(new AllExceptionsFilter());

  // const port = process.env.PORT || 4000;
  await app.listen(4000);
}
bootstrap();
