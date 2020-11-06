const express = require('express'); // On a besoin d'express pour créer le routeur //
const router = express.Router(); // Création du routeur //


const userControl = require('../controllers/user');

router.post('/signup', userControl.signup); // Création des 2 routes avec les méthodes signup et login //
router.post('/login', userControl.login);

module.exports = router;

