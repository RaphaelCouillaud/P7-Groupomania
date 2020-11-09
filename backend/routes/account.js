// Logique de routing //
const express = require('express');
const router = express.Router();

const accountControl = require('../controllers/account');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


// On rajoute les middlewares auth et multer sur les routes qu'on veut protéger //
router.delete('/:id', auth, accountControl.deleteAccount);
router.get('/:id', auth, accountControl.getOneAccount);
router.get('/', auth, accountControl.getAllAccounts);
router.put('/:id', auth, multer, accountControl.modifyAccount);




module.exports = router;