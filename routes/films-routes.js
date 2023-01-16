const express = require('express')
const router = express.Router()

const filmsControllers = require('../controllers/films-controllers')

router.get('/', filmsControllers.getFilms);

router.get('/:filmid', filmsControllers.getFilmsById);


module.exports = router;