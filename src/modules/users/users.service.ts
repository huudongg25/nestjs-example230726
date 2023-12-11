import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(
        private userRepo: UserRepository
    ) {
    }

    getAllUser(): string {
        return this.userRepo.getUser()
    }
}
