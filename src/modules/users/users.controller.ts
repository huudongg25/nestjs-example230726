import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { EmailService } from 'src/common/mail.service';
import { UserRepository } from './users.repository';
import { AuthGuard } from 'src/guards/author.guard';

@Controller('users')
@UseGuards(AuthGuard)
// @UseInterceptors(LoggingInterceptor)
export class UsersController {
  constructor(
    private service: UsersService,
    private mailService: EmailService,
    private userRepository: UserRepository,
  ) {}

  @Get()
  getAllUser(): any {
    console.log('Controller...');
    return [1, 2, 3, 4, 5, 6];
  }

  @Get('test-mail')
  sendMail() {
    this.mailService.sendMail('quyetvosy@gmail.com', 'Phúc Du');
    return 'ok';
  }

  @Post('/create-user')
  async createUser(@Body() body): Promise<string> {
    try {
      return await this.userRepository.createUser(body);
    } catch (error) {
      return error;
    }
  }

  @Get('detail/:id')
  async getDetail(@Param() param) {
    const data = await this.userRepository.getDetail(param.id);
    console.log(param.id);
    console.log(data);
    return data;
  }

  @Delete('delete/:id')
  async deleteUser(@Param() param) {
    const data = await this.userRepository.deleteUser(param.id);
    console.log(param.id);
    console.log(data);
    return data;
  }
}
