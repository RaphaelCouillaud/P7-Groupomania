const express = require('express'); // On a besoin d'express pour créer le routeur //
const router = express.Router(); // Création du routeur //

// Importation de la logique métier des controllers //
const userControl = require('../controllers/user');

// Définition des routes authentification //
router.post('/signup', userControl.signup);
router.post('/login', userControl.login);


module.exports = router;

