const knex = require('../database/index');
class Heroes {
    async createHero(obj) {
        try {
            await knex.insert(obj).table('heroes')
        } catch (error) {
            console.error(error)
        }
    }

    async findAll() {
        try {
            const result = await knex
                .select(['id', 'name', 'superPowers'])
                .table('heroes')
            return result;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async findById(id) {
        try {
            const result = await knex
                .select(['id', 'name', 'superPowers'])
                .where({ id: id })
                .table('heroes')
            return result;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    async delete(id) {
        try {
            const search = await this.findById(id)
            if(search.length > 0){
                await knex
                        .where({id:id})
                        .delete()
                        .table('heroes');
                return true;
            }else{
                return false;
            }
        } catch (error) {
            console.error(error)
            return false;
        }
    }
}

module.exports = new Heroes()