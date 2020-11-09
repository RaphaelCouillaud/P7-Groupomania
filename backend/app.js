const express = require('express');
const bodyParser = require('body-parser'); // Pour extraire l'objet JSON de la demande //
const path = require('path');

// Importation des routeurs //
const userRoutes = require("./routes/user"); // Importation de la route user //
const accountRoutes = require("./routes/account"); // Importation de la route account //




const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // On accéde à l'API depuis diverses origines //
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // Liste requêtes autorisées //
    next();
});

app.use(bodyParser.json()); // App requiert BodyParser //

app.use('/images', express.static(path.join(__dirname, 'images'))); // Pour toute requête envoyée à /images/, on sert ce dossier statique image //

// Enregistrement des routeurs //
app.use('/api/auth', userRoutes);
app.use('/api/accounts', accountRoutes); 


module.exports = app; // On exporte app //