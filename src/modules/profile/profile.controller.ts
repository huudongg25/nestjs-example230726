import {
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entity/profile.entity';
import { Repository } from 'typeorm';
import { User } from '../users/entity/user.entity';

@Controller('profile')
export class ProfileController {
  constructor(
    @InjectRepository(Profile)
    private ProfileRepo: Repository<Profile>,
  ) {}

  @Post('/create-profile')
  async createProfile(@Body() body) {
    return await this.ProfileRepo.save(body);
  }

  @Patch('/update/:id')
  async updateProfile(@Body() body, @Param() param) {
    return await this.ProfileRepo.update(param.id, body);
  }

  @Delete('/delete/:id')
  async deleteProfile(@Param() param) {
    return await this.ProfileRepo.delete(param.id);
  }
}
