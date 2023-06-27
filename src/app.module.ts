import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { BrandsController } from './brands/brands.controller';
import { BrandsModule } from './brands/brands.module';
// ConfigModule.forRoot();
@Module({
  imports: [
    ConfigModule.forRoot({ cache: true, isGlobal: true }),
    BrandsModule,
  ],
  controllers: [AppController, BrandsController],
  providers: [AppService],
})
export class AppModule {}
