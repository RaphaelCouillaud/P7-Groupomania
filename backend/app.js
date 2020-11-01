const express = require('express');
const bodyParser = require('body-parser'); // Pour extraire l'objet JSON de la demande //

const path = require('path');

const messageRoutes = require("./routes/message"); // Importation de la route Message //
const userRoutes = require("./routes/user"); // Importation de la route user //




const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // On accéde à l'API depuis diverses origines //
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // Liste requêtes autorisées //
    next();
});

app.use(bodyParser.json()); // App requiert BodyParser //

app.use('/images', express.static(path.join(__dirname, 'images'))); // Pour toute requête envoyée à /images/, on sert ce dossier statique image //

app.use('/api/messages', messageRoutes); // Pour cette route là, on utilise le router de sauceRoutes //
app.use('/api/auth', userRoutes); // On enregistre les routes //


module.exports = app; // On exporte app //