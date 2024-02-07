const express = require("express");
const router = express.Router();
const entregasController = require("../Controllers/EntregasController")

router.get("/entregas", entregasController.obtenerEntregas)

router.get("/entregas/:id", entregasController.obtenerEntregasPorId)

router.post("/entrega", entregasController.registrarEntrega);

router.put("/entrega/:id", entregasController.modificarEntrega);

router.delete("/entrega/:id", entregasController.eliminarEntrega);

module.exports = router;