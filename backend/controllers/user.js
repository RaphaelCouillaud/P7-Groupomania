const bcrypt = require('bcrypt'); // Hashage de passwords //
const jwt = require('jsonwebtoken'); // Sécurisation de la connection grâce à des tokens uniques //
//const connectmysql = require('../configdb/connectmysql'); // Connection base de données //
const User = require('../models/user'); // Importation du modèle User //

//router.post('/signup', userControl.signup);
//router.post('/login', userControl.login);
//router.delete('/account/:id', auth, userControl.deleteAccount);
//router.get('/account/:id', auth, userControl.getOneAccount);
//router.put('/account/:id', auth, userControl.modifyAccount);

// Voir regex - front ou back ?//

// Exportation des fonctions //
// Fonction signup, sauvegarde d'un nouvel utilisateur //
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)  //Fonction pour hasher un mot de passe fonction async//
        .then(hash => { // On récupére le hash //
            const signUser = User.create ({//On prend ce mot de passe crypté pour créer un nouvel utilisateur //
                email: req.body.email, // Avec l'adresse mail passé - Payload, on renseigne tout ce qui nous intéresse//
                password : hash,
                lastname : req.body.lastname,
                firstname : req.body.firstname,
                jobtitle : req.body.jobtitle
            });
            signUser.save() // Enregistrement de l'utilisateur dans la base de données //
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

// Fonction login //
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email }) // Trouver si un utilisateur correspond à l'adresse envoyé dans la requête //
        .then(user => {
            if (!user) { // Pas d'user trouvé //
                return res.status(401).json({ error: 'Utilisateur inconnu !' });
            }
            bcrypt.compare(req.body.password, user.password) // On compare le password envoyé avec la password hashé //
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({ // Si comparaison ok, on renvoit un objet JSON contenant //
                        userId: user.id, // L'userId + //
                        token: jwt.sign( // Un token - Fonction sign de JsonWebToken//
                            { userId: user.id }, // 1er argument : données à encoder //
                            'RANDOM_TOKEN_SECRET', // 2ème : clé secréte encodage //
                            { expiresIn: '12h' }// 3 :argument de configuration //
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })

        .catch(error => res.status(500).json({ error }));
};

    
// Suppression d'un compte //
exports.deleteAccount = (req, res, next) => {
    User.findOne({ id: req.params.id }) // On trouve l'objet dans la base de données //
        .then((user) => {
            //const filename = sauce.imageUrl.split('/images/')[1]; // Qd on le trouve, on extrait le nom du fichier //
            //fs.unlink(`images/${filename}`, () => { // On le supprime avec fs.unlink //
                if(req.userId == req.params.id) { // Une fois la suppression, on l'indique à la base de données //
                    user.destroy() // Méthode //
                    .then(() => res.status(200).json({ message: 'Compte supprimé' }))
                    .catch(error => res.status(400).json({ error }));
                } else { res.status(400).json({ error })
                }
            });
        };

// Obtention d'un compte //
exports.getOneAccount = (req, res, next) => {
    User.findOne({ id: req.params.id })
        .then((user) => res.status(200).json(user))
        .catch(error => res.status(404).json({ error }));
};

// Modification d'un compte //
exports.modifyAccount = (req, res, next) => { // Modification d'une sauce //
    User.findOne({ id: req.params.id })
        .then((user) => {
            if (req.userId == req.params.id) { 
            email = req.body.email; // Avec l'adresse mail passé //
            //password : hash; On ne peut pas modifier le mot de passe ?//
            lastname = req.body.lastname;
            firstname = req.body.firstname;
            jobtitle = req.body.jobtitle;
            User.update()         
        .then(() => res.status(201).json({ message: 'Compte modifié !' }))
        .catch(error => res.status(400).json({ error }));
        } else {
            res.status(400).json({ error })
        }
        })
};