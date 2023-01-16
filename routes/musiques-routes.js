const express = require('express')
const router = express.Router()

const musiquesControllers = require('../controllers/musiques-controllers')

router.get('/', musiquesControllers.getMusiques);

router.get('/:musiqueid', musiquesControllers.getMusiquesById);

router.post('/', musiquesControllers.createMusiques);

router.patch("/:musiqueid", musiquesControllers.updateMusiques);

router.delete("/:musiqueid", musiquesControllers.deleteMusiques);


module.exports = router;