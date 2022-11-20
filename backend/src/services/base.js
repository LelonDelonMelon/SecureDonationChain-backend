
//get CRUD operations from one service
class BaseService {

    constructor(model) {
        this.model = model
        
    }

    
    async list (where)
    {
        return await this.model?.find(where || {}) //if where is specified get specified users, otherwise get all of them
    }
    async create(data)
    {
        return await this.model?.create(data)
    }
    async update(id, data)
    {
        return await this.model?.findByIdAndUpdate(id,data)
    }
    async delete(id)
    {
        return await this.model?.findByIdAndDelete(id)
    }
    async findOne(data){
        return await this.model?.findOne(data);
    }
}
module.exports = BaseService;