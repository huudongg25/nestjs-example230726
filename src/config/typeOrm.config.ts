import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { Order } from 'src/modules/order/entity/order.entity';
import { Profile } from 'src/modules/profile/entity/profile.entity';
import { User } from 'src/modules/users/entity/user.entity';
config()

const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DBNAME,
    entities: [User,Profile,Order],
    synchronize: true,
};


export default typeOrmConfig;
