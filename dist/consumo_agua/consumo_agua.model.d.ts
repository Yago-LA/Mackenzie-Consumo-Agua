import * as mongoose from 'mongoose';
export declare const WaterConsumeSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    consumerId: string;
    date: string;
    waterConsumed: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    consumerId: string;
    date: string;
    waterConsumed: number;
}>> & mongoose.FlatRecord<{
    consumerId: string;
    date: string;
    waterConsumed: number;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export interface Consumer extends mongoose.Document {
    id: string;
    consumerId: string;
    date: string;
    waterConsumed: number;
}
