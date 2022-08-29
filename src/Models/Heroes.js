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

    async delete() {
        try {
            const result = await knex.delete().table('heroes')
            return result;
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = new Heroes()