const EntregaModel = require("../Models/Entregas.model");

// GET

const obtenerEntregas = async (req, res) => {
    try {
        const entregas = await EntregaModel.find();
        res.json(entregas);
    } catch (error) {
        res.status(400).json("Entrega no encontrada");
    }
};

const obtenerEntregasPorId = async (req, res) => {
    try {
        const id = req.params.id
        const entrega = await EntregaModel.findById(id);
        if (entrega) {
            res.json(entrega);
        } else {
            res.status(404).json("Entrega no encontrada")
        }
    } catch (error) {
        res.status(500).json("Error en el servidor")
    }
};

//Creacion

const registrarEntrega = async (req, res) => {
    try {
        const entrega = new EntregaModel(req.body);
        await entrega.save();
        res.status(201).json("Entrega Agregada");
    } catch (error) {
        res.status(404).json("Error al agregar la entrega");
    }
};

//Actualizar

const modificarEntrega = async (req, res) => {
    try { 
        const id = req.params.id;
        const entrega = await EntregaModel.findById(id);
        if (entrega) {
            entrega.id = req.body.id;
            entrega.importe = req.body.importe;
            entrega.letra = req.body.letra;
            entrega.prefijo = req.body.prefijo;
            entrega.numero = req.body.numero;
            const entregaActualizada = await entrega.save();
            res.status(200).json("Entrega Actualizada")
        } else {
            res.status(404).json("Entrega no encontrada");
        }
    } catch (error) {
        res.status(500).json("Error en el servidor");
    }
};

//Borrar

const eliminarEntrega = async (req, res) => {
    try {
        const id = req.params.id;
        const entrega = await EntregaModel.findById(id);
        if (entrega) {
            await EntregaModel.deleteOne({ _id: id });
            res.status(200).json("Entrega eliminada");
        } else {
            res.status(404).json("Entrega no encontrada");
        }
    } catch (error) {
        res.status(400).json("Entrega no eliminada");
    }
};

module.exports = {
    obtenerEntregas,
    obtenerEntregasPorId,
    registrarEntrega,
    modificarEntrega,
    eliminarEntrega
};