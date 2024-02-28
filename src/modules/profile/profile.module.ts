import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './entity/profile.entity';
import { User } from '../users/entity/user.entity';
import { UploadModule } from '../upload/upload.module';

@Module({
  imports: [TypeOrmModule.forFeature([Profile, User])],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
