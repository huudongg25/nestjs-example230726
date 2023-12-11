import { Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './entity/order.entity';
import { Repository } from 'typeorm';

@Controller('order')
export class OrderController {
    constructor(
        @InjectRepository(Order)
        private orderRepository : Repository<Order>
    ) {
        
    }
    @Post('create-order')
    async createOrder(@Body() body){
        return await this.orderRepository.save(body)
    }

}
