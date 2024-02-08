const mongoose = require("mongoose");
const { Schema } = mongoose;

const entregaSchema = new Schema({
    id: {
        type: Number,
        required: true,
        trim: true
    },
    fecha: {
        type: String,
        required: true,
        trim: true
    },
    sucursal: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
    numeroComprobante: {
        type: Number,
        required: true,
    }

}, { versionKey: false });

const EntregaModel = mongoose.model("entregas", entregaSchema);
module.exports = EntregaModel;