const express = require("express");
const router = express.Router();
const ventasController = require("../Controllers/VentasController")

router.get("/ventas", ventasController.obtenerVentas)

router.get("/ventas/:id", ventasController.obtenerVentasPorId)

router.post("/venta", ventasController.registrarVenta);

router.put("/venta/:id", ventasController.modificarVenta);

router.delete("/venta/:id", ventasController.eliminarVenta);

module.exports = router;