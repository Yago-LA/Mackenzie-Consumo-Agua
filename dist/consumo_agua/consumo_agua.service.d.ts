import { Consumer } from './consumo_agua.model';
import { Model } from 'mongoose';
export declare class ConsumoAguaService {
    private readonly consumerModel;
    constructor(consumerModel: Model<Consumer>);
    createConsumer(consumer: Consumer): Promise<string>;
    readAllConsumers(): Promise<(import("mongoose").Document<unknown, {}, Consumer> & Consumer & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    updateConsumer(consumer: Consumer): Promise<void>;
    deleteConsumer(id: number): Promise<void>;
}
