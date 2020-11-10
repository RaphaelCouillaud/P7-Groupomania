// Logique de routing //
const express = require('express');
const router = express.Router();

const messageControl = require('../controllers/message');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


// On rajoute les middlewares auth et multer sur les routes qu'on veut protéger //
router.post('/', auth, multer, messageControl.createMessage);
router.delete('/:id', auth, messageControl.deleteMessage);
router.get('/:id', auth, messageControl.getOneMessage);
router.get('/', auth, messageControl.getAllMessages);
router.put('/:id', auth, multer, messageControl.modifyMessage);




module.exports = router;