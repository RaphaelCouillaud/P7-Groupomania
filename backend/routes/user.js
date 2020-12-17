const express = require('express'); // On a besoin d'express pour créer le routeur //
const router = express.Router(); // Création du routeur //

// Importation de la logique métier des controllers //
const userControl = require('../controllers/user');
const auth = require('../middleware/auth');

// Définition des routes authentification //
router.post('/signup', userControl.signup);
router.post('/login', userControl.login);
router.delete('/account/:id', auth, userControl.deleteAccount);
router.get('/account/:id', auth, userControl.getOneAccount);
router.put('/account/:id', auth, userControl.modifyAccount);

module.exports = router;

