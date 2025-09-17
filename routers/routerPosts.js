//importo express 
const express = require('express');

//definisco l'oggetto router
const router = express.Router();

//importo il controller dei posts
const postsController = require('../controllers/postsControllers.js');

//definisco delle rotte per i posts

//rotta index
router.get('/', postsController.index);

//rotta show
router.get('/:id', postsController.show);

//rotta create
router.post('/', postsController.store);

//rotta update
router.put('/:id', postsController.update);

//rotta patch
router.patch('/:id', postsController.modify);

//rotta delete
router.delete('/:id', postsController.destroy);

//esporto il router
module.exports = router;