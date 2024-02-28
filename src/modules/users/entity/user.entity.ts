import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
  Unique,
} from 'typeorm';
import { Profile } from 'src/modules/profile/entity/profile.entity';
import { Order } from 'src/modules/order/entity/order.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  username: string;

  @Column()
  password: string;

  @Column()
  age: number;

  @Column({ default: 1 })
  gender: number;

  @OneToOne(() => Profile, (profile) => profile.user, { onDelete: 'CASCADE' })
  profile: Profile;

  @OneToMany(() => Order, (order) => order.user, { onDelete: 'CASCADE' })
  order: Order[];
}
