const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Reportes", {
        //await mongoose.connect("mongodb://localhost:27701/Reportes", {
            
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log("Conectado a la base de datos");
    } catch (error) {
        console.log("Error al conectar");
    }
};

module.exports = connectDb;