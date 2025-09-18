class UpdateTiquetera {
    constructor(tiqueteraRepository) {
        this.tiqueteraRepository = tiqueteraRepository;
    }

    async execute(id, updates) {
        // Operador $inc para incrementar el campo
        const updateWithInc = {
            ...updates,
            $inc: { totalTransacciones: 1 }
        };

        const updatedTiquetera = await this.tiqueteraRepository.findByIdAndUpdate(id, updateWithInc);
        return updatedTiquetera;
    }
}


export default UpdateTiquetera;