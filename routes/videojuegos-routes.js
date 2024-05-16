const express = require('express');
const {v4: uuiv4} = require('uuid');

const router = express.Router();
const gameController = require('./../controller/gameController')



router.get('/', gameController.getAllGames)

router.get('/:gid', gameController.getGameById);

router.get('/name/:gid', gameController.getGameByName);

 router.post('/', gameController.addGame);

 router.patch('/:gid', gameController.updateGame);

module.exports = router;