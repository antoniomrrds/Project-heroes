const Heroes = require('../Models/Heroes');
const { validateUser } = require('../Schemas/SchemaHeroes')
class HeroesController {
    async store(req, res) {
        try {
            const { name, superPowers } = req.body;
            const heroesAtribute = {
                name,
                superPowers
            }

            let response = validateUser(heroesAtribute)
            let errors = [];
            if (response.error) {
                errors.push(response.error.details.map(e => e.message))
                console.log(response.error.details)
                res.status(400).json({ err: errors })
                return;
            }

            await Heroes.createHero(heroesAtribute);
            res.status(201).json({ msg: 'hero created successfully' })
        } catch (error) {
            console.error(error)
            res.status(500).json({ err: 'an error has occurred' })
        }
    }

    async update(req, res) {
        try {
            const { name, superPowers } = req.body;
            const heroesAtribute = {
                name,
                superPowers
            }

            let response = validateUser(heroesAtribute)
            let errors = [];
            if (response.error) {
                errors.push(response.error.details.map(e => e.message))
                console.log(response.error.details)
                res.status(400).json({ err: errors })
                return;
            }

            await Heroes.createHero(heroesAtribute);
            res.status(201).json({ msg: 'hero created successfully' })
        } catch (error) {
            console.error(error)
            res.status(500).json({ err: 'an error has occurred' })
        }
    }

    async index(req, res) {
        try {
            const result = await Heroes.findAll();

            if (result.length == 0) {
                res.status(404).json({ msg: 'heroes not found' })
                return;
            }

            res.json(result);

        } catch (error) {
            console.error(error)
            res.status(500).json({ err: 'an error has occurred' });
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params;
            const idConverter = Number(id);

            if (idConverter == NaN) {
                res.status(404).json({ err: 'Id not found' })
                return;
            }

            const result = await Heroes.findById(id);

            if (result.length == 0) {
                res.status(404).json({ msg: 'hero not found' })
                return;
            }

            res.json(result);
        } catch (error) {
            console.error(error)
            res.status(500).json({ err: 'an error has occurred' });
        }
    }

    async delete(req, res) {
        try {

            const { id } = req.params;
            const idConverter = Number(id);

            if (isNaN(idConverter)) {
                res.status(404).json({ err: 'Id not found' })
                return;
            }

            const responseDelete = await Heroes.delete(id);
            if(responseDelete){
                res.status(200).json({msg:'hero is deleted'})
                return;
            }else{
                res.status(404).json({ err: `hero doesn't exist so it can't be deleted` })
                return;
            }
        } catch (error) {
            res.status(500).json({ err: 'an error has occurred' });
        }


    }


}

module.exports = new HeroesController()