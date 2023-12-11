import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entity/user.entity";
import { FindOneOptions, Repository } from "typeorm";


@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {

    }
    getUser(): string {
        return 'repo'
    }

    async createUser(user: User): Promise<any> {
        const newUser: User = { ...user }
        return await this.userRepository.save(newUser)
    }

    async getDetail(id: number): Promise<User | undefined> {
        return await this.userRepository.findOne({ where: { id },relations:['profile','order'] });
    }

    async deleteUser(id:number) {
        return await this.userRepository.delete(id)

    }
}