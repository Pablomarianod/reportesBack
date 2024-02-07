const VentaModel = require("../Models/Ventas.model");

// GET

const obtenerVentas = async (req, res) => {
    try {
        const ventas = await VentaModel.find();
        res.json(ventas);
    } catch (error) {
        res.status(400).json("Venta no encontrada");
    }
};

const obtenerVentasPorId = async (req, res) => {
    try {
        const id = req.params.id
        const venta = await VentaModel.findById(id);
        if (venta) {
            res.json(venta);
        } else {
            res.status(404).json("Venta no encontrada")
        }
    } catch (error) {
        res.status(500).json("Error en el servidor")
    }
};

//Creacion

const registrarVenta = async (req, res) => {
    try {
        const venta = new VentaModel(req.body);
        await venta.save();
        res.status(201).json("Venta Agregada");
    } catch (error) {
        res.status(404).json("Error al agregar la venta");
    }
};

//Actualizar
const modificarVenta = async (req, res) => {
    try {
        const id = req.params.id;
        const venta = await VentaModel.findById(id);
        if (venta) {
            venta.fecha = req.body.fecha;
            venta.hora = req.body.hora;
            venta.plan = req.body.plan;
            const ventaActualizada = await venta.save();
            res.status(200).json("Venta Actualizada")
            res.json(ventaActualizada)
        } else {
            res.status(404).json("Venta no encontrada");
        }
    } catch (error) {
        res.status(500).json("Error en el servidor");
    }
};

//Borrar

const eliminarVenta = async (req, res) => {
    try {
        const id = req.params.id;
        const venta = await VentaModel.findById(id);
        if (venta) {
            await VentaModel.deleteOne({ _id: id });
            res.status(200).json("Venta eliminada");
        } else {
            res.status(404).json("Venta no encontrada");
        }
    } catch (error) {
        res.status(400).json("Venta no eliminada");
    }
};

module.exports = {
    obtenerVentas,
    obtenerVentasPorId,
    registrarVenta,
    modificarVenta,
    eliminarVenta
};