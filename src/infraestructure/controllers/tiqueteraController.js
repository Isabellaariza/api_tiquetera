import CreateTiquetera from "../../application/use-cases/tiqueteras/Createtiquetera.js";
import GetTiqueteras from "../../application/use-cases/tiqueteras/GetTiqueteras.js";
import GetTiqueterasById from "../../application/use-cases/tiqueteras/GetTiqueterasById.js";
import UpdateTiquetera from "../../application/use-cases/tiqueteras/UpdateTiqueteras.js";
import DeleteTiquetera from "../../application/use-cases/tiqueteras/DeleteTiquetera.js";
import TiqueteraRepositoryMongo from "../repositories/TiqueteraRepositoryMongo.js";

const tiqueteraRepository = new TiqueteraRepositoryMongo();
export const createTiquetera = async (req, res) => {
    try{
        const createTiquetera = new CreateTiquetera(tiqueteraRepository);
        const tiquetera = await createTiquetera.execute(req.body); 
        res.status(201).json(tiquetera);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getTiqueteras = async (req, res) => {
    try {
        const getTiqueteras = new GetTiqueteras(tiqueteraRepository);
        const tiqueteras = await getTiqueteras.execute();
        res.status(200).json(tiqueteras);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getTiqueterasById = async (req, res) => {
    try {
        const getTiqueterasById = new GetTiqueterasById(tiqueteraRepository);
        const tiquetera = await getTiqueterasById.execute(req.params.id);
        res.status(200).json(tiquetera);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateTiquetera = async (req, res) => {
    try {
        const updateTiquetera = new UpdateTiquetera(tiqueteraRepository);
        const tiquetera = await updateTiquetera.execute(req.params.id, req.body);
        if (!tiquetera) {
            return res.status(404).json({ message: "Tiquetera no encontrada" });
        }
        res.json(tiquetera);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteTiquetera = async (req, res) => {
    try {
        const deleteTiquetera = new DeleteTiquetera(tiqueteraRepository);
        const result = await deleteTiquetera.execute(req.params.id);
        if (!result) return res.status(404).json({ message: "Tiquetera no encontrada" });
        res.json({ message: "Tiquetera eliminada correctamente" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};