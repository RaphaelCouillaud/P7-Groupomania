// Logique de routing //
const express = require('express');
const router = express.Router();

const messageControl = require('../controllers/message');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, messageControl.createMessage); // On rajoute les middlewares auth et multer sur les routes qu'on veut protéger //
router.delete('/:id', auth, messageControl.deleteMessage);
router.get('/:id', auth, messageControl.getOneMessage);
router.get('/', auth, messageControl.getAllMessages);
router.put('/:id', auth, multer, messageControl.modifyMessage);
router.post('/:id/like', auth, multer, messageControl.likeMessage);



module.exports = router;