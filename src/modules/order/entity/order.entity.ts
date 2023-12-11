import { User } from "src/modules/users/entity/user.entity"
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    text: string

    @Column('userId')
    userId: number

    @ManyToOne(() => User, (user) => user.id, { onDelete: 'CASCADE' })
    user: User
}