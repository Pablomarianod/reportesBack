const express = require("express");
const app = express();
const connectDb = require("./Db/mongodb");
const cors = require("cors");
require("dotenv").config()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");

    res.setHeader(
        "Access-Control-Allow-Methods",
        "PUT, POST, GET, DELETE, PATCH, OPTIONS"
    );
    next();
});

const PORT = process.env.PORT || 3000;
const initApp = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Servidor puesto en marcha en el puerto ${PORT}`);
        });
        await connectDb();
    } catch (error) {
        console.log("Error al iniciar la aplicación");
    }
};

initApp();

app.use("/api", require("./Routes/RutasVentas"));
app.use("/api", require("./Routes/RutasEntregas"));