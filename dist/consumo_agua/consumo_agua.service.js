"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumoAguaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ConsumoAguaService = class ConsumoAguaService {
    constructor(consumerModel) {
        this.consumerModel = consumerModel;
    }
    async createConsumer(consumer) {
        const consumerModel = new this.consumerModel({
            consumerId: consumer.consumerId,
            waterConsumed: consumer.waterConsumed,
            date: consumer.date
        });
        const result = await consumerModel.save();
        return result.id;
    }
    async readAllConsumers() {
        const allConsumersData = await this.consumerModel.find().exec();
        return allConsumersData;
    }
    async updateConsumer(consumer) {
        const updatedConsumer = await this.consumerModel.findOne({ consumerId: consumer.consumerId });
        if (!updatedConsumer) {
            throw new common_1.NotFoundException('Não foi possível encontrar o consumidor.');
        }
        if (consumer.consumerId) {
            updatedConsumer.consumerId = consumer.consumerId;
        }
        if (consumer.date) {
            updatedConsumer.date = consumer.date;
        }
        if (consumer.waterConsumed) {
            updatedConsumer.waterConsumed = consumer.waterConsumed;
        }
        updatedConsumer.save();
    }
    async deleteConsumer(id) {
        const result = await this.consumerModel.deleteOne({ _id: id });
    }
};
exports.ConsumoAguaService = ConsumoAguaService;
exports.ConsumoAguaService = ConsumoAguaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Consumer')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ConsumoAguaService);
//# sourceMappingURL=consumo_agua.service.js.map