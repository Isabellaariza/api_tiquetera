import mongoose from "mongoose";

const TiqueteraSchema = new mongoose.Schema({
    nroTiquetera: Number,
    cliente: String,
    saldo: Number,
    totalTransacciones: Number,
    observaciones: String,
});

const TiqueteraModel = mongoose.model("Tiquetera", TiqueteraSchema); 

class TiqueteraRepositoryMongo {
    async create(tiqueteraData) {
        const tiquetera = new TiqueteraModel(tiqueteraData);
        return await tiquetera.save();
    }

    async findAll() {
        return await TiqueteraModel.find();
    }

    async findByIdAndUpdate(id, updates) {
        return await TiqueteraModel.findByIdAndUpdate(id, updates, { new: true });
    }

    async findById(id) {
        return await TiqueteraModel.findById(id);
    }
    
    async save(tiquetera) {
        const newTiquetera = new TiqueteraModel(tiquetera);
        return await newTiquetera.save();
    }

    async delete(id) {
        return await TiqueteraModel.findByIdAndDelete(id);
    }
}

export default TiqueteraRepositoryMongo;