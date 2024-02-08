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
            venta.id = req.body.id;
            venta.importe = req.body.importe;
            venta.letra = req.body.letra;
            venta.prefijo = req.body.prefijo;
            venta.numero = req.body.numero;
            const ventaActualizada = await venta.save();
            res.status(200).json("Venta Actualizada")
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