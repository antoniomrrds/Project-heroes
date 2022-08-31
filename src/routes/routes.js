const HeroesController = require('../Controllers/HeroesController');
const HomeController = require('../Controllers/HomeController')

const router = require('express').Router()

router.get('/',HomeController.index);

router.get('/hero',HeroesController.index);
router.get('/hero/:id',HeroesController.show);
router.post('/hero',HeroesController.store);
router.put('/hero',HeroesController.update);
router.delete('/hero/:id',HeroesController.delete);


module.exports = router