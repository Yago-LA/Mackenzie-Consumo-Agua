import { Injectable, NotFoundException } from '@nestjs/common';
import { Consumer } from './consumo_agua.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ConsumoAguaService {

    constructor(@InjectModel('Consumer') private readonly consumerModel: Model<Consumer> ) {}

    // CRUD - CREATE, READ, UPDATE, DELETE
    // CREATE
    async createConsumer(consumer: Consumer){
        const consumerModel = new this.consumerModel(
            {
                consumerId: consumer.consumerId,
                waterConsumed: consumer.waterConsumed,
                date: consumer.date
            }
    );
        const result = await consumerModel.save();
        return result.id as string;
    }

    // READ
    async readAllConsumers(){
        const allConsumersData = await this.consumerModel.find().exec();
        return allConsumersData;
    }

    
   
    //UPDATE
    async updateConsumer(consumer: Consumer){
        const updatedConsumer = await this.consumerModel.findOne({consumerId: consumer.consumerId});
        if(!updatedConsumer){
            throw new NotFoundException('Não foi possível encontrar o consumidor.');
        }
        if(consumer.consumerId){
            updatedConsumer.consumerId = consumer.consumerId
        }
        if(consumer.date){
            updatedConsumer.date = consumer.date
        }
        if(consumer.waterConsumed){
            updatedConsumer.waterConsumed = consumer.waterConsumed
        }
        updatedConsumer.save()
    }
 

    //DELETE
    async deleteConsumer(id: number){
        const result = await this.consumerModel.deleteOne({_id: id});
    }

}
