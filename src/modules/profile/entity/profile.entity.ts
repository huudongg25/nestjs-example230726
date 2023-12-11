import { User } from 'src/modules/users/entity/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, nullable: false })
    phoneNumber: string

    @Column()
    address: string;

    @Column('userId')
    userId: number

    @OneToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
    @JoinColumn()
    user: User
}

