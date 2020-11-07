const express = require('express'); // On a besoin d'express pour créer le routeur //
const router = express.Router(); // Création du routeur //
const auth = require('../middleware/auth');

// Importation de la logique métier des controllers //
const userControl = require('../controllers/user');

// Définition des routes authentification //
router.post('/signup', userControl.signup); // Création des 2 routes avec les méthodes signup et login //
router.post('/login', userControl.login);

// Définition des routes gestion user //
router.delete('/:id', auth, userControl.deleteUser);
//router.get('/:id', auth, userControl.getOneUser);
router.get('/', auth, userControl.getAllUsers);
//router.put('/', auth, userControl.updateUser);

module.exports = router;

