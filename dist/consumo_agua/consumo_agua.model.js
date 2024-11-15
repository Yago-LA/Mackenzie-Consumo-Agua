"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaterConsumeSchema = void 0;
const mongoose = require("mongoose");
exports.WaterConsumeSchema = new mongoose.Schema({
    consumerId: { type: String, required: true },
    date: { type: String, required: true },
    waterConsumed: { type: Number, required: true },
});
//# sourceMappingURL=consumo_agua.model.js.map