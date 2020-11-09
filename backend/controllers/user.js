const bcrypt = require('bcrypt'); // Hashage de passwords //
const jwt = require('jsonwebtoken'); // Sécurisation de la connection grâce à des tokens uniques //
const connectmysql = require('../config/connectmysql'); // Connection base de données //

// Exportation des fonctions //
// Fonction signup, sauvegarde d'un nouvel utilisateur //
exports.signup = (req, res, next) => {
    // Paramètres //
    let email = req.body.email;
    let password = req.body.password;
    let lastName = req.body.lastName;
    let firstName = req.body.firstName;
    let jobTitle = req.body.jobTitle;
    bcrypt.hash(password, 10) //Fonction pour hasher un mot de passe fonc async//
        .then(hash => { // On récupére le hash //                   
            // Requête SQL base de données //
             let signupQuery = "INSERT INTO user VALUES (?, ?, ?, ?, ?)";
            // Enregistrement de l'utilisateur dans la base de données //
            const insertsQuery = [email, hash, lastname, firstname, jobtitle];
            // Envoi de la requête //
            connectmysql.query(signupQuery, insertsQuery, (error, rows, fields) => {
                if (error) {
                    return res.status(500).json({ message: 'Utilisateur non créé' });
                }
                    res.status(201).json({ message: 'Utilisateur créé' });
            });
        })
        .catch(error => res.status(500).json({ error }));
};

// Fonction login //
exports.login = (req, res, next) => {
    const email = req.body.email;
    const login = [email];
    const queryLogin = ("SELECT id, firstname, lastname, email, password, jobtitle FROM Users WHERE email = ?");
    connectmysql.query(queryLogin, login, (error, rows, fields) => {
        if (error) {
            return res.status(401).json({ message: 'Utilisateur non créé' });
        }
        bcrypt.compare(req.body.password, user.password)
        .then(valid => {
            if (!valid) {
                return res.status(401).json({ message: 'Mot de passe incorrect. Try again !' });
            }
            res.status(200).json({
                userId: user._id,
                token: jwt.sign(
                    { userId: user._id },
                    'RANDOM_TOKEN_SECRET',
                    { expiresIn: '24h' }
                )
            });
        })
            .catch(error => res.status(500).json({ error }));
           
        })
};

    
    

