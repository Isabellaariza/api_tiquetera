export default class GetTiqueterasById {
    constructor(tiqueteraRepository) {
        this.tiqueteraRepository = tiqueteraRepository
    }

    async execute (id) {
        return await this.tiqueteraRepository.findById(id);
    }
}