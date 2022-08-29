const Heroes = require('../Models/Heroes');
const { validateUser } = require('../Schemas/SchemaHeroes')
class HeroesController {
    async create(req, res) {
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
                res.status(400).json({err:errors})
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
            res.json(result);
        } catch (error) {
            console.error(error)
            res.status(500).json({ err: 'an error has occurred' });
        }
    }

}

module.exports = new HeroesController()