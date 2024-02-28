import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { FileService } from './upload.service';
import { FileController } from './upload.controller';
import { cloudinaryConfig, multerConfig } from 'src/config/file.config';

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: multerConfig,
    }),
  ],
  providers: [FileService],
  controllers: [FileController],
})
export class UploadModule {
  constructor() {
    cloudinaryConfig();
  }
}
