const HeroesController = require('../Controllers/HeroesController');
const HomeController = require('../Controllers/HomeController')

const router = require('express').Router()

router.get('/',HomeController.index);

router.get('/hero',HeroesController.index);
router.post('/hero',HeroesController.create);


module.exports = router