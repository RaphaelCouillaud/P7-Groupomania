// Logique de routing //
const express = require('express');
const router = express.Router();

const answerControl = require('../controllers/answer');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


// On rajoute les middlewares auth et multer sur les routes qu'on veut protéger //
router.post('/', auth, multer, answerControl.createAnswer);
router.get('/', auth, answerControl.getAllAnswers);
router.delete('/:id', auth, answerControl.deleteAnswer);





module.exports = router;