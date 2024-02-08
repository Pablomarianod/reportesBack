const mongoose = require("mongoose");
const { Schema } = mongoose;

const entregaSchema = new Schema({
    id: {
        type: Number,
        required: true,
        trim: true
    },
    importe: {
        type: Number,
        required: true,
        trim: true
    },
    letra: {
        type: String,
        required: true,
    },
    prefijo: {
        type: Number,
        required: true,
    },
    numero: {
        type: Number,
        required: true,
    }

}, { versionKey: false });

const EntregaModel = mongoose.model("entregas", entregaSchema);
module.exports = EntregaModel;