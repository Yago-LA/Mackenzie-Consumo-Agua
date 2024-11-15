import * as mongoose from 'mongoose';

export const WaterConsumeSchema = new mongoose.Schema({
    consumerId: {type: String, required: true},
    date: {type: String, required: true},
    waterConsumed: {type: Number, required: true},
})

export interface Consumer extends mongoose.Document {
    id: string;
    consumerId: string;
    date: string;
    waterConsumed: number;
}