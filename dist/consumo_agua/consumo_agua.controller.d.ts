import { Consumer } from './consumo_agua.model';
import { ConsumoAguaService } from './consumo_agua.service';
export declare class ConsumoAguaController {
    private readonly consumerService;
    constructor(consumerService: ConsumoAguaService);
    readAllConsumers(): Promise<any>;
    createConsumer(consumer: Consumer): Promise<any>;
    updateConsumer(consumer: Consumer): Promise<any>;
    deleteConsumer(id: number): Promise<any>;
}
