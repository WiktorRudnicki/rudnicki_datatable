const express = require('express');
const { getMovie, rentMovie } = require('../controllers/funky');

const router = express.Router();

router.get('/movies', getMovie);
router.patch('/movies/:id', rentMovie);

module.exports = router;
