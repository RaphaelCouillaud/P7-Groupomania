const bcrypt = require('bcrypt'); // Hashage de passwords //
const jwt = require('jsonwebtoken'); // Sécurisation de la connection grâce à des tokens uniques //
const connectmysql = require('../config/connectmysql'); // Connection base de données //

// Exportation des fonctions //
// Fonction signup //
exports.signup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const lastName = req.body.lastName;
    const firstName = req.body.firstName;
    const jobTitle = req.body.jobTitle;
    bcrypt.hash(password, 10) //Fonction pour hasher un mot de passe fonc async//
        .then(hash => { // On récupére le hash //            
            // Requête SQL base de données //
            const queryUsers = "INSERT INTO users (email, password, lastname, firstname, jobtitle) VALUES (?, ?, ?, ?)";
            // Enregistrement de l'utilisateur dans la base de données //
            const insertUsers = [email, hash, lastname, firstname, jobtitle];
            // Envoi de la requête //
            connectmysql.query(queryUsers, insertUsers, (error, rows, fields) => {
                if (error) {
                    return res.status(400).json({ message: 'Utilisateur non créé' });
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
// Fonction suppression user //
exports.deleteUser = (req, res, next) => {
    const getId = req.params.id; // On trouve l'objet dans la base de données //
    const queryId = "DELETE FROM users WHERE id=?";
    const insertId = [id];
    connectmysql.query(queryId, insertId, (error, rows, fields) => {
        if (error) {
            return res.status(400).json({ message: 'Utilisateur non supprimé' });
        }
        res.status(200).json({ message: 'Utilisateur supprimé' });

    });
};

// Fonction obtention users //
exports.getAllUsers = (req, res, next) => {
    const queryString = "SELECT lastname FROM users WHERE id=1";
    connectmysql.query(queryString, (error, rows, fields) => {
        if (error) {
            return res.status(500).json({ message: 'Liste utilisateurs non disponible' });
        }
        else {
            if(rows[0]) {
                res.status(200).json(rows);
            }
        }
    }
    );
};
    
    




// Fonction obtention user //

// Fonction modification user //