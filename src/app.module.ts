import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UsersModule } from './modules/users/users.module';
import { UsersController } from './modules/users/users.controller';
import { UploadModule } from './modules/upload/upload.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeOrmConfig from './config/typeOrm.config';
import { ProfileModule } from './modules/profile/profile.module';
import { OrderModule } from './modules/order/order.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule, UploadModule, ProfileModule, OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(UsersController);
  }
}
